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

const add = (a,b)=> {
return a + b;
}
console.log(add(2, 3));


// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (max)=> {

    let num = Math.floor(Math.random() * max); 
    return num;
}
console.log(generateRandomNumber(20))
// Hint use Math.random()
