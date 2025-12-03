// You are given two variables:
let a = 10;
let b = 20;

// Q1: Swap the values of a and b WITHOUT using a third variable.
// After swapping:
// a should be 20
// b should be 10
let total = a+b;
a = total - a;
b = total - b;
console.log(a);// Output: 20
console.log(b);// Output: 10
//--------------------------------------------------------------
// Q2: Create a variable 'isDivisible' that becomes true if:
// - a is divisible by b  OR
// - b is divisible by a
// Store the result in 'isDivisible'.
let isDivisible;
if (a%b===0 || b%a===0){
    console.log(true);
}else{
    console.log(false);
}// Output: true
//--------------------------------------------------------------
// Q3: Generate a random INTEGER between a and b (including both).
// Store it in a variable called 'random'.
let random =Math.floor(Math.random()*(b-a+1)+a) 
console.log(random);
//Math.random() will give numbers from 0 to 1.
//(b-a+1) will set the no. of Integers to 11(from 10 to 20)
//when they are multiplied with Math.random it gives numbers from 0 to 10
//add "a"(the initial value given) at last to push the range into chaiya area
//adding Math.floor() to get integer values only
//--------------------------------------------------------------