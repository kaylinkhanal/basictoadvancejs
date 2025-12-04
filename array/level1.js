// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
console.log(ramScore.length);
console.log(shyamScore.length);



// Q2. get the output of last element of array and check if it is divisible by 21
let lastram = ramScore[ramScore.length - 1];
let lastshyam = shyamScore[shyamScore.length - 1];
console.log(lastram,lastram % 21 === 0);
console.log(lastshyam,lastshyam % 21 ===0);



// Q3. check if ram percentage is greater than shyam percentage
let ramtotal= ramScore[0]+ramScore[1]+ramScore[2]
let shyamtotal= shyamScore[0]+shyamScore[1]+shyamScore[2]
let ramPercentage = ramtotal / ramScore.length;
let shyamPercentage = shyamtotal / shyamScore.length;
console.log(ramPercentage);
console.log(shyamPercentage);

//  Q4. update ram score of 2nd index to 100
ramScore[2] = 100;
console.log(ramScore);



