//logical Questions

let a = 12;
let b = 7;
let c = 5;
let d = 3;

// Q1. Swap the values of two variables a and b  using a third variable.
let e = a;
a = b;
b = e;
console.log("After Swap a =", a, "b =", b);

// Q2. Swap the values of two variables a and b again without using a third variable.
a = a + b;
b = a - b;
a = a - b;
console.log("After Swap a =", a, "b =", b);

// Q3. Check which of the four numbers (a, b, c, d) is the largest.
let largest = a;
if (b > largest) largest = b;
if (c > largest) largest = c;
if (d > largest) largest = d;
console.log("Largest :", largest);

// Q5. Find the difference between the largest and smallest numbers among a, b, c, d.
let smallest = a;
if (b < smallest) smallest = b;
if (c < smallest) smallest = c;
if (d < smallest) smallest = d;
console.log("Smallest : ", smallest);

let diff = largest - smallest;
console.log("Difference betn Largest and Smallest :", diff);

// Q6. Check if a number n is divisible by at least two of a, b, c, d
let n = 24;
let count = 0;
if (n % a === 0) count++;
if (n % b === 0) count++;
if (n % c === 0) count++;
if (n % d === 0) count++;
console.log(count >= 2 ? "Yes Divisible " : "NOt Divisible");

// Q7. Calculate factorial of c
let factorial = 1;
for (let i = 1; i <= c; i++) {
  factorial = factorial * i;
}
console.log("Factorial :", factorial);

//Q8. Generate first c multiples of d
console.log("Multiples :");
for (let i = 1; i <= c; i++) {
  console.log(i * d);
}

// Q9. Check if a, b, c can form a Pythagorean triplet (i.e., x^2 + y^2 = z^2).

if (a ** 2 + b ** 2 === c ** 2) {
  console.log("Yes It formes a Pythagorean triplet");
} else {
  console.log("No It doesn't formes a Pythagorean triplet");
}
