
// You are given three numbers:
let x = 12;
let y = 5;
let z = 19;

// Q1: Determine the MEDIAN (the number that lies in the middle)
// WITHOUT using the sort() method.

// Example: For x=12, y=5, z=19 the answer is 12.
let median;
if ((x > y && x < z) || (x < y && x > z)) {
    median = x;
} else if ((y > x && y < z) || (y < x && y > z)) {
    median = y;
} else {
    median = z;
}

// Q5.
// A perfect number is one where the sum of its proper divisors equals the number.
// Example: 6 → 1 + 2 + 3 = 6

let n = 28;

// Task: Determine if n is a perfect number.
// Store the result in a variable called isPerfect.



// Q6.
// You are given a floating number:
let f = 13.56789;

// Task: Round f to TWO decimal places without using .toFixed().
// Store the result in a variable called rounded.
