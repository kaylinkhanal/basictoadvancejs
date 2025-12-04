// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77,99,99]

// Q1. calcuate the length of array
console.log(ramScore.length)
console.log(shyamScore.length)



// Q2. get the output of last element of array and check if it is divisible by 21
if (ramScore[2]%21===0){
    console.log("true ")
}
else{
    console.log("false")
}
if (shyamScore[2]%21===0){
    console.log("true ")
}
else{
    console.log("false")
}


// Q3. check if ram percentage is greater than shyam percentage
let rampercentage=(ramScore[0]+ramScore[1]+ramScore[2])/3
console.log(rampercentage.toFixed(2))
let shyampercentage=(shyamScore[0]+shyamScore[1]+shyamScore[2])/3
console.log(shyampercentage.toFixed(2))

let gretest = (rampercentage>shyampercentage)
console.log(gretest)

