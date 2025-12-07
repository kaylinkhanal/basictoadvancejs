// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
<<<<<<< HEAD
console.log(shyamScore.length);
=======
const arraylength1=ramScore.length
const arraylength2=shyamScore.length
console.log(arraylength1)
console.log(arraylength2)
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349

// Q2. get the output of last element of array and check if it is divisible by 2
let lastnumram=ramScore[arraylength1-1]
let divisiable1=lastnumram%2===0
console.log(divisiable1)

<<<<<<< HEAD
// Q2. get the output of last element of array and check if it is divisible by 21
console.log((shyamScore.length-1)%21===0)


// Q3. check if ram percentage is greater than shyam percentage
let ramPercentage=((ramScore[0]+ramScore[1]+ramScore[2])/300)*100
console.log(Number(ramPercentage.toFixed(2)));
let shyamPercentage=((shyamScore[0]+shyamScore[1]+shyamScore[2])/300)*100
console.log(Number(shyamPercentage.toFixed(2)));

console.log(ramPercentage>shyamPercentage);


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
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349


