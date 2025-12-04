// Q1. Check if x is not divisible by 3 and greater than 50.
let x = 57;
console.log(x % 3 !== 0 && x > 50);

// Q2. Check if a * 2 is between 100 and 200 (inclusive).
let a = 60;
console.log(a * 2 >= 100 && a * 2 <= 200);

//Q3. Check if num1 is greater than num2, or their difference is exactly 10.
let num1 = 45;
let num2 = 35;
console.log(num1 > num2 || num1 - num2 === 10);

// Q4. Check if age qualifies as a "teen" (between 13 and 19) and is odd.
let age = 17;
console.log(age >= 13 && age <= 19 && age % 2 === 1);

// Q5. Check if the sum of p, q, and r is even and divisible by 3.
let p = 10;
let q = 20;
let r = 5;

console.log((p + q + r) % 2 === 0 && (p + q + r) % 3 === 0);

// Q6. Check if value is a multiple of 4 AND 6 (i.e., 12)
let value = 48;
console.log(value % 4 === 0 && value % 6 === 0);

//Q7. Check if temp is outside normal range (<0 OR >40)
let temp = 42;
console.log(temp < 0 || temp > 40);

// Q9. Check if any one of these is true:
// xx is even
// y is greater than 100
// z is divisible by 5

let xx = 13;
let y = 99;
let z = 25;

console.log(xx % 2 === 0 || y > 100 || z % 5 === 0);
