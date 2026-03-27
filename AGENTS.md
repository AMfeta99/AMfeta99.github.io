# AGENTS.md - Development Guidelines for AMfeta99.github.io

## Overview
This is a personal portfolio website built with static HTML, CSS, and JavaScript. It uses jQuery for interactivity and a custom responsive design.

## Tech Stack
- HTML5
- CSS3 (with SASS for styling)
- JavaScript (vanilla + jQuery)
- Font Awesome for icons
- Python (for validation/testing scripts)

---

## Build & Development Commands

### Running the Site
This is a static website - no build process required.

```bash
# View locally - simply open HTML file in browser
open index.html

# Or use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## Validation & Testing Commands

### Prerequisites
Install the validation and testing tools:

```bash
# Install all dependencies (including test tools)
pip install html5validator pytest beautifulsoup4 requests pre-commit
```

### Pre-commit Hooks (Local Validation)
Runs automatically before each commit to catch issues early.

```bash
# Run all pre-commit hooks manually
pre-commit run --all-files

# Install pre-commit hooks to run automatically on commit
pre-commit install
```

### HTML Validation
Validates HTML syntax and structure.

```bash
# Validate all HTML files
html5validator --verbose *.html
```

### Link Validation
Checks that all internal links point to existing files.

```bash
# Run link validation script
python scripts/validate_links.py

# Or run tests
pytest tests/
```

### Run Single Test
```bash
# Run a specific test file
pytest tests/test_links.py

# Run a specific test by name
pytest tests/test_links.py -k "test_all_internal_links_valid"
```

### CI/CD (GitHub Actions)
Runs automatically on push/pull_request to main branch.

```bash
# No manual command needed - runs automatically
# See .github/workflows/ci.yml for validation steps
# See .github/workflows/deploy.yml for deployment
```

---

## Code Style Guidelines

### HTML Conventions
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Include proper meta tags in `<head>`: viewport, charset, description, author
- Add `<title>` tags to all pages with descriptive titles
- Use lowercase for HTML tags and attributes
- Quote attribute values: `<div class="example">`
- Close all tags properly
- Place CSS in `<link>` tags in `<head>`, JS in `<script>` tags before `</body>`

### CSS Conventions
- Keep main styles in `assets/css/main.css`
- Additional component styles in separate CSS files (e.g., `work_exp.css`, `certificates.css`)
- Use SASS for new styling (files in `assets/sass/`)
- Follow existing CSS organization - grouped by section
- Use flexbox/grid for layouts
- Mobile-first responsive breakpoints:
  - xlarge: 1281px - 1680px
  - large: 981px - 1280px
  - medium: 737px - 980px
  - small: 481px - 736px
  - xsmall: 0 - 480px

### JavaScript Conventions
- Use IIFE pattern: `(function($) { ... })(jQuery);`
- Use jQuery for DOM manipulation (existing pattern)
- Prefix variables with `$` for jQuery objects: `var $element = $('.element');`
- Use `var` (not `let`/`const`) to match existing codebase
- Add semicolons at end of statements
- Use camelCase for variable and function names
- Comment complex logic briefly
- Place scripts at bottom of body, after `</body>` closing

### Naming Conventions
- Files: lowercase with hyphens (`my-file-name.html`)
- CSS classes: lowercase with hyphens (`.my-class`)
- JavaScript variables/functions: camelCase (`myFunction`)
- IDs: camelCase or lowercase with hyphens

### Image Assets
- Store images in `/images/` directory
- Use descriptive names: `project-name.jpg`
- Optimize images before adding (JPEG for photos, PNG for graphics)
- Favicon: `favicon.png` in root directory

### Error Handling
- Check browser console for JavaScript errors
- Verify all external resources (CDN links, fonts) are accessible
- Run validation before pushing: `pre-commit run --all-files`

---

## File Structure

```
/
├── index.html                # Main homepage
├── me.html                  # About me page
├── academic&career.html      # Experience & education
├── proj.html                # Projects portfolio
├── pub.html                 # Publications
├── pyproject.toml           # Python project config (validation tools)
├── .pre-commit-config.yaml  # Pre-commit hooks configuration
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI pipeline (validation)
│       └── deploy.yml       # Deploy to GitHub Pages
├── scripts/
│   └── validate_links.py    # Link validation script
├── tests/
│   └── test_links.py        # Pytest tests
├── assets/
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── sass/                # SASS source files
└── images/                  # Image assets
```

---

## Adding New Pages

1. Copy existing HTML structure from a working page
2. Update `<title>` and meta description
3. Include required CSS files in `<head>`:
   ```html
   <link rel="stylesheet" href="assets/css/main.css" />
   <link rel="stylesheet" href="assets/css/enhancements.css" />
   <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
   ```
4. Include JavaScript before `</body>`:
   ```html
   <script src="assets/js/jquery.min.js"></script>
   <script src="assets/js/breakpoints.min.js"></script>
   <script src="assets/js/main.js"></script>
   <script src="assets/js/enhancements.js"></script>
   ```

---

## Testing Checklist

Before any commit/push:
- [ ] Run pre-commit hooks: `pre-commit run --all-files`
- [ ] Validate HTML: `html5validator --verbose *.html`
- [ ] Check links: `python scripts/validate_links.py` or `pytest tests/`

Before any update:
- [ ] Open in browser and verify no console errors
- [ ] Check all links work
- [ ] Verify responsive design at all breakpoints
- [ ] Test dark mode toggle (if applicable)
- [ ] Verify images load correctly
- [ ] Check navigation works

---

## Common Issues & Solutions

- **jQuery not working**: Ensure `jquery.min.js` loads before other scripts
- **CSS not applying**: Check stylesheet path is correct
- **Responsive issues**: Verify viewport meta tag present
- **Mobile menu broken**: Check breakpoint configuration in main.js
- **Pre-commit fails**: Install dependencies: `pip install html5validator beautifulsoup4`
- **Tests fail**: Check that all linked files exist and paths are correct

---

## CI/CD Pipeline

### CI Pipeline (.github/workflows/ci.yml)
Runs on every push and pull request to main:
1. **pre-commit** - Run local validation hooks
2. **html-validate** - Validate HTML syntax
3. **link-check** - Verify internal links
4. **pytest** - Run automated tests

### Deploy Pipeline (.github/workflows/deploy.yml)
Runs automatically when pushing to main:
1. Checkout code
2. Configure GitHub Pages
3. Upload artifact
4. Deploy to https://amfeta99.github.io/

---

## Manual Update Guide

See `MANUAL_UPDATE_GUIDE.md` for detailed instructions on updating HTML files with SEO meta tags and enhancement scripts.
