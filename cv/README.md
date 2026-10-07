# CV

`cv-data.js` holds the CV content. `build.js` turns it into:

- `../Noah-Lim-CV.pdf` (served by the site's "Download CV" link)
- `../Noah Lim CV.docx` (editable Word version)

To update: edit `cv-data.js`, then run

```bash
cd cv
npm install   # first time only
npm run build
```

The PDF is printed with Google Chrome, so Chrome must be installed (or set `CHROME` to its path).
Keep the content in step with `index.html`.
