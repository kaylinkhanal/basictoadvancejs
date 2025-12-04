
let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array

console.log(ramScore.length);
console.log(shyamScore.length);

// Q2. get the output of last element of array and check if it is divisible by 21

console.log(ramScore[ramScore.length-1] % 21 === 0);

// Q3. check if ram percentage is greater than shyam percentage

let ram_percentage = (ramScore[0] + ramScore[1] + ramScore[2])*100/300;
let shyam_percentage = (shyamScore[0] + shyamScore[1] + shyamScore[2])*100/300;
console.log(ram_percentage>shyam_percentage);

//Q4. Print the first element of each array

console.log(ramScore[0]);  
console.log(shyamScore[0]);

//Q5. Replace the 2nd element in Ram’s array with 100

ramScore[1] = 100;
console.log(ramScore);

//Q6. Check if 99 exists in Shyam’s array

console.log(shyamScore.includes(99));

//Q7. Print the highest score from Ram’s array

console.log(Math.max(...ramScore)); 

//Q8. Reverse Shyam’s array

shyamScore.reverse();
console.log(shyamScore);

