// Object Practice Questions (Level 8)
// Instructions:
// - Read each question carefully.
// - Write your solution below each question.
// - Do NOT use external libraries.

// --------------------------------------------------
// Q1. Object Creation & Access
// Create an object named `student` with the following properties:
// name (string), age (number), major (string).
// Then print the student's name and major to the console.

const student = {
    name: "Ashwin Baral",
    age: 23,
    major: "Geology",
}
console.log(student.name);//Ashwin Baral

console.log(student.major);//Geology
// --------------------------------------------------
// Q2. Add, Update, Delete Properties
// Given the object below:
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
};
// a) Add a property `year` with value 2018
// b) Update `pages` to 350
// c) Delete the `author` property

book.year = 2018;
book.pages = 350;
console.log(book)
// Output: {
//   title: 'Atomic Habits',
//   author: 'James Clear',
//   pages: 350,
//   year: 2018
// }

// --------------------------------------------------
// Q3. Object Methods
// Create an object `calculator` with two properties a and b.
// Add a method `sum()` that returns the sum of a and b.
// Call the method and print the result.

const calculator = {
    a: 2,
    b: 3,
}
calculator.sum = function(){return this.a + this.b}

console.log(calculator.sum());

// --------------------------------------------------
// Q4. Looping Through an Object
// Given the object below:
const scores = {
    math: 85,
    physics: 90,
    chemistry: 88
};
// Use a loop to print each subject and its score in the format:
// subject: score

Object.entries(scores).forEach(([key, value])=>
{console.log(`${key} and ${value}`)})
//math and 85
//physics and 90
//chemistry and 88

// --------------------------------------------------
// Q5. Object Reference vs Copy
// Given the object below:
const user = {
    username: "baral",
    role: "student"
};

// a) Assign `user` to another variable `user2`
// b) Change the role in `user2` to "admin"
// c) Print both objects
// Observe and explain what happens

const user2 = structuredClone(user)//deep copy
user2.role = "admin"
console.log(user2)//{ username: 'baral', role: 'admin' }
console.log(user)//{ username: 'baral', role: 'student' }
//we created a new deep copy of original object "user" to "user2"
 //after creating copy, we can make changes to user2 
 // without changing the contents of user