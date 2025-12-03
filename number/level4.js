let a = 12.7;
let b = 7.3;
let c = 5.8;
let d = 3.2;
// Q1. Round all numbers up, then sum
let sumUp = Math.ceil(a) + Math.ceil(b) + Math.ceil(c) + Math.ceil(d);
console.log(" Sum after ceil:", sumUp);

// Q2. Round a down, b up, then calculate a^b + b^a
let powAB =
  Math.pow(Math.floor(a), Math.ceil(b)) + Math.pow(Math.ceil(b), Math.floor(a));
console.log("a^b + b^a:", powAB);

// Q3. Maximum number after rounding all to nearest integer
let maxRound = Math.max(
  Math.round(a),
  Math.round(b),
  Math.round(c),
  Math.round(d)
);
console.log("Max after round:", maxRound);

//Q4. Minimum number after absolute differences
let minAbs = Math.min(Math.abs(a - b), Math.abs(b - c), Math.abs(c - d));
console.log("Min of abs differences:", minAbs);

// Q5. Square root of sum, then round up
let sqrtSum = Math.ceil(Math.sqrt(a + b + c + d));
console.log("Sqrt sum ceil:", sqrtSum); //

// Q6. (a*b)/(c+d), round down
let divFloor = Math.floor((a * b) / (c + d));
console.log("Div floor:", divFloor);

// Q7. a^2 + b^3 - c^d, round nearest integer
let complexCalc = Math.round(Math.pow(a, 2) + Math.pow(b, 3) - Math.pow(c, d));
console.log("Rounded complex calc:", complexCalc);

// Q8. Random number between a and b
let randAB = Math.random() * (b - a) + a;
console.log("Random number between a and b:", randAB);

// Q9. Square of difference of max and min
let rangeSquared = Math.pow(Math.max(a, b, c, d) - Math.min(a, b, c, d), 2);
console.log("Range squared:", rangeSquared);
