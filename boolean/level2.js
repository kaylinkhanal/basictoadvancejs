let a = 10;
let b = 20;
let c = 5;

// Q1. Check if a is smaller than b AND b is greater than c.

let check = (a < b) && (b > c);
console.log(check);

// Q2. Check if a is equal to 10 OR c is equal to 10.

let check_Or = (a === 10) || (c === 10);
console.log(check_Or);

// Q3. Check if b is NOT equal to c * 4.

let check_NotEqual = b !== c * 4;
console.log(check_NotEqual);

// Q4. Check if the sum of a and b is greater than 25 AND divisible by 5.

let sum = a + b;        // 30
let check_Sum = (sum > 25) && (sum % 5 === 0);
console.log(check_Sum);