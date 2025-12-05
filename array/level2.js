const arr = [3, 4, 5, 6, 1];

const arr2 = [6, 2, 3, 1, 5];

//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
const result = arr.concat(arr2);
console.log(result);

//Q2. output shoulb be [5,1,3,2,6]
const reverseArr2 = arr2.reverse();
console.log(reverseArr2);

// hw: map vs foreach vs filter  in array

//For Each
//FOr each used to iterate through array and perform some operation--It doesn't create a new array--Returns: Nothing (undefined)

arr2.forEach((item) => {
  console.log(item * 2);
});
console.log(arr2);

//Map
//Creates a new array by applying a function to each element.---Returns: A new array
const doublenum = arr.map((num) => num * 2);
console.log(doublenum);
console.log(arr);

//filter
//Creates a new array with only the elements that pass a condition.-->Returns:A new array with selected elements
const even = arr2.filter((num) => num % 2 === 0);
console.log(even);

// Imagine you have a list of students:

let students = [
  { name: "Ram", score: 85 },
  { name: "Shyam", score: 45 },
  { name: "Sita", score: 92 },
];

//Just print
students.forEach((s) => console.log(s));

//Extract names
let name = students.map((s) => s.name);
console.log(name);

//Pass marks (>= 50)
let passStudent = students.filter((s) => s.score >= 50);
console.log(passStudent);
