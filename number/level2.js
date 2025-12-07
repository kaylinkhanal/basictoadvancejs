<<<<<<< HEAD
// 1.	Round 15.67 down to nearest integer, then add 5.
        console.log(Math.floor(15.67)+5);  // 20

// 2.	Round 9.12 up, then multiply by 2.
        console.log(Math.ceil(9.12)*2);   // 20

// 3.	Round 6.49 to nearest integer, then subtract 3.
        console.log(Math.round(6.49)-3);  // 3

// 4.	Find largest number in 12, -4, 27, 8, then subtract 10.
        console.log(Math.max(12,-4,27,8)-10); // 17

// 5.	Find smallest number in 0, 22, -7, 15, -3, then add 5.
        console.log(Math.min(0,22,-7,15,-3)+5);   // -2

// 6.	Generate a random floating-point number 0–1, multiply by 100.
        console.log(Math.random()*100);  // 18.249131923099494

// 7.	Convert "67.89" to number, then round to 1 decimal place.
        let num= Number("67.89")
        console.log(+num.toFixed(1));  // 67.9

// 8.	Convert "450px" to integer, then divide by 3.
        console.log(parseInt("450px")/3);  // 150 (Extract integer from string, stops at first non-number)

// 9.	Convert true to a number and multiply by 10.
        console.log(Number(true)*10);  // 10

// 10.	Format 23.6789 to 2 decimal places, then convert back to number.
        let num2= 23.6789;
        let placedNum= num2.toFixed(2);
        console.log(Number(placedNum));  // 23.68

// 11.	Check if 18.5 is integer; if not, round down.
       let value=18.5;    
        console.log(Number.isInteger(value)?value:Math.floor(value));
        
// 12.	Find absolute value of -56, then subtract 10.
        console.log(Math.abs(-56)-10);  // 46 ( Math.abs() method returns the absolute value of a number.)
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
