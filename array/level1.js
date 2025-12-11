// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
<<<<<<< HEAD
let ramScore = [95,92,87];
console.log(ramScore.length);  

=======
const arraylength1=ramScore.length
const arraylength2=shyamScore.length
console.log(arraylength1)
console.log(arraylength2)
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e

// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)

<<<<<<< HEAD
// Q2. get the output of last element of array and check if it is divisible by 21
let rams = [95, 92, 87];

let lastElement = ram[ram.length - 1];

if (lastElement % 21 === 0) {
    console.log("Divisible by 21");
} else {
    console.log("Not divisible by 21");
}



// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage = (ramScore[0]+ramScore[1]+ramScore[2])/3
console.log(ramPercentage.toFixed(2))
let shyamPercentage = (shyamScore[0]+shyamScore[1]+shyamScore[2])/3
console.log(shyamPercentage.toFixed(2))
let greater = (ramPercentage>shyamPercentage)
console.log(greater)

=======
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
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e


