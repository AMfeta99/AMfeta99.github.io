"""Validate internal links in HTML files."""

import re
from pathlib import Path
from bs4 import BeautifulSoup


def get_all_anchor_ids(html_file):
    """Get all id attributes from an HTML file."""
    try:
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "html.parser")
        return {elem.get("id") for elem in soup.find_all(id=True) if elem.get("id")}
    except Exception:
        return set()


def validate_links():
    """Check that all internal links point to existing files and anchors."""
    # HTML files are in src/ folder
    src_folder = Path("src")
    html_files = list(src_folder.glob("*.html"))
    errors = []

    # Build anchor map for all HTML files (key: filename only)
    anchor_map = {}
    for html_file in html_files:
        anchor_map[html_file.name] = get_all_anchor_ids(html_file)

    # Also check snippets folder if it exists
    snippets_folder = Path("assets/snippets")
    if snippets_folder.exists():
        for snippet in snippets_folder.glob("*.html"):
            anchor_map[snippet.name] = get_all_anchor_ids(snippet)

    # Known cross-file references (snippets included via clipboard/paste)
    known_cross_file_anchors = {
        ("index.html", "tech_skills"),  # In tech-stack-section.html (snippet)
    }

    for html_file in html_files:
        soup = BeautifulSoup(html_file.read_text(encoding="utf-8"), "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"]

            # Skip external links and mailto
            if href.startswith(("http", "https", "mailto:")):
                continue

            # Handle pure anchors (e.g., #top)
            if href.startswith("#"):
                continue

            # Handle links with anchors (e.g., index.html#awards)
            if "#" in href:
                base_file, anchor = href.split("#", 1)

                # Skip known cross-file references (snippets)
                if (base_file, anchor) in known_cross_file_anchors:
                    continue

                # Check relative to src folder
                target = src_folder / base_file
                if not target.exists():
                    errors.append(f"{html_file.name}: broken link -> {href}")
                elif anchor and anchor not in anchor_map.get(base_file, set()):
                    errors.append(f"{html_file.name}: broken anchor -> {href}")
                continue

            # Check internal links - relative to src folder
            target = src_folder / href
            if not target.exists():
                errors.append(f"{html_file.name}: broken link -> {href}")

    if errors:
        print("Broken links found:")
        for e in errors:
            print(f"  - {e}")
        raise SystemExit(1)

    print("All internal links are valid")


if __name__ == "__main__":
    validate_links()
