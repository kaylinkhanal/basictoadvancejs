// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
<<<<<<< HEAD
console.log(ramScore.length);
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
console.log(ramScore[ramScore.length-1]%21===0);


// Q3. check if ram percentage is greater than shyam percentage
 let a= (ramScore[0] +ramScore[1]+ramScore[2])/3;
let b= (shyamScore[0] +shyamScore[1]+shyamScore[2])/3;
console.log(a>b);
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

