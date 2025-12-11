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