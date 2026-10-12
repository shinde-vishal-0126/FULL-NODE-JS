// Renumbers chapters, figures, cross-references and the master index in DOCUMENT ORDER.
// Use after inserting a chapter (give it a temporary number like 99 and figures 901, 902…).
// Run: node js-master-notes/renumber.js
const fs = require("fs");
const path = require("path");
const FILE = path.join(__dirname, "javascript-master.html");
let html = fs.readFileSync(FILE, "utf8");

// 1. chapter map: old number → new number (by order of <div class="chapter"> in the document)
const chapMap = {};
let n = 0;
for (const m of html.matchAll(/<div class="chapter">Chapter (\d+):/g)) chapMap[m[1]] = String(++n);

// 2. figure map: by order of captions
const figMap = {};
let f = 0;
for (const m of html.matchAll(/<div class="cap">Figure (\d+):/g)) if (!figMap[m[1]]) figMap[m[1]] = String(++f);

// 3. master index rows <tr><td>N</td> (only inside the master-toc table)
html = html.replace(/(<table class="master-toc">)([\s\S]*?)(<\/table>)/, (all, a, rows, c) =>
  a + rows.replace(/<tr><td>(\d+)<\/td>/g, (m, d) => `<tr><td>${chapMap[d] || d}</td>`) + c);

// 4. every "Chapter N" / "CHAPTER N" and "Figure N" (single pass, so numbers are never double-shifted)
html = html.replace(/\b(Chapter|CHAPTER) (\d+)\b/g, (m, w, d) => (chapMap[d] ? `${w} ${chapMap[d]}` : m));
html = html.replace(/\bFigure (\d+)\b/g, (m, d) => (figMap[d] ? `Figure ${figMap[d]}` : m));

fs.writeFileSync(FILE, html, "utf8");
const changed = Object.entries(chapMap).filter(([o, nn]) => o !== nn).map(([o, nn]) => `${o}→${nn}`);
console.log("chapters:", n, "| changed:", changed.join(" "));
console.log("figures :", f, "| changed:", Object.entries(figMap).filter(([o, nn]) => o !== nn).length);
