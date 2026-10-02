const fs = require('fs');
const file = 'd:/IMP/FULL-NODE-JS/FINAL_NODE_JS/nodejs-master.html';
let content = fs.readFileSync(file, 'utf8');

// Only replace from the body part where chapters actually appear as headers
// We split the content at the end of the Master Index to avoid re-replacing the index we already fixed.
const parts = content.split('<!-- PART-END 1: Fundamentals -->');
if (parts.length > 1) {
    let bodyPart = parts[1];
    
    // Decrement <h2 id="chap-XX">Chapter XX: ...</h2>
    bodyPart = bodyPart.replace(/chap-(\d+)/g, (match, p1) => {
        let num = parseInt(p1);
        return (num >= 16 && num <= 31) ? 'chap-' + (num - 1) : match;
    });
    
    bodyPart = bodyPart.replace(/Chapter (\d+):/g, (match, p1) => {
        let num = parseInt(p1);
        return (num >= 16 && num <= 31) ? 'Chapter ' + (num - 1) + ':' : match;
    });

    content = parts[0] + '<!-- PART-END 1: Fundamentals -->' + bodyPart;
    fs.writeFileSync(file, content);
    console.log("Successfully renumbered chapters in the body.");
} else {
    console.log("Could not find PART-END marker.");
}
