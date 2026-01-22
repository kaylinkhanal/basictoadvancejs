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

//Write a function that takes two numbers and returns their sum.
const Add=(a,b)=>{
    return a+b
}
console.log(sum(30,40))

//Takes two numbers as input

//Returns an object with sum, difference, product, and quotient of the two numbers
let a=10
let b=30
const obj={
    sum:a+b,
    diff:a-b,
    product:a*b,
    quotient:a/b
    
}
console.log(obj)

//Write a function divide that takes two numbers and prints the quotient.
const div=(a,b)=> a/b
console.log(div(10,5))

//Write a function that takes an array of numbers and divides each number by 2, returning a new array.

const divideArrayByTwo = numbers => numbers.map(num => num / 2)
console.log(divideArrayByTwo([2,4,6,8]))

//Write a function divisionWithRemainder that takes two numbers and prints:
const divisionWithRemainder = (a, b) => {
  const quotient = Math.floor(a / b) 
  const remainder = a % b    
  console.log("quotient:", quotient)
  console.log("remainder:",remainder)
}
divisionWithRemainder(10,7)

//Write a function that takes three numbers, calculates the sum, and then divides by 3 to get the average

const numbers=(a,b,c)=>((a+b+c)/3)
console.log(numbers(10,6,8))

//Write a function that multiplies two numbers and returns the product.
const num=(a,b)=>(a*b)
console.log(num(2,9))

//Write a function that checks whether a number is even or odd.
const isEvenOdd=(num)=>(num%2===0? "even" : "odd")
console.log(isEvenOdd(20))
console.log(isEvenOdd(3))

//Write a function that takes two numbers and prints quotient & remainder.
const nums=(a,b)=>{
    const  quotient=Math.floor(a/b)
    const remainder=a%b
    console.log("quotient:", quotient)
    console.log("remainder:",remainder)
}
nums(55,23)

//Write a function that calculates the average of three numbers.
const avr=(a,b,c)=>((a+b+c)/3)
console.log(avr(2,3,4))