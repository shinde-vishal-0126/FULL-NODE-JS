const fs = require("fs");
const html = fs.readFileSync("D:/IMP/FULL-JS/js-master-notes/javascript-master.html", "utf8");
const last = Math.max(...[...html.matchAll(/<div class="chapter">Chapter (\d+):/g)].map(m => +m[1]));
for (let n = 1; n <= last; n++) {
  const s = html.indexOf(`<div class="chapter">Chapter ${n}:`);
  const e = html.indexOf(`END OF CHAPTER ${n} `);
  const ch = html.slice(s, e);
  const title = (ch.match(/Chapter \d+: ([^<]+)/) || [])[1];
  const heading = /<h2[^>]*>[^<]*Interview/i.test(ch);
  const qCount = (ch.match(/class="q"/g) || []).length;
  const outputQs = (ch.match(/â†’/g) || []).length;
  const hasOutputBlock = /Output-based|Interview Questions &amp; Revision|Interview Questions \(Detailed\)/i.test(ch);
  console.log(`${String(n).padStart(2)} | ${(title || "").slice(0, 38).padEnd(38)} | interview heading: ${heading ? "YES" : "no "} | Q-boxes: ${String(qCount).padStart(2)} | output-section: ${hasOutputBlock ? "YES" : "no"}`);
}

