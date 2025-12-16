// Level 1 String Practice Questions 

// Q1: Get the length of the string
let str1 = "Hello World";
console.log(str1.length); //11

// Q2: Access first and last characters
let str2 = "JavaScript";
console.log(str2[0]); //first character
console.log(str2[str2.length - 1]); //last character

// Q3: Convert case
let str3 = "Programming";
const upperCase = str3.toUpperCase();
const lowerCase = str3.toLowerCase();
console.log(upperCase);
console.log(lowerCase);
// Q4: Check if a substring exists
let str4 = "I love coding";

let str4SubString = "coding";
let substringExist = str4.includes(str4SubString);
console.log(substringExist);
//true

// Q5: Extract part of a string
let str5 = "Hello JavaScript";
let stringExtract = str5.substring(0, 5);
console.log(stringExtract); //hello
