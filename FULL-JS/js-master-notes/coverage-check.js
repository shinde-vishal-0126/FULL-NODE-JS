// Coverage check: is every meaningful line of each source file present (fuzzily) in its chapter of the master HTML?
const fs = require("fs");
const ROOT = "D:/IMP/FULL-JS/";
const html = fs.readFileSync(ROOT + "js-master-notes/javascript-master.html", "utf8");

const decode = s => s.replace(/<[^>]+>/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
function chapterText(n) {
  const start = html.indexOf(`<div class="chapter">Chapter ${n}:`);
  const end = html.indexOf(`END OF CHAPTER ${n} `);
  return decode(html.slice(start, end));
}
const words = s => new Set((s.toLowerCase().match(/[a-z0-9\u0900-\u097f]+/g) || []).filter(w => w.length > 2));

// common spelling fixes, so that corrected lines still match
const FIX = { defination: "definition", defincation: "definition", statment: "statement", statemetn: "statement", ingnore: "ignore",
  boundries: "boundaries", splill: "spill", pices: "piece", prograom: "program", manipulte: "manipulate", coplex: "complex",
  condtion: "condition", conditon: "condition", exeucte: "execute", becase: "because", insted: "instead", propery: "property",
  refrences: "references", refrence: "reference", comparision: "comparison", arithmatic: "arithmetic", funcation: "function",
  fucnation: "function", fufnction: "function", functon: "function", anonymoos: "anonymous", redability: "readability",
  exptected: "expected", invoded: "invoked", adventages: "advantages", disadventages: "disadvantages", initializtion: "initialization",
  conslusion: "conclusion", prespective: "perspective", tommarow: "tomorrow", raincoate: "raincoat", attendes: "attendance" };
const norm = s => s.replace(/[a-z]+/gi, w => FIX[w.toLowerCase()] || w);

function check(file, chapters) {
  const srcLines = fs.readFileSync(ROOT + file, "utf8").split(/\r?\n/);
  const text = chapters.map(chapterText).join("\n");
  const chunks = text.split(/\n|(?<=[.;:?!])\s+/).map(words).filter(w => w.size);
  const allWords = words(text);
  const missing = [];
  let checked = 0;
  srcLines.forEach((raw, i) => {
    const line = norm(raw.replace(/^[\s\/*#!?@\-|+]+/, "").trim());
    const w = words(line);
    if (w.size < 3) return;                         // skip braces, tiny lines, table borders
    checked++;
    // score 1: best overlap with any single HTML sentence/line
    let best = 0;
    for (const c of chunks) {
      let hit = 0; for (const x of w) if (c.has(x)) hit++;
      const score = hit / w.size; if (score > best) best = score; if (best === 1) break;
    }
    // score 2: fraction of the line's words that occur anywhere in the chapter
    let any = 0; for (const x of w) if (allWords.has(x)) any++;
    if (best < 0.6) missing.push({ ln: i + 1, best: best.toFixed(2), anywhere: (any / w.size).toFixed(2), raw: raw.trim().slice(0, 110) });
  });
  console.log(`\n### ${file} â†’ chapter ${chapters.join(",")} : checked ${checked} lines, ${missing.length} weak matches`);
  missing.forEach(m => console.log(`  L${m.ln} [line ${m.best} / words ${m.anywhere}] ${m.raw}`));
}

const MAP = [
  ["mock-interview/interview.js", [92, 93]],
  ["note/5_interview_prep_scopes.md", [11]], ["note/6_interview_prep_control_flow.md", [28]], ["note/array_traversal_and_iteration.md", [41]],
  ["string/string-basic.js", [4]], ["string/property-access.js", [4]], ["string/template-literals.js", [4]], ["string/31-raw.js", [4]], ["string/1-indexOf.js", [5]], ["string/2-lastindexOf.js", [5]], ["string/3-search.js", [5]], ["string/4-match.js", [5]], ["string/5-matchAll.js", [5]], ["string/6-includes.js", [5]], ["string/7-startWith.js", [5]], ["string/8-endWith.js", [5]], ["string/9-slice.js", [6]], ["string/10-substring.js", [6]], ["string/13-charAt.js", [6]], ["string/14-charAtCode.js", [6]], ["string/15-at.js", [6]], ["string/26-from-char-code.js", [6]], ["string/29-fromCodePoint.js", [6]], ["string/11-replace.js", [7]], ["string/12-replaceAll.js", [7]], ["string/16-toLowerCase.js", [7]], ["string/17-toUpperCase.js", [7]], ["string/18-trim.js", [7]], ["string/19-trimEnd.js", [7]], ["string/20-strimStart.js", [7]], ["string/21-padEnd.js", [7]], ["string/22-padStart.js", [7]], ["string/23-split.js", [7]], ["string/24-valueOf.js", [7]], ["string/25-concat.js", [7]], ["string/27-to-local-compare.js", [7]], ["string/28-repet.js", [7]], ["string/30-normalize.js", [7]], ["javascript_string_cheat_sheet.md", [8]],
  ["shallow-deep-copy/shallow-copy.js", [55]], ["shallow-deep-copy/deep-copy.js", [55]],
  ["42_localStroage/localstroage.js", [71]], ["42_localStroage/sessionStorage.js", [71]], ["42_localStroage/cookies.js", [71]], ["42_localStroage/index.html", [71]], ["43_cors/sameOriginPolicy&cors.js", [72]],
  ["41_eventLoop/eventLoop.js", [69]], ["41_eventLoop/macro&microTask.js", [69]],
  ["1-variable/variable.js", [1]], ["2-dataTypes/dataTypes.js", [2]], ["2-2-typeCoercion.js/typeCoercion.js", [3]],
  ["3_scope/scope.js", [10]], ["9_hoisting/variableHoisting.js", [12]], ["9_hoisting/functionHoisting.js", [12]], ["10_closure/closure.js", [13]], ["10_closure/ClosureScopeChain.js", [13]], ["10_closure/lexicalScope.js", [13]], ["32_jsvascript_execution/jsExectuiuon.js", [14]], ["4_operator/operatorAndExpressionBasic.js", [15]], ["4_operator/conditionalOperator.js", [16]],
  ["4_operator/nullishCoalescingOperator.js", [17]], ["4_operator/optionalChaining.js", [18]],
  ["5_controlFlowStatment/control_flow.js", [23]], ["5_controlFlowStatment/decision_making.js", [24]],
  ["5_controlFlowStatment/switch_statement.js", [25]], ["5_controlFlowStatment/loop_statement.js", [26]],
  ["5_controlFlowStatment/Jump_statement.js", [27]], ["6_function/function.js", [29]], ["6_function/anonumousFunction.js", [30]],
  ["6_function/arrowFunction.js", [31]], ["6_function/iime_ImmediateInvokeFunction.js", [32]],
  ["6_function/FirstClassFunction.js", [33]], ["6_function/PureImpureFunction.js", [34]], ["11_memiize/memoize.js", [35]], ["12_currying/currying.js", [36]], ["16_this/this.js", [37]],
  ["13_objects/objects.js", [50, 51]], ["13_objects/objectDestructring.js", [52]], ["13_objects/Json.js", [53]],
  ["13_objects/mapObject.js", [51, 54]], ["13_objects/setObject.js", [54]], ["14_spreadOperator.js/spread.js", [19]], ["21_restOperator/rest.js", [20]], ["34_computedPropery.js", [21]], ["36_instancesOfOperator.js", [22]], ["37_returnMultiPleValue.js", [39]], ["38_singleToneClass.js", [59]], ["35_Es6Featues.js", [84]], ["22_prototype/index.js", [56]], ["31_class/class.js", [58]], ["23_callback/callback.js", [38]], ["23_callback/higherOrder.js", [38]], ["23_callback/callBackHell.js", [63]], ["24_mathObject/math.js", [82]], ["40_Date/date.js", [83]],
  ["29_bomObject/windowObject.js", [70]], ["29_bomObject/index.html", [70]], ["30_domObject/document.js", [73, 74]],
  ["25_event/Event.js", [75]], ["25_event/index.html", [75]], ["25_event/MouseEvent.js", [76]], ["25_event/mouseEvent.html", [76]],
  ["25_event/KeybordEvent.js", [76]], ["25_event/keyEvent.html", [76]], ["25_event/InputEvent.js", [76]], ["25_event/inputEvent.html", [76]],
  ["25_event/onChnage.html", [76]], ["39_eventPraPogationAndDelegation/eventPropagation/eventPrapogation.js", [77]], ["39_eventPraPogationAndDelegation/eventPropagation/evnetPrapogationBubbling.html", [77]], ["39_eventPraPogationAndDelegation/eventDelegation/eventDelegation.js", [77]], ["39_eventPraPogationAndDelegation/eventDelegation/eventDelegaionExample.html", [77]], ["25_event/TimeBasedEvent.js", [78]], ["27_debouncing/debounCing.js", [79]], ["27_debouncing/index.html", [79]], ["27_debouncing/btttonClickDebouncing.html", [79]], ["27_debouncing/window_resize.html", [79]], ["28_throttling/throttling.js", [80]], ["28_throttling/index.html", [80]], ["33_polyfill/index.html", [86]], ["33_polyfill/mapPolyfill.js", [86]], ["33_polyfill/filterPolyfill.js", [86]], ["33_polyfill/forEachPolyfill.js", [86]], ["33_polyfill/reducePolyfill.js", [86]],
  ["33_polyfill/callPolyfill.js", [87]], ["33_polyfill/applyPolyfill.js", [87]], ["33_polyfill/bindPolyfill.js", [87]], ["33_polyfill/oncePolyfill.js", [87]],
  ["33_polyfill/promisePolyfill.js", [88]], ["33_polyfill/promiseAllPolyfill.js", [88]], ["33_polyfill/polyfillAllSettled.js", [88]], ["33_polyfill/promiseAnyPolyfill.js", [88]], ["33_polyfill/promiseRacePolyfill.js", [88]], ["33_polyfill/fullExampleOfPolyfill.js", [88]],
  ["26_Model(export And Import)/exportImport.js", [85]], ["26_Model(export And Import)/app.js", [85]],
  ["19_synchronousAsynchronous.js/sync_async.js", [62]], ["20_async_await/async_awati.js", [68]],
  ["18_promise/promise.js", [63, 64, 65]], ["18_promise/promiseChain.js", [65, 67]], ["18_promise/combinator.js", [66]],
  ["18_promise/promiseAll.js", [66]], ["18_promise/promiseAllSettled.js", [66]], ["18_promise/promiseAny.js", [66]],
  ["18_promise/promiseRace.js", [66]], ["18_promise/interviewquestion.js", [63, 67]],
  // PART 6 Â· Arrays (7_array)
  ["7_array/1_arrayBasic.js", [40]], ["7_array/2_iterationOfArray.js", [40]], ["7_array/25_lengthProperty.js", [40]],
  ["7_array/40_array.isArray.js", [40]], ["7_array/3_forEach.js", [42]], ["7_array/4_map.js", [42]],
  ["7_array/5_push.js", [43]], ["7_array/6_pop.js", [43]], ["7_array/7_unShift.js", [43]], ["7_array/8_shift.js", [43]],
  ["7_array/9_splice.js", [43]], ["7_array/10_indexOf.js", [44]], ["7_array/11_lastIndexOf.js", [44]],
  ["7_array/12_find.js", [44]], ["7_array/13_findIndex.js", [44]], ["7_array/14_findLastIndex.js", [44]],
  ["7_array/15_includes.js", [44]], ["7_array/17_findLast.js", [44]], ["7_array/22_some.js", [44]], ["7_array/31_every.js", [44]],
  ["7_array/16_filter.js", [45]], ["7_array/19_reduce.js", [45]], ["7_array/26_reduceRight.js", [45]],
  ["7_array/18_sort.js", [46]], ["7_array/24_reverse.js", [46]], ["7_array/23_slice.js", [46]], ["7_array/34_concat.js", [46]],
  ["7_array/27_join.js", [46]], ["7_array/20_toString.js", [46]], ["7_array/21_toLocalString.js", [46]],
  ["7_array/35_at.js", [46]], ["7_array/30_fill.js", [46]], ["7_array/33_copywithin.js", [46]],
  ["7_array/28_flatternArray.js", [47]], ["7_array/29_flat.js", [47]],
  ["7_array/36_array.from.js", [48]], ["7_array/37_array.of.js", [48]], ["7_array/32_array.entries.js", [48]],
  ["7_array/38_array.keys.js", [48]], ["7_array/39_array.values.js", [48]], ["7_array/41_array.group.js", [48]],
  ["7_array/arrayDestructuring.js", [49]], ["7_array/chainableMethod.js", [49]], ["7_array/arrayInterview.js", [49]],
];
// Usage: node coverage-check.js [filterSubstring]  â†’ e.g. "7_array" to check only that folder
const FILTER = process.argv[2] || "";
MAP.splice(0, MAP.length, ...MAP.filter(([f]) => f.includes(FILTER)));
for (const [f, ch] of MAP) { if (fs.existsSync(ROOT + f)) check(f, ch); else console.log("\n### (file not found) " + f); }

