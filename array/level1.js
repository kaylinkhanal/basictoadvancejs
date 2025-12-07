// Array
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87];
let shyamScore = [77, 99, 99];

// Q1. calcuate the length of array
console.log(ramScore.length);

let lastnumshyam = shyamScore[arraylength2 - 1];
let divisiable2 = lastnumshyam % 2 === 0;
console.log(divisiable2);

console.log(ramScore[ramScore.length - 1] % 21 === 0);

// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = (ramScore[0] + ramScore[1] + ramScore[2]) / 3;
let shyamPercentage = (shyamScore[0] + shyamScore[1] + shyamScore[2]) / 3;
console.log(ramPercentage > shyamPercentage);

// Q4. Compare first and last element
console.log(ramScore[0] === ramScore[ramScore.length - 1]);

// Q5. Check if array contains number 87
console.log(ramScore.includes(87));

// Q6. Check the sum of last two score of ram is greater than shyam's first score
console.log(
  ramScore[ramScore.length - 1] + ramScore[ramScore.length - 2] > shyamScore[0]
);
