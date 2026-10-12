/*
# NORMALIZE()
Syntax:
    string.normalize()
    string.normalize(form)
# What is normalize()?
    - The normalize() method of a string returns a new string containing the Unicode normalization form of the original string.
    - Unicode allows some characters to be represented in multiple ways.
    - For example: é can be represented as:
        - A single character: "é" (code point: \u00E9)
        - Two Unicode characters: "e" + combining accent (code points: \u0065 \u0301)
    - Even though both look visually identical, JavaScript considers them different strings.
    - normalize() converts them into a standard Unicode form.

# Important Points
    - normalize() returns a Unicode normalized version of a string.
    - It returns a NEW string.
    - It does NOT modify the original string because strings are immutable.
    - Unicode characters can sometimes have multiple representations.
    - normalize() helps convert equivalent Unicode representations into a consistent format.
    - The default normalization form is NFC. normalize() supports four Unicode normalization forms:
        - NFC
        - NFD
        - NFKC
        - NFKD
    - If an invalid normalization form is provided, normalize() throws a RangeError.

# Example 1: Why normalize() is needed
*/
const str1 = 'e\u0301';
const str2 = 'é';
console.log(str1);
console.log(str2);

// They look the same visually. but return false Because internally they have different Unicode representations.
console.log(str1 === str2);
// After normalization, both strings have the same Unicode representation.
console.log(str1.normalize() === str2.normalize());

//  Example 2: Default normalize()
// The default normalization form is NFC.
const text = 'e\u0301';
console.log(text.normalize());
console.log(text.normalize() === text.normalize("NFC"));


// # 1. NFC : Normalization Form Canonical Composition
// NFC combines characters when possible.
const nfc = 'e\u0301';
console.log(nfc.normalize("NFC"));



// # 2. NFD: Normalization Form Canonical Decomposition
// NFD separates combined characters.
const nfd = 'é';
console.log(nfd.normalize("NFD"));
// Visually it looks similar,but internally it is decomposed.

// # NFC vs NFD
// NFC:Combine characters when possible.
// NFD:Separate combined characters.
const value = 'é';
console.log(value.normalize("NFC"));
console.log(value.normalize("NFD"));


// # 3. NFKC : Normalization Form Compatibility Composition
// NFKC performs compatibility normalization and composition.
// It converts compatibility characters into their standard equivalent.

// # 4. NFKD : Normalization Form Compatibility Decomposition
// NFKD performs compatibility normalization and decomposition.


// # Example: Comparing Unicode Strings
const name1 = "José";
const name2 = "Jose\u0301";
console.log(name1 === name2);
console.log(
    name1.normalize() === name2.normalize()
);


// # Original String Is Not Modified
const original = 'e\u0301'
const normalized = original.normalize();
console.log(original);
console.log(normalized);
// normalize() returns a new normalized string. The original string remains unchanged.
