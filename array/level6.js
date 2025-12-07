// Condition Exercises
// Solve using array.map() and conditional logic

// JavaScript Practice Questions: 


//--------------------------------------------------
//--------------------------------------------------
// Q1.
// Given: [5, 1, 4]
// If number is divisible by 2 → multiply by 3
// Else → multiply by 2
// Expected: [10, 2, 12]

const num1 = [5, 1, 4];
const num1Check = num1.map(item =>
    item % 2 === 0 ? item * 3 : item * 2);
console.log(num1Check);//[ 10, 2, 12 ]

//--------------------------------------------------
//--------------------------------------------------
// Q2.
// Given: [3, 8, 11, 20]
// If number is odd → add 5
// Else → subtract 2
// Expected: [8, 6, 16, 18]

const num2 = [3, 8, 11, 20];
const numOdd = num2.map(item => item % 2 === 0 ? item - 2 : item + 5)
console.log(numOdd);
//--------------------------------------------------
//--------------------------------------------------
// Q3.
// Given: [2, 6, 9, 15]
// If number > 5 → square it
// Else → multiply by 10
// Expected: [20, 36, 81, 225]

const num3 = [2, 6, 9, 15];
const num3Check = num3.map(item => item > 5 ? item ** 2 : item * 10)
console.log(num3Check);//[ 20, 36, 81, 225 ]

//--------------------------------------------------
//--------------------------------------------------
// Q4.
// Given: ["cat", "lion", "tiger"]
// If string length is even → uppercase
// Else → lowercase
// Expected: ["cat", "LION", "tiger"]
const animals = ["cat", "lion", "tiger"]
const stringOperation = animals.map(element =>
    element.length % 2 === 0 ? element.toUpperCase() : element.toLowerCase())
console.log(stringOperation);

//--------------------------------------------------
//--------------------------------------------------
// Q5.
// Given: ["apple", "bat", "mango", "kiwi"]
// If string includes the letter 'a' → reverse it
// Else → leave it unchanged
// Expected: ["elppa", "bat", "ognam", "kiwi"]
const strings = ["apple", "bat", "mango", "kiwi"]
const stringReversed = strings.map(item =>
    item.includes("a") ? item.split('').reverse().join('') : item)
console.log(stringReversed);

const stringInitialReversal = strings.map(item => item.startsWith('a') ? item.split('').reverse().join('') : item)
console.log(stringInitialReversal);

// End of file



