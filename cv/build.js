// Builds the downloadable CV from cv-data.js:
//   ../Noah Lim CV.docx  (editable Word version, via the `docx` package)
//   ../Noah-Lim-CV.pdf   (typeset PDF, via headless Chrome printing cv.html)
//
// Usage: npm install && npm run build

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
    AlignmentType, BorderStyle, Document, ExternalHyperlink, LevelFormat,
    Packer, Paragraph, Table, TableCell, TableLayoutType, TableRow, TextRun, WidthType,
} = require('docx');
const cv = require('./cv-data');

const ROOT = path.join(__dirname, '..');
const INK = '0E1A2B';
const GOLD = '8A6A1E';
const MUTED = '5D6370';
const SERIF = 'Georgia';
const SANS = 'Calibri';

// A4 with 0.7" margins
const PAGE_W = 11906;
const MARGIN = 1000;
const TEXT_W = PAGE_W - 2 * MARGIN;

// ---------- Word ----------

const run = (text, opts = {}) => new TextRun({ text, font: SANS, size: 20, color: INK, ...opts });
const link = (text, url, opts = {}) => new ExternalHyperlink({
    link: url,
    children: [run(text, { color: INK, underline: { color: GOLD }, ...opts })],
});

function sectionHeading(text) {
    return new Paragraph({
        spacing: { before: 320, after: 120 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: INK, space: 4 } },
        children: [run(text.toUpperCase(), { bold: true, size: 17, color: GOLD, characterSpacing: 30 })],
    });
}

// Borderless table row helper: tables keep columns aligned in Word, Google Docs and Pages alike
const NONE = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const HAIR = { style: BorderStyle.SINGLE, size: 2, color: 'E2DACB' };

function grid(widths, rows, { rule = true, padY = 70 } = {}) {
    return new Table({
        width: { size: TEXT_W, type: WidthType.DXA },
        columnWidths: widths,
        layout: TableLayoutType.FIXED,
        borders: { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE },
        rows: rows.map(cells => new TableRow({
            cantSplit: true,
            children: cells.map((c, i) => new TableCell({
                width: { size: widths[i], type: WidthType.DXA },
                margins: { top: padY, bottom: padY, left: 0, right: i < cells.length - 1 ? 120 : 0 },
                borders: { top: NONE, left: NONE, right: NONE, bottom: rule ? HAIR : NONE },
                children: [new Paragraph({
                    alignment: c.right ? AlignmentType.RIGHT : AlignmentType.LEFT,
                    children: c.runs,
                })],
            })),
        })),
    });
}

// Title on the left, date flush right
function entryTitle(title, when) {
    return grid([TEXT_W - 3200, 3200], [[
        { runs: [run(title, { font: SERIF, size: 22 })] },
        { runs: [run(when, { size: 19, color: MUTED })], right: true },
    ]], { rule: false, padY: 40 });
}

const subline = (text) => new Paragraph({
    spacing: { after: 40 },
    keepNext: true,
    children: [run(text, { size: 19, color: MUTED })],
});

const bullet = (text) => new Paragraph({
    numbering: { reference: 'dash', level: 0 },
    spacing: { after: 20 },
    children: [run(text, { size: 19 })],
});


function buildDocx() {
    const body = [];

    body.push(new Paragraph({
        spacing: { after: 60 },
        children: [run(cv.name, { font: SERIF, size: 48 })],
    }));
    body.push(new Paragraph({
        spacing: { after: 60 },
        children: [run(cv.tagline, { size: 21, color: MUTED })],
    }));
    const contact = [];
    cv.contact.forEach((c, i) => {
        if (i) contact.push(run('   ·   ', { size: 19, color: GOLD }));
        contact.push(c.url ? link(c.text, c.url, { size: 19 }) : run(c.text, { size: 19 }));
    });
    body.push(new Paragraph({
        spacing: { after: 120 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: 'C9A227', space: 8 } },
        children: contact,
    }));

    body.push(sectionHeading('Profile'));
    body.push(new Paragraph({ spacing: { after: 40 }, children: [run(cv.summary, { size: 20 })] }));

    body.push(sectionHeading('Education'));
    cv.education.forEach(e => {
        body.push(entryTitle(e.title, e.when), subline(e.org));
        e.points.forEach(p => body.push(bullet(p)));
    });

    body.push(sectionHeading('Experience'));
    cv.experience.forEach(e => {
        body.push(entryTitle(e.title, e.when), subline(e.org));
        e.points.forEach(p => body.push(bullet(p)));
    });

    body.push(sectionHeading('Competition record'));
    body.push(grid([1100, TEXT_W - 1100 - 2900, 2900], cv.record.map(([year, comp, result, medal]) => [
        { runs: [run(year, { size: 19, color: MUTED })] },
        { runs: [run(comp, { font: SERIF, size: 21 })] },
        { runs: [run(result, medal ? { size: 19, color: GOLD, bold: true } : { size: 19, color: MUTED })], right: true },
    ])));

    body.push(sectionHeading('Honours & scholarships'));
    body.push(grid([TEXT_W - 4200, 4200], cv.honours.map(([title, detail]) => [
        { runs: [run(title, { font: SERIF, size: 21 })] },
        { runs: [run(detail, { size: 19, color: MUTED })], right: true },
    ])));

    body.push(sectionHeading('Research'));
    cv.research.forEach(r => {
        body.push(new Paragraph({
            spacing: { before: 100, after: 20 },
            keepNext: true,
            children: [run(r.title, { font: SERIF, size: 21 })],
        }));
        body.push(new Paragraph({
            spacing: { after: 60 },
            children: [r.url ? link(r.venue, r.url, { size: 19, color: MUTED }) : run(r.venue, { size: 19, color: MUTED })],
        }));
    });

    body.push(sectionHeading('Skills & certifications'));
    body.push(grid([1900, TEXT_W - 1900], cv.skills.map(([label, items]) => [
        { runs: [run(label, { size: 19, color: MUTED })] },
        { runs: [run(items, { size: 20 })] },
    ]), { rule: false, padY: 50 }));

    const doc = new Document({
        creator: cv.name,
        title: `${cv.name} — CV`,
        styles: { default: { document: { run: { font: SANS, size: 20, color: INK } } } },
        numbering: {
            config: [{
                reference: 'dash',
                levels: [{
                    level: 0,
                    format: LevelFormat.BULLET,
                    text: '–',
                    alignment: AlignmentType.LEFT,
                    style: {
                        run: { color: GOLD },
                        paragraph: { indent: { left: 300, hanging: 220 } },
                    },
                }],
            }],
        },
        sections: [{
            properties: {
                page: {
                    size: { width: PAGE_W, height: 16838 },
                    margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
                },
            },
            children: body,
        }],
    });
    return Packer.toBuffer(doc);
}

// ---------- PDF (HTML typeset, printed by Chrome) ----------

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHtml() {
    const contact = cv.contact
        .map(c => (c.url ? `<a href="${c.url}">${esc(c.text)}</a>` : esc(c.text)))
        .join('<span class="dot">·</span>');
    const entries = list => list.map(e => `
        <div class="entry">
            <div class="entry-top"><h3>${esc(e.title)}</h3><span class="when">${esc(e.when)}</span></div>
            <p class="org">${esc(e.org)}</p>
            ${e.points.length ? `<ul>${e.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
        </div>`).join('');
    const record = cv.record.map(([y, c, r, m]) =>
        `<tr><td class="y">${esc(y)}</td><td class="c">${esc(c)}</td><td class="r${m ? ' medal' : ''}">${esc(r)}</td></tr>`).join('');
    const honours = cv.honours.map(([t, d]) => `<tr><td class="c">${esc(t)}</td><td class="r">${esc(d)}</td></tr>`).join('');
    const research = cv.research.map(r => `
        <div class="paper"><p class="t">${esc(r.title)}</p>
        <p class="v">${r.url ? `<a href="${r.url}">${esc(r.venue)}</a>` : esc(r.venue)}</p></div>`).join('');
    const skills = cv.skills.map(([l, i]) => `<div class="skill"><span>${esc(l)}</span><span>${esc(i)}</span></div>`).join('');

    return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(cv.name)} — CV</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 16mm 17mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font: 9.6pt/1.45 Inter, sans-serif; color: #16181d; -webkit-print-color-adjust: exact; }
  a { color: inherit; text-decoration: none; border-bottom: 0.6pt solid #c9a227; }
  .serif, h1, h3, .c, .t { font-family: Newsreader, Georgia, serif; }
  header { border-bottom: 1.2pt solid #c9a227; padding-bottom: 9pt; margin-bottom: 4pt; }
  h1 { font-weight: 400; font-size: 27pt; line-height: 1; color: #0e1a2b; letter-spacing: -0.01em; }
  .tagline { color: #5d6370; margin-top: 5pt; font-size: 10pt; }
  .contact { margin-top: 5pt; }
  .dot { color: #8a6a1e; margin: 0 7pt; }
  h2 { font: 600 7.3pt Inter, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: #8a6a1e;
       border-bottom: 0.6pt solid #0e1a2b; padding-bottom: 3pt; margin: 14pt 0 6pt; break-after: avoid; }
  .summary { font-size: 10pt; }
  .entry { margin: 6pt 0 8pt; break-inside: avoid; }
  .entry-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  h3 { font-weight: 400; font-size: 11.5pt; color: #0e1a2b; }
  .when { color: #5d6370; white-space: nowrap; font-size: 9pt; }
  .org { color: #5d6370; font-size: 9.2pt; }
  ul { list-style: none; margin-top: 3pt; }
  li { padding-left: 11pt; position: relative; }
  li::before { content: "–"; position: absolute; left: 0; color: #8a6a1e; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 3.6pt 0; border-bottom: 0.5pt solid #e2dacb; vertical-align: baseline; }
  td.y { width: 48pt; color: #5d6370; font-size: 9pt; font-variant-numeric: tabular-nums; }
  td.c { font-size: 10.6pt; color: #0e1a2b; }
  td.r { text-align: right; color: #5d6370; font-size: 9pt; white-space: nowrap; padding-left: 10pt; }
  td.r.medal { color: #8a6a1e; font-weight: 600; }
  .paper { margin: 5pt 0 7pt; break-inside: avoid; }
  .paper .t { font-size: 10.6pt; color: #0e1a2b; line-height: 1.35; }
  .paper .v { color: #5d6370; font-size: 9pt; margin-top: 1pt; }
  .skill { display: grid; grid-template-columns: 80pt 1fr; padding: 3pt 0; }
  .skill span:first-child { color: #5d6370; font-size: 9pt; }
  section { break-inside: auto; }
</style></head>
<body>
  <header>
    <h1>${esc(cv.name)}</h1>
    <p class="tagline">${esc(cv.tagline)}</p>
    <p class="contact">${contact}</p>
  </header>
  <section><h2>Profile</h2><p class="summary">${esc(cv.summary)}</p></section>
  <section><h2>Education</h2>${entries(cv.education)}</section>
  <section><h2>Experience</h2>${entries(cv.experience)}</section>
  <section><h2>Competition record</h2><table>${record}</table></section>
  <section><h2>Honours &amp; scholarships</h2><table>${honours}</table></section>
  <section><h2>Research</h2>${research}</section>
  <section><h2>Skills &amp; certifications</h2>${skills}</section>
</body></html>`;
}

function printPdf(htmlPath, pdfPath) {
    const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    execFileSync(chrome, [
        '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
        '--virtual-time-budget=8000', `--print-to-pdf=${pdfPath}`, `file://${htmlPath}`,
    ], { stdio: 'ignore' });
}

(async () => {
    const docxPath = path.join(ROOT, 'Noah Lim CV.docx');
    fs.writeFileSync(docxPath, await buildDocx());
    console.log('wrote', docxPath);

    const htmlPath = path.join(__dirname, 'cv.html');
    fs.writeFileSync(htmlPath, buildHtml());
    const pdfPath = path.join(ROOT, 'Noah-Lim-CV.pdf');
    printPdf(htmlPath, pdfPath);
    console.log('wrote', pdfPath);
})();
