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
const sum =(a,b)=>{
    return a+b
}
console.log(sum(5,10))



console.log(sum(1,4))
// Q2. write a function that generates a random  number from 0 upto provided max number

// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = ( max)=> {
return Math.floor (Math.random()*max)
}
// Hint use Math.random()
console.log(generateRandomNumber(10))