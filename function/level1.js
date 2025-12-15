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

const num = ((num1,num2) =>{
    return num1 +num2
});
console.log(num(4 ,5));


// Q2. write a function that generates a random  number form 0 upto provided max number

const generateRandomNumber = ( max)=> {
    return Math.floor(Math.random() *max)
}
// Hint use Math.random()
console.log(generateRandomNumber(34,35))