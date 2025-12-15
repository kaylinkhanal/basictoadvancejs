//Basic function
function greet() {
  console.log("Hello, Jagat!");
}

greet(); // calling the function

//function with parameter
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

//Anonymous Function
const hello = function () {
  console.log("Hello!");
};

hello();

//Arrow Function (ES6))
const multiply = (a, b) => a * b;

console.log(multiply(4, 3));

//Pure Function
function multiply1(x, y) {
  return x * y; // same input => same output
}
console.log(multiply1(4, 3));

// Impure Function
let count = 0;

function increment() {
  count++; // modifies external variable
}
increment();
console.log(count);
//function syntax

// function test(){
//     return 33
// }

//arrow function syntax
const test = () => 33; //single line
// const test = () => {
//     return 33
// } //multi line

// Q1. write a function that can take two numbers as input and return the sum while
// printing
<<<<<<< HEAD
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(2, 3));
// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (max) => {
  let random = Math.round(Math.random() * max);
  // let round = Math.round(random);
  //console.log(round);
  console.log(random);
};
generateRandomNumber(10);
// Hint use Math.random()
=======
const sum = (inputA, inputB) => {
    return inputA + inputB
} //multi line


console.log(sum(1,4))
// Q2. write a function that generates a random  number from 0 upto provided max number

const generateRandomNumber = (max)=> {
return Math.random() * max
}
// Hint use Math.random()
console.log(generateRandomNumber(10))
>>>>>>> 483349ea16a6b92670c6d5da0adbeaaf7b9361cd
