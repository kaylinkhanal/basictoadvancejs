/*
1.  What is a string in JavaScript? Give an example.
    Ans:
  <p>What is a string?</p>
  <p>A string is a sequence of characters inside quotes.</p>;
*/
// Example
let firstName = "Sony";

console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);

// 2. How do you find the length of this string?
console.log(firstName.length);

// ------------------------------------

//3. Convert the string to uppercase.
console.log(firstName.toUpperCase());

// ------------------------------------

//4. Convert to lowercase
console.log(firstName.toLowerCase());

// ------------------------------------

//5. How do you access the first character of this string?
console.log(firstName[0]);

// ------------------------------------

//6. Join two strings together (concatenation):

let lastName = "Bajracharya";

console.log(firstName, lastName); //The , in console.log just prints multiple values separated by a space. It does not combine them into a single string.
console.log(firstName + " " + lastName); //creates a single string The + operator concatenates strings into one. " " adds a space between the two strings.

// ------------------------------------

// 7. Check if the string contains the word “cat”.
let fullSentence = "I am Dhalko, Kathmandu cat";

console.log(fullSentence.includes("cat"));

// ------------------------------------

// 8. Replace a part of string:
console.log(fullSentence.replace("cat", "dog"));

// ------------------------------------

// 9. Trim extra spaces from this string:
let spaces = "  sony   asdf  ";

console.log(spaces.trim());

// ------------------------------------

// 10. Convert number to string

let numberString = 10;

console.log(numberString.toString());
