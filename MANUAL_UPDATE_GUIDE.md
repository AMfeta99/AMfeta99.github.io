# Quick Update Guide for Remaining HTML Files

## Files to Update
- `academic&career.html` (partially done - needs head section update)
- `proj.html`
- `pub.html`

---

## For academic&career.html

### 1. Update the `<head>` section (lines 5-11)
Replace:
```html
<title>Ana Maria Sousa | AI Engineer</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="assets/css/main.css" />
<link rel="stylesheet" href="assets/css/work_exp.css" />
<link rel="stylesheet" href="assets/css/certificates.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

With:
```html
<title>Ana Maria Sousa | AI Research Engineer - Experience & Career</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

<!-- SEO Meta Tags -->
<meta name="description" content="Explore Ana Maria Sousa's professional experience in AI, including work at DEUS, Bosch, University of Twente, and INESC TEC. View certifications and education." />
<meta name="author" content="Ana Maria Sousa" />

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png" />

<!-- Stylesheets -->
<link rel="stylesheet" href="assets/css/main.css" />
<link rel="stylesheet" href="assets/css/work_exp.css" />
<link rel="stylesheet" href="assets/css/certificates.css" />
<link rel="stylesheet" href="assets/css/enhancements.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

**Status:** ✅ Scripts already updated (line 517)

---

## For proj.html

### 1. Update the `<head>` section (lines 9-12)
Replace:
```html
<title>Ana Maria Sousa | AI Engineer</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="assets/css/main.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

With:
```html
<title>Ana Maria Sousa | AI Projects Portfolio</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

<!-- SEO Meta Tags -->
<meta name="description" content="Explore Ana Maria Sousa's AI and Machine Learning projects including Time Metamorphy, Brain Tumor Diagnosis, LLM vs Human Minds, and more." />
<meta name="author" content="Ana Maria Sousa" />

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png" />

<!-- Stylesheets -->
<link rel="stylesheet" href="assets/css/main.css" />
<link rel="stylesheet" href="assets/css/enhancements.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

### 2. Update scripts section (before `</body>` tag, around line 227-229)
Add this line after `<script src="assets/js/main.js"></script>`:
```html
<script src="assets/js/enhancements.js"></script>
```

---

## For pub.html

### 1. Update the `<head>` section (lines 9-12)
Replace:
```html
<title>Ana Maria Sousa | AI Engineer</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="assets/css/main.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

With:
```html
<title>Ana Maria Sousa | Publications & Research</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

<!-- SEO Meta Tags -->
<meta name="description" content="View Ana Maria Sousa's scientific publications and research papers in AI, Machine Learning, and Biomedical Engineering." />
<meta name="author" content="Ana Maria Sousa" />

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png" />

<!-- Stylesheets -->
<link rel="stylesheet" href="assets/css/main.css" />
<link rel="stylesheet" href="assets/css/enhancements.css" />
<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
```

### 2. Update scripts section (before `</body>` tag)
Add this line after `<script src="assets/js/main.js"></script>`:
```html
<script src="assets/js/enhancements.js"></script>
```

---

## Summary of Changes Needed

| File | Head Section | Scripts Section |
|------|--------------|-----------------|
| index.html | ✅ Done | ✅ Done |
| me.html | ✅ Done | ✅ Done |
| academic&career.html | ❌ Manual | ✅ Done |
| proj.html | ❌ Manual | ❌ Manual |
| pub.html | ❌ Manual | ❌ Manual |

---

## After Manual Updates

1. Save the favicon image as `favicon.png` in the root directory
2. Copy the content from `tech-stack-section.html` and insert it into `index.html` after line 198 (after Awards section)
3. Test the website locally
4. Verify dark mode toggle works
5. Check that all pages have the enhancements

---

## Testing Checklist
- [ ] Dark mode toggle appears on all pages
- [ ] Back-to-top button works
- [ ] Favicon shows in browser tab
- [ ] Tech stack section displays on homepage
- [ ] All animations work smoothly
- [ ] Pages load without errors
