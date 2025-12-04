// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
let length1 = ramScore.length;
let length2 = shyamScore.length;
console.log(length1);
console.log(length2);


// Q2. get the output of last element of array and check if it is divisible by 21
let lastElement = ramScore[ramScore.length -1];
console.log(lastElement);
console.log(lastElement % 21 ===0);


// Q3. check if ram percentage is greater than shyam percentage
let finalResult = (ramScore[0] + ramScore[1] + ramScore[2])/3 * 100 > (shyamScore[0] + shyamScore[1] + shyamScore[2])/3 * 100;
console.log(finalResult);



