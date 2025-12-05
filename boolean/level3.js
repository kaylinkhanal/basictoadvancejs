let p = 10;
let q =15;
let r = 20;

// Q1. Store the opposite of (p > q) using the NOT operator
let opposite = !(p > q);
console.log(opposite);

// Q2. Store true if p and r are different (use strict inequality)
let different = !(p === r);
console.log(different);

// Q3. Store the result of (p > r || q === 10) && r !== 20
let complex = (p > r || q === 10) && r !== 20;
console.log(complex);
