// Q1. write a function that takes in array as input and calculates the length of that array
const calculateArray=(arr)=>{
    const length=arr.length
    return length
 
}
console.log(calculateArray([1,2,3,4,5]))






//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const calculateaverage=(numArr)=>{
    let sum =0;
    numArr.forEach((item)=>{
         sum=sum+item
    });
return sum/numArr.length
}
console.log(calculateaverage[10,20,30,40])





//Q3. write a function that takes in an object as an input and returns the total number of keys



//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 