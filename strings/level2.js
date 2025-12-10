// 1. Find the last character of a string
let lastName = "Bajracharya";
console.log(lastName[lastName.length - 1]);

// 2. Check if a string starts with a specific word
let sentence1 = "I love coding in JavaScript";
// Check if it starts with "I love"
console.log(sentence1.startsWith("I love"));

// 3. Check if a string ends with a specific word
let sentence2 = "I love coding in JavaScript";
// Check if it ends with "Script"
console.log(sentence2.endsWith("Script"));

// 4. Get a substring from a string
let str1 = "Hello World";
// Extract "World"

// 5. Split a string into an array of words
let text = "JavaScript is fun";

// 6. Repeat a string 3 times
let word = "Hi! ";

// 7. Count how many times a character appears in a string
let str2 = "banana";
// Count 'a'

// 8. Find the position of a word in a string
let str3 = "I love JavaScript";
// Find position of "JavaScript"

// 9. Remove the first 2 and last 2 characters from a string
let str4 = "abcdefgh";

// ------------------------------------

// 10. Convert a sentence to Title Case
let sentence3 = "i love javascript";
// Output: "I Love Javascript"
let titleCase = sentence3
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase);
