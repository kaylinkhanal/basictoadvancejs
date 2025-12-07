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

// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)

// Q2. get the output of last element of array and check if it is divisible by 21
let lastElement = (ramScore[ramScore.length -1] % 21 === 0);
console.log(lastElement);


// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = ( 95 + 92 + 87)/300 * 100;
let shyamPercentage = ( 77 + 92 +87)/300 * 100;
let result = ramPercentage > shyamPercentage;
console.log(result);


let name = ["ram" ,"shyam"]
let maxScore = 100 ;

//Get the second element from the names array. Check if this element is strictly equal (===) to the string "Ram".
let secondName = name[1] === "ram";
console.log(secondName);

//using the ramScore array, change the value of the first element (95) to 100. Then, check if the first element is 
// now strictly equal to maxScore.
ramScore[0] = 100 ;
let ramFirstelement = ramScore[0] === maxScore;
console.log(ramFirstelement);

//Check if Shyam's middle score (at index 1) is NOT divisible by 2 (i.e., it is odd).
//  Use the remainder operator (%) and the logical NOT operator (!).

let shyamMiddle = shyamScore.lastIndexOf(1) % 2 !== 0;
console.log(shyamMiddle);

//check if Ram's first score is greater than 90 AND if Shyam's last score is less than 100. 
// Use the logical AND operator (&&).
let checkRam = ramScore[0] > 90 ; 
let checkShyam = shyamScore[2] < 100 ;
let check = checkRam && checkShyam
console.log(check);

//Check if the length of the ramScore array is 4 OR if the length of the shyamScore array is 3. 
// Use the logical OR operator (||).
let ramLength = (ramScore.length === 4);
let shyamLength = (shyamScore.length === 3);
let checkLength = ramLength || shyamLength;
console.log(checkLength);




