
let a = 10;
let b = 20;
let c = 5;

// Q1. Check if a + b is greater than 25 AND c is less than 10
if (a + b > 25 && c < 10) {
    console.log("True");
} else {
    console.log("False");
} // Output: True ---> used AND operator
//-----------------------------------------------------------------
// Q2. Check if a is less than 15 OR b is greater than 25  
if (a < 15 || b > 25) {
    console.log("True");
} else {
    console.log("False");
} // Output: True  ---> used OR operator
//-----------------------------------------------------------------
// Q3. Check if NOT (b - c is equal to 15)
if (!(b - c === 15)) { 
    console.log("True");
} else {
    console.log("False");
} // Output: False ---> used NOT operator
//-----------------------------------------------------------------
// Q4. Check if a multiplied by 2 is greater than or equal to b
if (a * 2 >= b) {
    console.log("True");
} else {
    console.log("False");
} // Output: True
//-----------------------------------------------------------------
// Q5. Check if c divided by 5 is less than or equal to 2
if (c / 5 <= 2) {
    console.log("True");
} else {
    console.log("False");
} // Output: True
