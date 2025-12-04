// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
let length = ramScore.length;
let length2 = shyamScore.length;
console.log(length,length2);


// Q2. get the output of last element of array and check if it is divisible by 21
let lastElement = (ramScore[ramScore.length -1] % 21 === 0);
console.log(lastElement);


// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = ( 95 + 92 + 87)/300 * 100;
let shyamPercentage = ( 77 + 92 +87)/300 * 100;
let result = ramPercentage > shyamPercentage;
console.log(result);


