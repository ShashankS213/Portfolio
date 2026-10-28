# Portfolio site

Static site: HTML, CSS and a little vanilla JS. No build step.

## Preview locally
Double-click `index.html`. No server needed.

## Phone number (spam-resistant)
The footer shows "Show phone number". The number is stored reversed and base64-encoded in `data-phone`, and only assembled in the browser after a click, so plain-text scrapers don't find it. To change it: `python3 -c "import base64;print(base64.b64encode('+91 XXXXX XXXXX'[::-1].encode()).decode())"` and paste the output into `data-phone`.

## Placeholders still open
Photo (see the comment in `index.html`) and, optionally, the official AWS badge image.

## Moving to React later
Each project is one self-contained `<article class="card">` block, skills use a single `.chip` pattern, and all colors and spacing live in `assets/css/tokens.css`. To migrate: create a Vite + React app, turn each block into a component (`ProjectCard`, `Chip`, `Diagram`), move the project text into a data array, and reuse the three CSS files unchanged.

## Publish on GitHub Pages
    git init && git add . && git commit -m "Initial portfolio homepage"
    git branch -M main
    git remote add origin https://github.com/<username>/<repo>.git
    git push -u origin main
On GitHub: Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
A repo named `<username>.github.io` gives a root URL. For a project URL (`.../<repo>/`), change the 404 page's `/` links and stylesheet paths to `/<repo>/`.

## Add a case study
Copy `projects/_template.html`, keep only sections backed by confirmed facts, then link the project from `index.html`.

## Project cards and logos
Every project card on the home page has the same structure: visual, category and status, title, one-sentence summary, one-line contribution, up to four chips. Keep text short so cards stay equal height. When a case-study page exists, add `<a class="card-link" href="projects/NAME.html">Case study</a>` at the bottom of that card's `.card-body`. Logos live in `assets/img/` (`.webp` or `.png`, about 128px). Chips without a logo use a monogram tile (`<b>`).

## Skills, timeline and logo names
Tool logos are `assets/img/tool-NAME.ext`, organization logos `org-NAME.ext`. A tool or organization without a logo file automatically shows a monogram tile. Dates in the timeline are plain text in `<span class="when">`.

Unused logos (for example `cursor.svg`, `react.webp`) are kept in `assets/img/unused/`. Move one out and add it to a skills block only if it matches real experience.
