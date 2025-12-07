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

// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)

// Q2. get the output of last element of array and check if it is divisible by 21
let lastElement = ramScore[ramScore.length -1];
console.log(lastElement);
console.log(lastElement % 21 ===0);


// Q3. check if ram percentage is greater than shyam percentage
let finalResult = (ramScore[0] + ramScore[1] + ramScore[2])/3 > (shyamScore[0] + shyamScore[1] + shyamScore[2])/3;
console.log(finalResult);

//Q4. Print the last element of shyamScore and check if it's divisible by 3

let lastElem=(shyamScore[shyamScore.length -1]);
console.log(lastElem);
console.log(lastElem % 3 ===0  );

//Q5. Print the first subject marks of Shyam
console.log(shyamScore[0]);

//Q4. Add both arrays' lengths and print the total
let totalLength = ramScore.length + shyamScore.length;
console.log(totalLength);

//Q6. Print Ram’s marks in reverse order using index (manually)
let reverse = ramScore.reverse();
console.log(reverse);

//Q7. Change Shyam’s first mark to 85 and print the updated array
let change = shyamScore[0] = 85;
console.log(shyamScore);



