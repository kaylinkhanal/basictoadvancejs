<<<<<<< HEAD
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
=======
let a=10
let b=12




//Q1. Calculate the sum of a and b, then multiply it by 2 and store the result in a variable called doubleSum.
let doubleSum=(a+b)*2;
console.log(doubleSum)

//Q2. Calculate a raised to the power of 2, then add b to it, and store the result in a variable called powerPlusB.
let powerPlushB=(a**2)+b;
console.log(powerPlushB)


//Q3. Find the remainder when the sum of a and b is divided by 3, and store it in a variable called sumRemainder.
let sumReminder=(a+b)%3
console.log(sumReminder)

//Q4. Check if the sum of a and b is greater than 50. Store the boolean result in a variable called isSumLarge.
let isSumLarge=(a+b)>50;
console.log(isSumLarge)

//Q5. Calculate (b - a) squared and then find the remainder when divided by 5. Store it in a variable called diffSquaredRemainder.
let diffSquaredRemainder=((b-a)**2)%5;
console.log(diffSquaredRemainder)
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349
