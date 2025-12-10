const arr = ["ram", 90, 70, 50];
const arr2 = ["shyam", 99, 88, 35];

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {
  // yedi item to typeof 'string' ho vaney matra return garne
  if (typeof item === "string") {
    return item;
  }
});
console.log(names);

// Q2. calculate the total score of ram and shyam

let sum = 0;
// const marks = [...arr, ...arr2];
// marks.forEach((item) => {
[...arr, ...arr2].forEach((item) => {
  // yedi item typeof 'number' ho vaney sum ma add garne
  if (typeof item === "number") {
    sum = sum + item;
  }
});
console.log(sum);

//reduce
//-->reduces (combines) the whole array into one final value.

//syntax
/*array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
*/

// Sum of Array//--Expected Result 60
const arr4 = [10, 20, 30];
const total = arr4.reduce((acc, curr) => acc + curr, 0);
console.log(total);

//Multiply All Numbers--Expected Result 24
const arr5 = [2, 3, 4];
const product = arr5.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// Find Maximum Value
// Expected Result 90
const arr6 = [11, 25, 8, 90, 44];
const max = arr6.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 90

// Count How Many Students Passed
// Expected Result 2
const students = [
  { name: "Ram", marks: 85 },
  { name: "Shyam", marks: 45 },
  { name: "Sita", marks: 92 },
];

const passed = students.reduce((acc, s) => {
  if (s.marks >= 50) acc++;
  return acc;
}, 0);
console.log(passed);
