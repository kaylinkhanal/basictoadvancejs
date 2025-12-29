//function syntax

// function test(){
//     return 33
// }


//arrow function syntax
const test = () => 33 //single line
// const test = () => {
//     return 33
// } //multi line


// Q1. write a function that can take two numbers as input and return the sum while 
// printing
const sum = (inputA, inputB) => {
    return inputA + inputB
} //multi line

const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3));

console.log(sum(1, 4))
// Q2. write a function that generates a random  number from 0 upto provided max number

<<<<<<< HEAD
// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (max) => {

    let num = Math.floor(Math.random() * max);
    return num;
=======
const generateRandomNumber = (max)=> {
return Math.ceil(Math.random() * max)
>>>>>>> af07022f8511b8d58686e7de0631458e1848a332
}
console.log(generateRandomNumber(20))
// Hint use Math.random()
