// Shared CV template. Rendered by the CV tab in the portfolio and by
// scripts/build-cv.mjs to produce the two-page public/Kamesh_Chaudhary_CV.pdf.
// Keep this file free of imports so the build script can load it directly.

const esc = (v) =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Lucide icon paths, inlined so the PDF has no external image requests
const ICONS = {
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
};
// Escapes a value for a CSS string (the @page footer is CSS, not HTML)
const cssStr = (v) => String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const icon = (name) =>
  `<svg class="cv-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

export const CV_FONT_URL =
  'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap';

export const CV_CSS = `
.cv-doc {
  --cv-ink: #1b2430;
  --cv-muted: #556070;
  --cv-accent: #0b3d6e;
  --cv-accent-2: #1f6fb2;
  --cv-soft: #eef3f9;
  --cv-rule: #d3dbe5;
  font-family: 'Source Sans 3', 'Segoe UI', Calibri, Arial, sans-serif;
  color: var(--cv-ink);
  background: #fff;
  font-size: 10pt;
  line-height: 1.4;
  text-align: left;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.cv-doc * { box-sizing: border-box; margin: 0; padding: 0; font-family: inherit; }
.cv-doc a { color: inherit; text-decoration: none; }

/* Header */
.cv-doc .cv-head { border-bottom: 3px solid var(--cv-accent); padding-bottom: 10px; }
.cv-doc h1 { font-size: 27pt; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cv-accent); line-height: 1.05; }
.cv-doc .cv-role { font-size: 13pt; font-weight: 600; color: var(--cv-accent-2); margin-top: 4px; letter-spacing: 0.01em; }
.cv-doc .cv-contact { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 5px 16px; margin-top: 11px; font-size: 9.4pt; color: var(--cv-ink); }
.cv-doc .cv-contact a, .cv-doc .cv-contact span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
.cv-doc .cv-link { color: var(--cv-accent-2) !important; font-weight: 600; text-decoration: underline !important; text-underline-offset: 2px; }
.cv-doc .cv-ico { width: 11px; height: 11px; flex-shrink: 0; color: var(--cv-accent-2); }

/* Sections */
.cv-doc section { margin-top: 13px; }
.cv-doc h2 { display: flex; align-items: center; gap: 9px; font-size: 11pt; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cv-accent); margin-bottom: 7px; break-after: avoid; page-break-after: avoid; }
.cv-doc h2::before { content: ''; width: 14px; height: 4px; background: var(--cv-accent-2); flex-shrink: 0; }
.cv-doc h2::after { content: ''; flex: 1; height: 1px; background: var(--cv-rule); }

.cv-doc .cv-comp { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px 10px; }
.cv-doc .cv-comp li { list-style: none; background: var(--cv-soft); border-left: 3px solid var(--cv-accent-2); padding: 3px 9px; font-weight: 600; font-size: 9.5pt; }

.cv-doc .cv-skills { display: grid; grid-template-columns: 130px 1fr; border-top: 1px solid var(--cv-rule); }
.cv-doc .cv-skills dt, .cv-doc .cv-skills dd { padding: 3px 0; border-bottom: 1px solid var(--cv-rule); }
.cv-doc .cv-skills dt { font-weight: 700; color: var(--cv-accent); }

/* Entries */
.cv-doc .cv-item { break-inside: avoid; page-break-inside: avoid; }
.cv-doc .cv-item + .cv-item { margin-top: 9px; }
.cv-doc .cv-row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; }
.cv-doc .cv-item-title { font-weight: 700; font-size: 11pt; }
.cv-doc .cv-item-org { font-weight: 600; color: var(--cv-accent-2); }
.cv-doc .cv-item-sub { color: var(--cv-muted); }
.cv-doc .cv-date { flex-shrink: 0; font-size: 9.2pt; font-weight: 600; color: var(--cv-accent); background: var(--cv-soft); padding: 1px 8px; border-radius: 3px; white-space: nowrap; }
.cv-doc .cv-stack { font-style: italic; color: var(--cv-muted); font-size: 9.4pt; margin-top: 1px; }
.cv-doc ul.cv-bullets { margin-top: 4px; padding-left: 15px; }
.cv-doc ul.cv-bullets li { margin-top: 2px; padding-left: 3px; }
.cv-doc ul.cv-bullets li::marker { color: var(--cv-accent-2); }

.cv-doc .cv-certs { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 14px; }
.cv-doc .cv-cert { border: 1px solid var(--cv-rule); border-top: 3px solid var(--cv-accent-2); padding: 7px 10px; break-inside: avoid; page-break-inside: avoid; }
.cv-doc .cv-cert-title { font-weight: 700; }
.cv-doc .cv-cert-meta { font-size: 9.2pt; color: var(--cv-accent-2); font-weight: 600; }
.cv-doc .cv-cert-skills { font-size: 9.2pt; color: var(--cv-muted); margin-top: 2px; }

.cv-doc .cv-split { display: grid; grid-template-columns: 1.7fr 1fr; gap: 0 26px; break-inside: avoid; page-break-inside: avoid; }
.cv-doc .cv-langs { list-style: none; }
.cv-doc .cv-langs li { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--cv-rule); padding: 3px 0; }
.cv-doc .cv-langs li span { color: var(--cv-muted); }

.cv-doc .cv-strengths { columns: 2; column-gap: 26px; }
.cv-doc .cv-strengths li { break-inside: avoid; }

@media (max-width: 640px) {
  .cv-doc h1 { font-size: 22pt; }
  .cv-doc .cv-contact { justify-content: flex-start; }
  .cv-doc .cv-comp { grid-template-columns: 1fr 1fr; }
  .cv-doc .cv-skills { grid-template-columns: 1fr; }
  .cv-doc .cv-skills dt { border-bottom: 0; padding-bottom: 0; }
  .cv-doc .cv-row { flex-direction: column; gap: 2px; }
  .cv-doc .cv-certs, .cv-doc .cv-split { grid-template-columns: 1fr; }
  .cv-doc .cv-split section + section { margin-top: 13px; }
  .cv-doc .cv-strengths { columns: 1; }
}
`;

const bullets = (list) =>
  `<ul class="cv-bullets">${list.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;

export function renderCvHtml(DATA) {
  const contact = [
    `<span>${icon('pin')}${esc(DATA.locationShort)}</span>`,
    `<a href="tel:${esc(DATA.phone.replace(/\s/g, ''))}">${icon('phone')}${esc(DATA.phone)}</a>`,
    `<a href="mailto:${esc(DATA.email)}">${icon('mail')}${esc(DATA.email)}</a>`,
    `<a class="cv-link" href="${esc(DATA.linkedin)}">${icon('linkedin')}LinkedIn</a>`,
    `<a class="cv-link" href="${esc(DATA.github)}">${icon('github')}GitHub</a>`,
    `<a class="cv-link" href="${esc(DATA.portfolio)}">${icon('globe')}Portfolio</a>`,
  ];

  const experience = DATA.experience
    .map(
      (e) => `
      <div class="cv-item">
        <div class="cv-row">
          <span class="cv-item-title">${esc(e.role)}</span>
          <span class="cv-date">${esc(e.period)}</span>
        </div>
        <div><span class="cv-item-org">${esc(e.company)}</span> <span class="cv-item-sub">· ${esc(e.workplaceType)} · ${esc(e.type)}</span></div>
        ${bullets(e.bullets)}
      </div>`
    )
    .join('');

  const projects = DATA.projects
    .filter((p) => p.cvBullets)
    .map(
      (p) => `
      <div class="cv-item">
        <div class="cv-row">
          <span class="cv-item-title">${esc(p.name)}</span>
          <span class="cv-item-sub">${esc(p.tag)}</span>
        </div>
        <div class="cv-stack">${esc(p.stack.join(' · '))}</div>
        ${bullets(p.cvBullets)}
      </div>`
    )
    .join('');

  const skills = Object.entries(DATA.skills)
    .filter(([cat]) => !(DATA.cvExcludeSkills || []).includes(cat))
    .map(([cat, list]) => `<dt>${esc(cat)}</dt><dd>${esc(list.join(', '))}</dd>`)
    .join('');

  const certs = DATA.certifications
    .filter((c) => !c.cvExclude)
    .map(
      (c) => `
      <div class="cv-cert">
        <div class="cv-cert-title">${esc(c.title.replace('AWS Academy Graduate - ', ''))}</div>
        <div class="cv-cert-meta">${esc(c.credential || `${c.issuer} Graduate`)} · ${esc(c.date)}</div>
        <div class="cv-cert-skills">${esc(c.skills.join(', '))}</div>
      </div>`
    )
    .join('');

  const edu = DATA.education;

  return `
    <header class="cv-head">
      <h1>${esc(DATA.name)}</h1>
      <p class="cv-role">${esc(DATA.title)}</p>
      <div class="cv-contact">${contact.join('')}</div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p>${esc(DATA.summary)}</p>
    </section>

    <section>
      <h2>Core Competencies</h2>
      <ul class="cv-comp">${DATA.competencies.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    </section>

    <section>
      <h2>Technical Skills</h2>
      <dl class="cv-skills">${skills}</dl>
    </section>

    <section>
      <h2>Professional Experience</h2>
      ${experience}
    </section>

    <section>
      <h2>Key Projects</h2>
      ${projects}
    </section>

    <section>
      <h2>Certifications</h2>
      <div class="cv-certs">${certs}</div>
    </section>

    <div class="cv-split">
      <section>
        <h2>Education</h2>
        <div class="cv-item">
          <div class="cv-row">
            <span class="cv-item-title">${esc(edu.degree)}</span>
            <span class="cv-date">Graduated ${esc(edu.year)}</span>
          </div>
          <div class="cv-item-org">${esc(edu.school)}</div>
          <p class="cv-stack">Modules: ${esc(edu.modules.join(', '))}</p>
        </div>
      </section>
      <section>
        <h2>Languages</h2>
        <ul class="cv-langs">${DATA.languages.map((l) => `<li><strong>${esc(l.name)}</strong><span>${esc(l.level)}</span></li>`).join('')}</ul>
      </section>
    </div>

    <section>
      <h2>Key Strengths</h2>
      <ul class="cv-bullets cv-strengths">${DATA.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    </section>
  `;
}

export function renderCvDocument(DATA) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(DATA.name)} - CV</title>
<link rel="stylesheet" href="${CV_FONT_URL}" />
<style>
  @page {
    size: A4;
    margin: 14mm 15mm 15mm;
    @bottom-left { content: "${cssStr(DATA.name)}  |  ${cssStr(DATA.title)}"; font: 8pt 'Source Sans 3', sans-serif; color: #8a94a3; }
    @bottom-right { content: "Page " counter(page) " of " counter(pages); font: 8pt 'Source Sans 3', sans-serif; color: #8a94a3; }
  }
  html, body { margin: 0; background: #fff; }
  /* Scale matches the approved two-page layout */
  body { zoom: 0.95; }
  ${CV_CSS}
</style>
</head>
<body><div class="cv-doc">${renderCvHtml(DATA)}</div></body>
</html>`;
}
