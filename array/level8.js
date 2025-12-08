// JavaScript Practice Questions (Level 1 → Level 5)
// Each level contains 5 questions
// Follow the structure shown in the example

/***************************
 * Part -I :
 ***************************/
// Q1. Given two arrays like before, extract only the names.
const arr1 = ["Krishna", 91, 85, 92];
const arr2 = ["Gopal", 86, 90, 92];
const arr = [...arr1, ...arr2];
const arrFilter = arr.filter(item => typeof item === "string" );
console.log(arrFilter);
// Output: [ 'Krishna', 'Gopal' ]

//---------------------------------------------------------------------------

// Q2. Find the total score of all numbers in the array.
let totalScore = 0;
const total = arr.forEach(item => typeof item === "number"? totalScore += item : null );
console.log(totalScore);
// Output: 446

//---------------------------------------------------------------------------

// Q3. From ['apple', 1, 'banana', 2], filter only the strings.
const mixedArr = ['apple', 1, 'banana', 2];
const mixedArrFilter = mixedArr.filter(item => typeof item === "string");
console.log(mixedArrFilter);//[ 'apple', 'banana' ]

//---------------------------------------------------------------------------

// Q4. Count how many numbers are in ['a', 10, 20, 'b', 30].
const mixedArr1 = ['a', 10, 20, 'b', 30];
const numOnly = mixedArr1.filter( item => typeof item ==="number");
console.log(numOnly.length);//3

//---------------------------------------------------------------------------

// Q5. Add all numbers inside [5, 'hi', 7, true, 9].
const data = [5, 'hi', 7, true, 9];
const numsOnly = data.filter(item => typeof item === "number");
let sum = 0;
const totalSum = numsOnly.forEach(item => sum += item);
console.log(sum);
// Output: 21

//---------------------------------------------------------------------------

/***************************
 * Part-II : 
 ***************************/
// Q1. Given const data = ['ram', 90, 'shyam', 80, 'hari', 70]
//     Make an array of objects like [{name: 'ram', score: 90}, ...]

const data1 = ['ram', 90, 'shyam', 80, 'hari', 70];

// Q2. From const arr = [10, 20, 30, 40], create a new array with every element doubled.

const num = [10, 20, 30, 40];
const numDoubled = num.map(item => item * 2)
console.log(numDoubled);

// Q3. Merge two arrays and remove any duplicate values.

const Arr1 = [ 1, 3 ,4, 6 ,9];
const Arr2 = [ 2, 3, 5, 7, 9];
const Arr = [...new Set(Arr1.concat(Arr2))];

console.log(Arr);

// Q4. Convert ['a','b','c'] into "a-b-c" using reduce.
const letters = ['a','b','c'];
const reduceLetters = letters.reduce(( a, b) => a + "-" + b );
console.log(reduceLetters);

// Q5. Get the highest number from [1, 99, 25, 88, 3] without using Math.max.
num1 = [1, 99, 25, 88, 3]
let max = num1[3];
const maxNum1 = num1.reduce((a,b) => {return((a>b)? a:b)})
console.log(`${maxNum1} is maximum number.`);



/***************************
 * LEVEL 3 (Intermediate)
 ***************************/
// Q1. Given const students = [{name:'ram',score:90},{name:'shyam',score:70}]
//     Return an array of names of students who scored more than 75.
// Q2. Write a function that returns the average of all numbers in an array.
// Q3. From ['ram',90,'shyam',80,'hari',70], group them into {ram:90, shyam:80, hari:70}.
// Q4. Given an array [1,2,3,4], return the running sum → [1,3,6,10].
// Q5. Given a sentence string, count how many words it contains.

/***************************
 * LEVEL 4 (Advanced)
 ***************************/
// Q1. Create a function that takes an array of students and returns the topper.
// Q2. Write a function that flattens a nested array without using flat().
// Q3. Convert [{name:'ram',score:90},{name:'shyam',score:80}] into two arrays → ['ram','shyam'] and [90,80].
// Q4. Implement a function that removes falsy values from an array.
// Q5. Given an array of transactions (positive = deposit, negative = withdraw), calculate final balance.

/***************************
 * LEVEL 5 (Pro-Level)
 ***************************/
// Q1. Build a mini result-analyzer: given [{name:'ram',m1:40,m2:45},{name:'shyam',m1:30,m2:20}]
//     return each student's total, average, and pass/fail.
// Q2. Write a custom map() function without using the built‑in map.
// Q3. Given an array of objects, sort them by score descending.
// Q4. Implement deep clone of an object without JSON methods.
// Q5. Simulate a small database using an array: add, remove, update, search student by name.
