// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
const arraylength1=ramScore.length
const arraylength2=shyamScore.length
console.log(arraylength1)
console.log(arraylength2)

<<<<<<< HEAD
console.log(ramScore.length)
console.log(shyamScore.length)

=======
// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349

let lastnumshyam=shyamScore[arraylength2-1]
let divisiable2=lastnumshyam%2===0
console.log(divisiable2)

let lastElement = ramScore[ramScore.length - 1];
console.log("Last element:", lastElement);

// console.log(ramScore[ramScore.length - 1])

if (lastElement % 21 === 0) {
    console.log("divisible");
} else {
    console.log("NOT divisible");
}



// Q3. check if ram percentage is greater than shyam percentage
let ramtotal=ramScore[0]+ramScore[1]+ramScore[2]
let rampercentage=(ramtotal/300)*100

let shyamtotal=shyamScore[0]+shyamScore[1]+shyamScore[2]
let shyampercentage=(shyamtotal/300)*100

let result=rampercentage>shyampercentage
console.log(result)








//mapvs foreach vs filter in array

const a = (ramScore[0]+ramScore[1]+ramScore[2])/300 * 100;    //ramScore[initial index]+ramScore[next index]+..
const b = (shyamScore[0]+shyamScore[1]+shyamScore[2])/300 * 100;

console.log(a > b)

/*// Function to calculate the average (percentage) of an array of scores
function calculateAverage(scores) {
    // Use the reduce method to sum all the scores in the array
    const sum = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
    // Divide the sum by the number of scores to get the average
    const average = sum / scores.length;
    return average;
}

// Calculate the average percentage for both Ram and Shyam
let ramPercentage = calculateAverage(ramScore);
let shyamPercentage = calculateAverage(shyamScore);
 */