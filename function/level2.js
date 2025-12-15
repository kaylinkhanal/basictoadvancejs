// Q1. write a function that takes in array as input and calculates the length of that array
const array=(arr)=>{
     return arr.length
} 

console.log(array([1,2,3,4,5]))


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers

 const arr=(newarr)=>{
    sum=0;
   newarr.forEach((item)=>{
     
       sum=sum+item
     
   })
     return sum/newarr.length
 
 }
 console.log(arr([10,20]))





//Q3. write a function that takes in an object as an input and returns the total number of keys
const obj=(newobj)=>{
  return Object.keys(newobj)
}
console.log(obj({name:'aloj',caste:'kahdka'}))



//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 

const newar =(arr2)=>{
   sum=0;
   arr2.forEach((item)=>{
      sum=sum+item
   })
   return sum

}
console.log(newar([10,20]))