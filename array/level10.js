
/***************************
 * Classwork: Array Topic
 ***************************/

const arr = ['ram', 90, 70, 50]
const arr2 = ['shyam', 99, 88, 35]

// Q1. create an array which contains names of students only

const arr3 = [...arr, ...arr2]
const arr3Filter = arr3.filter(item => typeof item === "string");
console.log(arr3Filter);

// Q2. calculate the total score of ram and shyam 

let sum = 0
arr3.forEach(item =>
    typeof item === "number" ? sum += item : null);
console.log(sum);