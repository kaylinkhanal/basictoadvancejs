let a =10
let b = 20

// Q1. check if a is greater than b
 console.log(a>b);

/// Q2. check if  10 * a and check if it is greater or euqals than b

console.log(a*10>=b);

// Q3. check if b is divisible by a
console.log((b%a)===0);

// Q4. Check if number x = 18 lies between 10 and 20 (inclusive).
let x=18;
console.log(10<=x<=20);

// Q5. Check if age = 15 is allowed to vote (age ≥ 18).
let age= 15;
 if (age>=18) 
    {
        console.log("you can vote");
    
 }
 console.log("you can't vote");
    

// Q6. Check if either a = 9 or b = 4 is greater than 7.

let A=9;
let B=4;
console.log(A>7,B>7);


// Q7. Check if string msg = "JavaScript Rocks" contains "Rocks".
let msg="JavaScript Rocks"
console.log(msg.includes("Rocks"));

// Q8. Check if array nums = [2,4,6] has length more than 2.

 let  nums = [2,4,6];
 console.log(nums.length>2);


// Q9. Check if 7 * 6 is even.
 if ((7*6)%2===0) {
 console.log("The num is even");    
 }
 else{console.log("the num is not even ");
}
 
// Q10. Check if a and b are both negative numbers.
if(a<0,b<0){
console.log( "both are negetive")

}
else{
    console.log("both are positive");
}


