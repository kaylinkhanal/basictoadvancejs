// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array

console.log (ramScore.length)

// Q2. get the output of last element of array and check if it is divisible by 21

const lastElement = ramScore[ramScore.length -1]
console.log(lastElement%21 ===0 )

// Q3. check if ram percentage is greater than shyam percentage

const a = (ramScore[0]+ramScore[1]+ramScore[2])/300 *100
const b = (shyamScore[0]+shyamScore[1]+shyamScore[2])/300 *100

console.log(a>b)

// Q1. Update the second element (index 1) of ramScore to 98.

console.log('the updated index value is :',ramScore[1]=98,ramScore)

// Q2. Add a new score of 88 to the end of the shyamScore array.

shyamScore.push(88)
shyamScore.push(98,100)

// Q3. Remove the last element from ramScore and store it in a variable called 'removedScore'.

// Q4. Add a score of 85 to the beginning (start) of the shyamScore array.

// Q5. Check if the length of ramScore is equal to the length of shyamScore.

// Q6. Check if shyamScore includes the number 77 (result should be true/false).

// Q7. Create a new array called 'totalScores' that combines (concatenates) ramScore and shyamScore.

// Q8. Convert the ramScore array into a string separated by commas.

// Q9. Calculate the average of shyamScore using shyamScore.length (Dynamic calculation).
// Hint: (Sum of elements) / length

// Q10. Sort the totalScores array (from Q7) in ascending order.

