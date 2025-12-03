let a = 20;
let b = 30;
let c = 40;
let d = 50;

// Q1. Check if the sum of a and b is greater than c 
// AND either (b minus d) is less than a OR twice c equals d
if ( (a+b)>c && (b-d)<a || 2*c===d ){
    console.log("True");
}else{
    console.log("false");
}//output: True
//Explanation:
// a + b = 20 + 30 = 50, which is greater than c (40) --> True
// b - d = 30 - 50 = -20, which is less than a (20) --> True
// Since both conditions are satisfied, the overall expression evaluates to True.
//-----------------------------------------------------------------

// Q2. Check if it is NOT true that both a and b are even 
// OR both c and d are divisible by 5 AND d is greater than 10

if (!(a%2===0 && b%2===0) || (c%5===0 && d%5===0) && d>10){
    console.log(true);
}else{
    console.log(false);
}//output: true
//Explanation:
// a (20) and b (30) are both even numbers --> True
// c (40) and d (50) are both divisible by 5 --> True
// d (50) is greater than 10 --> True
// The expression evaluates to True due to the OR condition.
//-----------------------------------------------------------------

// Q3. Check if a is less than b AND b is greater than c 
// OR it is NOT true that d minus a is less than or equal to c

if ((a<b && b>c) || !((d-a)<=c)){
    console.log(true);
}else{
    console.log(false);
}//output: false
//Explanation:
// a (20) is less than b (30) --> True
// b (30) is not greater than c (40) --> False
// d - a = 50 - 20 = 30, which is less than or equal to c (40) --> True
// The overall expression evaluates to False.
//-----------------------------------------------------------------

// Q4. Check if (a plus c is greater than d AND b minus c is less than a) 
// OR (a times d equals b AND c is NOT equal to 5)
if ( (a+c)>d && (b-c)<a || (a*d)===b && !(c===5) ){
    console.log(true);
}else{
    console.log(false);
}//output: false
//Explanation:
// a + c = 20 + 40 = 60, which is greater than d (50) --> True

// Q5. Check if it is NOT true that (a is greater than b OR c is less than d) 
// AND (b is even OR d is divisible by 3)
if ( !(a>b || c<d) && (b%2===0 || d%3===0) ){
    console.log(true);
}else{
    console.log(false);
}//output: false
//Explanation:
// a (20) is not greater than b (30) --> True 
// c (40) is less than d (50) --> True
// b (30) is even --> True
// d (50) is not divisible by 3 --> False
// The overall expression evaluates to False.