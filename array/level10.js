
/***************************
 * Classwork: Array Topic
 ***************************/

const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only
const arr3 = [...arr, ...arr2];
const studentName = arr3.filter(item => typeof item ==="string" );
console.log(studentName);//[ 'ram', 'shyam' ]

// Q2. calculate the total score of ram and shyam 

let totalScore = 0;
const total = arr3.forEach(item => typeof item === "number"? totalScore += item : null)
console.log(totalScore);
