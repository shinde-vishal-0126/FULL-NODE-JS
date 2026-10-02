# Node.js PDF Generation Rules

When the user asks to process a file or add notes to the Node.js Master PDF, ALWAYS follow these strict rules:

1. **NO DATA LOSS**: Keep EVERY single point from the original notes. Do not skip, merge away, or summarize any definition, point, or code example.
2. **AVOID DUPLICATE TOPICS**: If the user's notes repeat the exact same concept multiple times across different headings, merge them elegantly so the final PDF doesn't have duplicate or repetitive topics.
3. **IN-PLACE CORRECTIONS**: If the user's notes or code contain errors (e.g. `process.pwd` instead of `process.cwd()`), DO NOT create a separate correction box. Fix it directly in the code or text. Immediately below it, add a green italic note `✔ <what was wrong and the right version>` and a Marathi translation `✔ मराठी: <काय चूक होती आणि बरोबर काय आहे>`.
4. **POINT-WISE FORMATTING**: All notes, answers, and "Interview Questions (Detailed)" sections MUST be formatted as bullet points (`<ul class="pl">` and `<li>`) instead of long paragraphs. Never use paragraphs for lists.
5. **CUSTOM SVG DIAGRAMS**: Do NOT use ASCII diagrams. Always convert flowcharts, memory boxes, and architectures into beautiful inline SVG images.
   - Use colors: blue (normal/definition), green (correct/allowed), red (error/not allowed), orange (memory/value/flow).
   - Add a caption below the SVG: `Figure N: <Name of diagram>`.
6. **STRUCTURE**:
   - `<h3>` for "Q." questions.
   - `<div class="notes-box">` for general points.
   - `<div class="def-box">` for definitions.
   - `<div class="marathi-box">` for Marathi summaries.
   - `<div class="code-title">` followed by `<pre>` for code examples.
   - `<div class="ex">` for code explanations (What happens, Output, ✅ Advantage, ⚠ Disadvantage).
   - `<div class="q">` for Interview Questions.
7. **INTERVIEW QUESTIONS & SUMMARY**: End every chapter with at least 4-5 detailed interview questions and a "Quick Revision Summary" table.
8. **MANDATORY MARATHI SUMMARY FOR EVERY TOPIC**: For EVERY single topic (e.g., every `<h3>Q...</h3>`), you MUST add a `<div class="marathi-box">` at the end of that topic's explanation. This box must contain a brief and easy-to-understand summary of that specific topic in Marathi (e.g. `<b>मराठी सारांश:</b> ...`). Do not skip this for any topic.
9. **MANDATORY CODE EXAMPLES**: Make sure EVERY topic or concept has a practical code example. Add a `<div class="code-title">` and `<pre>` block so the user doesn't have to ask for examples repeatedly.
10. **GROUP RELATED TOPICS**: Do not create separate, new chapters for every small topic. If a topic is logically related to an existing chapter, add it as a sub-topic (using `<h3>` or `<h4>`) inside that relevant chapter instead of making a completely new one.
