// Q1.Check if a number n is a prime number using Boolean conditions only (no loops here, just logic with few divisors).
let n = 29;

let isPrime = n > 1 && n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0;
console.log(isPrime);

// Q2. Check if exactly one of the three numbers a, b, c is even.
// (Use Boolean logic to ensure only one is true.)

let a = 12;
let b = 7;
let c = 9;

let oneEven =
  (a % 2 === 0 && b % 2 !== 0 && c % 2 !== 0) ||
  (a % 2 !== 0 && b % 2 === 0 && c % 2 !== 0) ||
  (a % 2 !== 0 && b % 2 !== 0 && c % 2 === 0);

console.log(oneEven);

// Q3.Check if three sides x, y, z form a valid triangle.
// (A triangle is valid if: x + y > z AND x + z > y AND y + z > x)

let x = 10,
  y = 15,
  z = 20;

let isTriangle = x + y > z && x + z > y && y + z > x;

console.log(isTriangle);

// Q4.Check if a student passes only if:

// score ≥ 40

// attendance ≥ 75%

// OR the student has a medical leave (hasMedical === true)

let score = 35;
let attendance = 80;
let hasMedical = false;

let pass = (score >= 40 && attendance >= 75) || hasMedical;

console.log(pass);

// Q5.Check if a username is valid:

// length ≥ 5

// contains no spaces

// does NOT start with a number
// (Use Boolean chain)

let username = "dev007";

let validUsername =
  username.length >= 5 && !username.includes(" ") && isNaN(Number(username[0]));

console.log(validUsername);
// Q6.Check if a person is eligible for a job only if ALL are true:

// age between 21 and 35

// hasDegree === true

// experience ≥ 2 years

// NOT banned (banned === false)

let age = 24;
let hasDegree = true;
let experience = 1;
let banned = false;

let eligible =
  age >= 21 && age <= 35 && hasDegree && experience >= 2 && !banned;

console.log(eligible);
