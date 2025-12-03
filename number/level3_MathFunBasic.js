//Math function Questions

let a = 12.7;
let b = 7.3;
let c = 5.8;
let d = 3.2;

//Q1. Round a using Math.round()
let roundA = Math.round(a);
console.log("Rounded a:", roundA);

// Q2. Round b down - Math.floor()
let floorB = Math.floor(b);
console.log("Floor of b:", floorB);

// Q3. Round c up - Math.ceil()
let ceilC = Math.ceil(c);
console.log("Ceil of c:", ceilC);

//Q4. Find the maximum number using Math.max()
let maxNum = Math.max(a, b, c, d);
console.log("Maximum:", maxNum);

//Q5. Find the minimum number using Math.min()
let minNum = Math.min(a, b, c, d);
console.log("Minimum:", minNum);

// Q6. Absolute value of (a - b)
let absDiff = Math.abs(a - b);
console.log("Absolute difference (a - b):", absDiff);

// Q7. Power: c ^ d
let powerCD = Math.pow(c, d);
console.log("c ^ d:", powerCD);

// Q8. Random number between 0 and 1
let randNum = Math.random();
console.log("Random number (0-1):", randNum);

// Q9. Random integer between 1 and 100
let randInt = Math.floor(Math.random() * 100);
console.log("Random integer (1-100):", randInt);

// Q10. Square root of (a + b + c + d)
let sumSqrt = Math.sqrt(a + b + c + d);
console.log("Square root of sum:", sumSqrt);
