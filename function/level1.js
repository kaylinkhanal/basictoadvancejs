//function syntax

function test() {
    return 33
}


//arrow function syntax
const test = () => 33 //single line
const test1 = () => {
    return 33
}
//multi line


// Q1. write a function that can take two numbers as input and return the sum while 
// printing
// const sum = (inputA, inputB) => {
//     return inputA + inputB
// }   multi line

<<<<<<< HEAD
const sumOf = (a, b) => {
    let sum = a + b
    return sum
=======

console.log(sum(1,4))
// Q2. write a function that generates a random  number from 0 upto provided max number

const generateRandomNumber = (max)=> {
return Math.ceil(Math.random() * max)
>>>>>>> 6fb8d3b74cfb6c2a2f5ef5591c0430efefb600d2
}
console.log(sumOf(2, 3))

// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (max) => (Math.round(Math.random() * max))
// Hint use Math.random()
console.log(generateRandomNumber(30))
