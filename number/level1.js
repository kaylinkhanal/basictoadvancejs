let a = 10
let b = 20


//Q1. Calculate sum of a and b and store it in variable sum
<<<<<<< HEAD
let sum = a+b;
console.log(sum);

//Q2. caluclate the power of a to b and store it in variable power
let power =10**20;
console.log(power);

//Q3. Calculate the remainder when b is divided by a and store it in variable remainder
let remainder=b%a;
console.log(remainder);

// Q3. Round 5.6 to the nearest integer.
console.log(Math.round(5.6));    // 6

// Q4. Round 3.2 up to the nearest integer.
console.log(Math.ceil(3.2));     //4

// Q5. Round 7.9 down to the nearest integer.
console.log(Math.floor(7.9));      //7

// Convert the string "100" to a number.
let isNum=Number("100");
console.log(`${isNum} is a ${typeof(isNum)}`);  // 100 is a number

// Convert the number 50 to a string
let num=50;
let isStr=num.toString();
console.log(`${isStr} is a ${typeof(isStr)}`);   // 50 is a string

// Check if "abc" is Not a Number.
console.log(isNaN("abc"));    // true

// Find the largest number in the set: 4, 9, 1, 12.
console.log(Math.max(4,9,1,12));  // 12 

// Find the smallest number in the set: 8, -2, 10, 0.
console.log(Math.min(8,-2,10,0));   // -2

// Generate a random number between 0 and 1.
console.log(Math.random());  // 0.9091731195987129

// Format the number 12.3456 to 2 decimal places.
let num1= 12.3456;
console.log(num1.toFixed(2));    //12.35  Note : toFixed returns a string not a number
console.log(Number(num1.toFixed(2))); // 12.35 (number)
console.log(+num1.toFixed(2));  // 12.35 (number)
=======
let sum = a + b;
console.log(sum)

// Q2. Calculate the power of a to b and store it in variable power
let power = a ** b
console.log( power)

// Q3. Calculate the remainder when b is divided by a and store it in variable remainder
let remainder = b % a;
console.log( remainder)
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349
