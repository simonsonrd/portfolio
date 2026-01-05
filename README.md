# Portfolio (Static Site)

A simple, accessible, responsive portfolio website using plain HTML, CSS, and JavaScript. Ready to host with GitHub Pages.

## Features
- Three pages: `index.html` (Home), `about.html`, `projects.html`
- Shared header navigation and footer
- Mobile menu, theme toggle (system-aware with manual override), focus-visible styles
- Semantic HTML and basic ARIA, skip link, good contrast
- Open Graph meta with a social preview placeholder
- Lightweight CSS and JS, no build step or deps

## Quick start (Local preview)

Use one of the following options in Windows PowerShell from the project directory:

### Option A: Python (built-in simple server)
```powershell
cd .\
python -m http.server 5500
```
Then open http://localhost:5500/ in your browser.

### Option B: Node (http-server)
If you have Node.js, you can use `npx http-server`:
```powershell
cd .\
npx http-server -p 5500 -c-1
```

> Tip: Keep the terminal open to keep the server running. Press Ctrl+C to stop.

## Structure
```
/ (root)
  index.html
  about.html
  projects.html
  /css/styles.css
  /js/main.js
  /assets/icons/favicon.svg
  /assets/images/profile.svg
  /assets/images/placeholder.svg
  /assets/images/social-preview.svg
  README.md
  .gitignore
```

## Edit the content
- Replace "Your Name" and contact links across pages.
- Update skills, experience, education, and project cards.
- Paste your YouTube embed iframe in `about.html` (see comment for the example).
- Replace images in `/assets/images` as needed and update `og:image` if you host a custom one.

## Deploy on GitHub Pages
1. Create a new repository on GitHub.
2. Initialize git locally and push:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to your repository → Settings → Pages.
4. Under "Source", choose the `main` branch and `(root)` folder (ensure `index.html` is in root). Click Save.
5. Wait for the deployment. Your site will be at:
   `https://<your-username>.github.io/<your-repo>/`

## License
You own your content. Feel free to reuse the structure/styles; no attribution required.
