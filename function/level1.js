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
function add(a, b){
    return a+b;
}
console.log("sum:",15+5);


// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (max)=> {
    return Math.floor(Math.random() * (max + 1));

}
// Hint use Math.random()
const randomNumber = generateRandomNumber(20);
console.log(randomNumber);