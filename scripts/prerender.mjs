// Build-time prerendering: renders <App /> to HTML in Node and writes it into
// dist/index.html, so the page content is in the HTML crawlers download.
// Run after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const indexPath = path.join(distDir, 'index.html');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(indexPath, 'utf8');
const rootTag = '<div id="root"></div>';

if (!template.includes(rootTag)) {
  throw new Error(`prerender: could not find ${rootTag} in dist/index.html`);
}

const appHtml = render();
await writeFile(indexPath, template.replace(rootTag, `<div id="root">${appHtml}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} KB of HTML into dist/index.html`);
