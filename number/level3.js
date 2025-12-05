<<<<<<< HEAD
let a=6
let b=9



//Calculate the average of a and b, store it in avg, and check if the average is greater than 15.
let avg=(a+b)/2
let isGreater=avg>15;
console.log(avg,isGreater)

//Calculate (b - a) ** (a / 2) and store it in a variable complexPower.

let complexPower=(b - a) ** (a / 2);
console.log("complexPower:",complexPower)

//Calculate the remainder when (a * b + 50) is divided by (a + b) and store it in complexRemainder.
let complexRemainder=(a * b + 50) %(a + b);
console.log(complexRemainder)

//Check if (a + b + complexRemainder) is an even number.
console.log((a+b+complexRemainder)%2===0)


//Calculate the sum of the squares of a and b and store it in sumOfSquares.
let sumOfSquares=(a**2+b**2);
console.log("sumOfSquares:",sumOfSquares)
=======
let x =30;
let y = 15;


// Q1. Calculate the average of x and y and store it in variable average
let average = (x+y)/2;
console.log(average);

// Q2. Check if x is greater than y and store the boolean result in variable isGreater
let isGreater = x > y;
console.log(isGreater);

// Q3. Check if y is less than or equal to 5 and store the result in variable isSmall
let isSmall = y<= 5;
console.log(isSmall);

// Q4. Check if x and y are equal and store the result in variable areEqual
let areEqual = (x === y);
console.log(areEqual);

// Q5. Find the absolute value of (y - x) and store it in variable absoluteDiff
let absoluteDiff = Math.abs(y - x);
console.log(absoluteDiff);

// Q6. Round the result of num1 divided by num2 to the nearest integer and store in variable rounded
let num1 = 13;
let num2 = 2;
let rounded = Math.round(num1 / num2);
console.log(rounded);

// Q7. Find the maximum of x and y and store it in variable max
let max = Math.max(num1, num2);
console.log(max);
>>>>>>> 3758f6da6574ca402440f393fe6a73468f19b3a8
