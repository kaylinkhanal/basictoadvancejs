// Array
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87];
let shyamScore = [77, 99, 99];

// Q1. calcuate the length of array
console.log(ramScore.length);

// Q2. get the output of last element of array and check if it is divisible by 21

console.log(ramScore[ramScore.length - 1] % 21 === 0);

// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = (ramScore[0] + ramScore[1] + ramScore[2]) / 3;
let shyamPercentage = (shyamScore[0] + shyamScore[1] + shyamScore[2]) / 3;
console.log(ramPercentage > shyamPercentage);
