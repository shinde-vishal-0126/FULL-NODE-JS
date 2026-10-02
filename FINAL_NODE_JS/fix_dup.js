const fs = require('fs');
const file = 'd:\\IMP\\FULL-NODE-JS\\FINAL_NODE_JS\\nodejs-master.html';
let lines = fs.readFileSync(file, 'utf8').split('\n');
// We know Chapter 15 is around line 6200 to 6312.
let startIdx = lines.findIndex(l => l.includes('<h2 id="chap-15">Chapter 15: Sending Emails with Nodemailer</h2>'));
if (startIdx !== -1) {
    let endIdx = startIdx;
    while(endIdx < lines.length && !lines[endIdx].includes('<div class="part" id="part-4">SECTION 4: EXPRESS.JS FRAMEWORK</div>')) {
        endIdx++;
    }
    if (endIdx < lines.length) {
        lines.splice(startIdx, endIdx - startIdx);
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log('Successfully deleted the duplicate Chapter 15 block!');
    }
}
