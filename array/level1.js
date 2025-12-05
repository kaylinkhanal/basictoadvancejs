// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
<<<<<<< HEAD
const arraylength1=ramScore.length
const arraylength2=shyamScore.length
console.log(arraylength1)
console.log(arraylength2)
=======
console.log(ramScore.length);
console.log(shyamScore.length);

>>>>>>> 084cf791fb9b8ab527fa7a24af4998551ea3d426

// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)

<<<<<<< HEAD
let lastnumshyam=shyamScore[arraylength2-1]
let divisiable2=lastnumshyam%2===0
console.log(divisiable2)


// Q3. check if ram percentage is greater than shyam percentage
let ramtotal=ramScore[0]+ramScore[1]+ramScore[2]
let rampercentage=(ramtotal/300)*100

let shyamtotal=shyamScore[0]+shyamScore[1]+shyamScore[2]
let shyampercentage=(shyamtotal/300)*100

let result=rampercentage>shyampercentage
console.log(result)








//mapvs foreach vs filter in array
=======
// Q2. get the output of last element of array and check if it is divisible by 21
let lastram = ramScore[ramScore.length - 1];
let lastshyam = shyamScore[shyamScore.length - 1];
console.log(lastram,lastram % 21 === 0);
console.log(lastshyam,lastshyam % 21 ===0);



// Q3. check if ram percentage is greater than shyam percentage
let ramtotal= ramScore[0]+ramScore[1]+ramScore[2]
let shyamtotal= shyamScore[0]+shyamScore[1]+shyamScore[2]
let ramPercentage = ramtotal / ramScore.length;
let shyamPercentage = shyamtotal / shyamScore.length;
console.log(ramPercentage);
console.log(shyamPercentage);

//  Q4. update ram score of 2nd index to 100
ramScore[2] = 100;
console.log(ramScore);
>>>>>>> 084cf791fb9b8ab527fa7a24af4998551ea3d426





let studentAges = [18, 22, 19, 25, 20];
let studentNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Q5. Find the sum of all elements in the studentAges array.
let totalAge = studentAges[0] + studentAges[1] + studentAges[2] + studentAges[3] + studentAges[4];
console.log("Total Age:", totalAge);


// Q6. Check if the 'studentNames' array contains the name "Charlie".
let hasCharlie = studentNames.includes("Charlie");
console.log("Has Charlie:", hasCharlie);


// Q7. Add a new age, 21, to the end of the 'studentAges' array and print the new array.
studentAges.push(21);
console.log("New Student Ages:", studentAges);



let quizScores = [45, 38, 50, 42];
let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Q8. Get the output of the first element of the 'quizScores' array and check if it is greater than 40.
let firstScore = quizScores[0];
console.log(firstScore, firstScore > 40);




// Q9. Remove the last element from the 'weekdays' array and print the removed element and the new array.
let removedDay = weekdays.pop();
console.log("Removed Day:", removedDay);
console.log("New Weekdays Array:", weekdays);


// Q10. Add the string "Sat" to the beginning of the 'weekdays' array and print the new array.
weekdays.unshift("Sat");
console.log("Updated Weekdays Array:", weekdays);   
