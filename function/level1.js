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
const sum = (a, b) => {
  const result = a + b;
  console.log(result);
  return result;
};
sum(1, 10);

// Q2. write a function that generates a random  number from 0 upto provided max number

const generateRandomNumber = (max) => {
  return Math.random() * max;
};
// Hint use Math.random()
console.log(generateRandomNumber(10));
