let p = 10;
let q =15;
let r = 20;


// Q1. Store true only if both p > 20 and r > 10 otherwise false
let result = (p > 20 && r >10);
console.log(result);

// Q2. Store true if at least one of these is true: p > 30 OR q > 5
let isTrue = (p > 30 || q > 5);
console.log(isTrue);

// Q3. Store true if q is strictly equal to 10
let isStrictlyEqual = q ===10;
console.log(isStrictlyEqual);

// Q4. Store true if both p and q are positive numbers
let positive = p > 0 && q > 0;
console.log(positive);

// Q5. Store true if r is greater than 10 AND less than 20
let between = r > 10 && r < 20;
console.log(between);