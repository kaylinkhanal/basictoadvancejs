let a=10
let b=40
//Q1. Check if both a and b are positive AND b is a multiple of a.
console.log((a>0 && b>0)&& (b%a===0));
//Q2. Check if a² + b is greater than b² − a.
console.log((a**2 + b)>(b**2 - a));


//Q3. Check if a lies between (b / 3) and (b / 2).
console.log(a>(b/3) && (a<(b/2)));

//Q4. Check if a + b is divisible by 5.
console.log((a+b)%5 ===0);  
//Q5. Check if a × b is greater than a + b.
console.log((a*b)>(a+b));