// Q1. Count how many times each item appears (frequency map)
const arr = ["apple", "banana", "apple", "mango", "banana", "apple"];
// expected:
// {
//   apple: 3,
//   banana: 2,
//   mango: 1
// }

// Q2. Convert array of objects into a SINGLE object using reduce
const users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Sita" },
  { id: 3, name: "Hari" },
];
// expected:
// {
//   1: "Ram",
//   2: "Sita",
//   3: "Hari"
// }

//Q3. Find the student with the highest total score
const students = [
  { name: "Ram", scores: [10, 20, 30] },
  { name: "Sita", scores: [50, 10, 5] },
  { name: "Hari", scores: [15, 25, 20] },
];
// expected: student object with highest SUM(score)
//Q4. Group users by their role
const users1 = [
  { name: "Ram", role: "admin" },
  { name: "Sita", role: "user" },
  { name: "Hari", role: "admin" },
  { name: "Gita", role: "user" },
];
// expected:
// {
//   admin: ["Ram", "Hari"],
//   user: ["Sita", "Gita"]
// }

//Q5. Flatten a nested array using reduce (without .flat())
const arr1 = [1, [2, 3], [4, [5, 6]]];
// expected: [1, 2, 3, 4, 5, 6]

// Q6. Calculate total price from cart
const cart = [
  { item: "pen", price: 20, qty: 2 },
  { item: "book", price: 100, qty: 1 },
  { item: "pencil", price: 10, qty: 5 },
];
// expected: 20*2 + 100*1 + 10*5

//Q7. Convert an array of arrays into a single big object
const data = [
  ["name", "Jagat"],
  ["age", 22],
  ["country", "Nepal"],
];
// expected:
// {
//   name: "Jagat",
//   age: 22,
//   country: "Nepal"
// }

// Q8. Remove duplicate values using reduce
const arr2 = [1, 2, 2, 3, 4, 4, 5];
// expected: [1, 2, 3, 4, 5]

// Q9. Convert sentences into a word count
const sentences = [
  "I love programming",
  "Programming is fun",
  "I love JavaScript",
];
// expected:
// {
//   I: 2,
//   love: 2,
//   programming: 1,
//   Programming: 1,
//   is: 1,
//   fun: 1,
//   JavaScript: 1
// }

// Q10. Find min & max in one reduce pass
const nums = [3, 15, -2, 99, 45, 1, 0];
// expected:
// { min: -2, max: 99 }

// Q11. Chain reduce: multiply all numbers, but add 5 if number is even
const arr3 = [2, 3, 4];
// logic:
// if even → multiply by number+5
// if odd → multiply by number
// expected: (2+5) * 3 * (4+5) = 7 * 3 * 9

//Q12. Convert array into nested object
const arr4 = ["a", "b", "c"];
// expected:
// { a: { b: { c: {} } } }
