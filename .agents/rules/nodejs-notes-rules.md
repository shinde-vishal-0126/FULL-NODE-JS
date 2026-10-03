# Node.js Master Notes - Formatting & Maintenance Guidelines

This rule file dictates exactly how `FINAL NODE JS/nodejs-master.html` should be updated when the user asks to add new points, interview questions, or topics. **Always strictly follow these rules.**

## 1. File Structure & Indexing
- The master notes file is located at `FINAL NODE JS/nodejs-master.html`.
- If you add a new Chapter or Section, you **MUST** first add it to the `<table id="master-index">` at the top of the file so the TOC is always up-to-date.
- Insert new chapters right before the `<!-- NEXT-CHAPTER -->` placeholder at the bottom.

## 2. Mandatory CSS Classes & Formatting
Whenever adding theory or notes, use the predefined CSS boxes:
- **Definition:** `<div class="def-box"><b>Concept:</b> <ul class="pl"><li>...</li></ul></div>`
- **Bullet Points:** `<div class="notes-box"><ul class="pl"><li>...</li></ul></div>`
- **Interview Questions:** `<div class="q"><b>Q. Question?</b><br><ul class="pl"><li>Answer</li></ul></div>`
- **Marathi Summary:** `<div class="marathi-box"><b>मराठी सारांश:</b> <ul class="pl"><li>...</li></ul></div>` (Mandatory for every major concept).

## 3. Strict Bullet Point Rule (No Paragraphs)
- **NEVER** write long paragraphs of text. This applies to EVERYTHING including Definitions and Marathi summaries.
- If a sentence contains words like "However", "And", or "Note", it **MUST** be broken down into individual, concise bullet points using `<li>`.
- **Proper & Comprehensive Definitions:** Definitions must NOT be basic or one-liners. They must be detailed, professional, comprehensive, and standard. They must always use the point-wise format (`<ul><li>`) under the `<b>Concept:</b>` tag.
- Marathi explanations must be detailed, easy for quick revision, and ALWAYS in point-wise format (`<ul><li>`).
- Definitions must also be in point-wise format (`<ul><li>`).

## 4. Visuals, Diagrams, Syntax, and Code Examples
- **Syntax & Arguments Explanation:** Whenever you introduce or use a new built-in method, function, or command, you MUST include a dedicated point-wise detailed breakdown of its **Syntax** and explain every single **Argument/Parameter** it accepts.
- Do NOT use text-based ASCII diagrams inside `<pre>` tags.
- Wherever a workflow or architecture needs to be explained (e.g., Event Loop, DNS, MVC), you **MUST** create a proper, colorful `<svg>` diagram wrapped in a styled `<div>`. 
- **Code Examples:** NEVER use inline code tags (`<br><code>...</code>`) for examples. ALWAYS use a proper block formatted `<pre>` tag with a faint/light background for code snippets (e.g. `<pre style="padding: 10px; margin: 5px 0; background: #f4f4f4; color: #333; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;">`). 

## 5. Scope of Document (No Databases)
- This HTML file is strictly for **Core Node.js, Express, and Backend Architecture**.
- **DO NOT** add database topics (MongoDB, Mongoose, SQL, Sequelize) into this file. They belong in separate notes.

## 6. Logic Over Duplication (Strict Deduplication Check)
- **CRITICAL:** Before creating any new topic or chapter, you MUST check if it already exists in the document (e.g., check the TOC). 
- If the topic is already present, **do not create a duplicate**. Instead, combine them: add any missing/new content into the existing topic.
- If there are already double topics in the document, you must check their content, merge the unique points into one, and **completely remove/delete** the duplicate chapter (including from the TOC) so that no double topics are visible.
- If the user asks to add a new interview question, first check if the topic already exists. If it does, inject the question directly into that existing chapter's `<div class="q">` block instead of creating a new chapter.

**Agent Directive:** When the user says "add this point to my notes" or gives new instructions, you will implicitly read and follow all rules in this document to maintain the premium quality of the HTML file.
