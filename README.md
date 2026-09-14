# namanvora07.github.io

Portfolio site for Naman Vora — Mechanical Design Engineer.
Plain HTML/CSS/JS, no build step.

## Pages

```
index.html                   → home: about + contact only
projects.html                → hub with the 3 domain cards
  design-simulation.html     → Domain 01 projects
  manufacturing-quality.html → Domain 02 projects
  modeling-controls.html     → Domain 03 projects
experience.html              → positions of responsibility
education.html               → education
skills.html                  → technical skills + publication
styles.css                   → shared stylesheet
script.js                    → mobile nav
assets/                      → photos, logos, project images, résumé PDF
```

Top nav (Home / Projects / Positions of Responsibility / Education / Skills / Contact) is repeated in each HTML file.
Edit it in one file, then copy the same `<nav>` block into the others.

## Publish on GitHub Pages

Repo must be named exactly `namanvora07.github.io` and be Public.
Upload all files (keep `assets/` intact) → Settings → Pages → branch `main`, folder `/ (root)`.
Live at https://namanvora07.github.io

## Adding a project

Copy an existing `<article class="proj">` block on the relevant domain page.
Each has: a full-bleed `.proj-banner` with the title, then `.proj-meta`
(number, subtitle, tags), then Challenge / Approach / Outcome `.cao-block`s,
and optionally a `.proj-figures` block for images.
