//function syntax

// function test(){
//     return 33
// }


//arrow function syntax
//const test = () => 33 //single line
// const test = () => {
//     return 33
// } //multi line


// Q1. write a function that can take two numbers as input and return the sum while 
// printing
//const sum = (inputA, inputB) => {
   // return inputA + inputB
//} //multi line

const sum =((a, b) => a +b);

console.log(sum(5,6));


console.log(sum(1,4))
// Q2. write a function that generates a random  number from 0 upto provided max number

const generateRandomNumber = (max)=> {
let number = Math.floor(Math.random() * max);
return number;
}
// Hint use Math.random()
console.log(generateRandomNumber(10));
