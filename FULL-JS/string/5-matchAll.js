/*
@ string.matchAll(RegExp);
    - string.matchAll(RegExp);

    1. used to find ALL matches of a regular expression in string.
        - matchAll() return all matches along with capturing group details.
    2. if no match is found it return as EMPTY iterator. (it does not return null)
    2. it return an iterator (RegExp string iterator) NOT an array.
    3. The return iterator can be used only once. after it is completely consumer it can not be reused.
    4. To convert the iterator into array used [...string.MatchAll('/pattern'/g)];
        - * also used Array.from(string.matchAll(/patten/g));
    5. matchAll() does not modify the original string
    6. matchAll() is especially usedful when you need All matches + capturing groups + index information

    3. Each item returned by the iterator is a match array containing
        match[0]  = complete match value
        match[1], match[2] = capturing group
        match.index = starting position of the match
        match.input = origional string
        match.group = named capturing group

    IMP
    4. The regular exprssion MUST have the g (global) falg otherwise matchAll() throw a TypeError
*/
let str = 'test test1 test3';
let res = str.matchAll(/w+/g);
console.log(res);
let res1 = str.matchAll(/test/g);
for (const match of res1) {
    console.log(match);
}

// * if you not give g (global) flag it throw TypeError
const r = 'abc';
let re1 = r.matchAll(/[a-z]/g);
for (let value of re1) {
    console.log(value);
}
console.log(re1);

let reg = /t(e)(st(\d?))/g;
for (const val of str.matchAll(reg)) {
    console.log(val);
}


// name Capture Groups
const str2 = "apple 123 banana 456 cherry 789";
const reg1 = /(?<word>\w+)\s(?<number>\d+)/g;
for (const match of str2.matchAll(reg1)) {
    console.log(match);
}

// only get the index
for (const { index } of str2.matchAll(reg1)) {
    console.log(index);
}

// in matchAll() meter return an iterator  with all mateches with containing all the group details, index
// if you want to convert into array
const result = [...str2.matchAll(reg1)];
console.log(result);
// also used
console.log(Array.from(str2.matchAll(reg1)));


// If you call matchAll() without any argument:
// It does not throw an error.
// JavaScript treats the missing argument as an empty regular expression pattern with the global flag conceptually.
// It finds empty-string matches at every position.
const str3 = "apple 123 banana 456";
const matches2 = str3.matchAll();
console.log(...matches2);


/*
 * match() vs matchAll()
    1. match()
        - match method used to return matching string pattern  in given string
        - without g flag
            - it return first match with details and capturing group

        - with g flag
            - it return all matching string only
            - does not provide capturing group details for eavery match
        - return
            - return array if matching string or reg Pattern found
            - if not found any matching string it return null
            - if match() method without any matching argument it return empty array [];

    2. matchAll() ;
        - Find all matches
        - return an iterator
        - Provide capturing group for every Match
        - require g flag (if not provide the g flag it return TypeError);
        -  if no match found it return  empty iterator.


# IMP
    match(/pattern/)
        - first match + capturing details
    match(/pattern/g)
        - all matched string (No capturing group details for each match)
    - use match() when you need a simple match result


    matchAll(/pattern/g) : matchAll() requires the g flag when a RegExp is passed.
        - all Matches
            - with contain capturing group, index, named groups.
            - used matchAll() when you need all matches with details information such as capturing group and indexes.


*/
