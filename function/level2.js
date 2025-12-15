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
console.log(sum(2,4));


// Q2. write a function that generates a random  number between two input provided numbers

const generateRandomNumber = (min, max)=> {
    let output= Math.round(Math.random()*(max-min)+min);   // (0,1)  (20-1)=19+1 =20
    console.log(output);

}
// Hint use Math.random()
generateRandomNumber(1,20);