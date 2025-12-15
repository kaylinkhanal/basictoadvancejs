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



const sum = (inputA, inputB) =>{  
 return inputA + inputB
}
console.log(sum(1,4))


// Q2. write a function that generates a random  number between two input provided numbers

// const generateRandomNumber = (min, max)=> {

// }
// // Hint use Math.random()
// generateRandomNumber(1,20)

// Q2. write a function that generates a random  number from 0 input to provided max number

const generateRandomNumber = (max)=> {
return Math.ceil(Math.random()*max)
}
// Hint use Math.random()
console.log(generateRandomNumber(10))