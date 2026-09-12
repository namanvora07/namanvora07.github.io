# namanvora07.github.io

Personal portfolio for Naman Vora — Mechanical Design, Manufacturing & Quality Engineer.
Plain HTML/CSS/JS, no build step.

## Structure

```
index.html                   → home: summary, 3 domain gateways, experience, education, skills
design-simulation.html       → Domain 01 projects
manufacturing-quality.html   → Domain 02 projects
modeling-controls.html       → Domain 03 projects
styles.css                   → shared stylesheet
script.js                    → mobile nav
assets/                      → photo + résumé PDF
```

Each project on a domain page follows the same shape: title, tool tags, then
Challenge → Approach → Outcome, with a key-metrics panel alongside.

## Publish on GitHub Pages

1. Create a public repo named exactly `namanvora07.github.io`.
2. Upload all files (keep the `assets/` folder intact), or:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/namanvora07/namanvora07.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → source "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live at https://namanvora07.github.io

## Adding or editing a project

Copy an existing `<article class="proj">` block on the relevant domain page and edit
the heading, `.proj-sub`, tags, the three `.cao-block` sections, and the metrics panel.
Update `.proj-index` numbers and the project count in the `.dc-meta` span on `index.html`.

Blocks marked with a `.note` box are placeholders awaiting full descriptions — delete
the note div once filled in.

## Project images

Add images inside a project's `<div class="wrap">` after the `.cao` block:

```html
<div class="proj-figures">
  <figure>
    <img src="assets/your-image.jpg" alt="...">
    <figcaption>Caption text.</figcaption>
  </figure>
</div>
```

Use `class="proj-figures single"` for one full-width image. Drop images in `assets/`.
