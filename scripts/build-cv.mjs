// Builds both CV PDFs into public/ from src/data.js + src/cvTemplate.js
// using headless Chrome (or Edge). Run with: npm run cv
//   - Kamesh_Chaudhary_CV.pdf             Software Engineer | Data Management
//   - Kamesh_Chaudhary_IT_Support_CV.pdf  IT Support & Network Technician (src/cvItSupport.js)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// src/*.js are ES modules without a "type": "module" package flag, so load them as data URLs.
const loadModule = (rel) =>
  import('data:text/javascript;charset=utf-8,' + encodeURIComponent(fs.readFileSync(path.join(root, rel), 'utf8')));

const { DATA } = await loadModule('src/data.js');
const { renderCvDocument } = await loadModule('src/cvTemplate.js');
const { buildItSupportCv } = await loadModule('src/cvItSupport.js');

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => fs.existsSync(b));
if (!browser) throw new Error('Chrome or Edge not found. Set CHROME_PATH.');

for (const profile of [DATA, buildItSupportCv(DATA)]) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-'));
  const htmlPath = path.join(tmpDir, 'cv.html');
  fs.writeFileSync(htmlPath, renderCvDocument(profile));

  const outPath = path.join(root, 'public', profile.resumeFileName);
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    `--user-data-dir=${path.join(tmpDir, 'profile')}`,
    `--print-to-pdf=${outPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'inherit' });

  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log(`CV written to ${path.relative(root, outPath)}`);
}
