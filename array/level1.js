//setup 

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

//syntax :-
console.log('the updated index value is :',ramScore[1]=98,ramScore)

// Q2. Add a new score of 88 to the end of the shyamScore array.

//syntax :- array.push(par1, par2, par3 ,...........)
shyamScore.push(88)                 //pushes 1 array 
shyamScore.push(98,100)             //pushes multiple array 
console.log (shyamScore)

// Q3. Remove the last element from ramScore and store it in a variable called 'removedScore'.

//syntax :- array.pop()
let removedScore = ramScore.pop()              //removes the last array 
console.log('Ram removedscore is :', removedScore)

// Q4. Add a score of 85 to the beginning (start) of the shyamScore array.

//syntax :- array.unshift(value)
shyamScore.unshift(85)          //adds elements in begning of the array 
console.log(shyamScore)

// Q5. Check if the length of ramScore is equal to the length of shyamScore.

//syntax :- arr1.lenght() === arr2.length()
console.log(ramScore.length===shyamScore.length)

// Q6. Check if shyamScore includes the number 77 (result should be true/false).

//syntax :- array.includes(value)
console.log (shyamScore.includes(77))

// Q7. Create a new array called 'totalScores' that combines (concatenates) ramScore and shyamScore.

//syntax :- array = arr1 + arr2 or [...arr1] +[...arr2]
// let totalScores = ramScore + shyamScore
// totalScores = ([...ramScore]+[...shyamScore])
totalScores = ramScore.concat(shyamScore)
console.log ('this is combined scores :', totalScores)

// Q8. Convert the ramScore array into a string separated by commas.

//syntax :-array.toString()
// console.log (ramScore.toString())
console.log(ramScore.join(','))

// Q9. Calculate the average of shyamScore using shyamScore.length (Dynamic calculation).

//syntax :- 
console.log (shyamScore)
const avg = (shyamScore[0],shyamScore[1],shyamScore[2],shyamScore[3],shyamScore[4],shyamScore[5],shyamScore[6]/shyamScore.length)
console.log (avg)
console.log (Number(avg.toFixed(3)))
// Hint: (Sum of elements) / length

// Q10. Sort the totalScores array in ascending order.

//syntax :-array.sort(compareFunction)
// console.log (totalScores)
totalScores.sort((a,b)=> {
    // return b-a              //sort in decending order 
    return a-b                 //sort in acending order 
})

console.log(totalScores)