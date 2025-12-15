// Q1. write a function that takes in array as input and calculates the length of that array
let arr = ((val)=>{
    return val.length
});
 console.log(arr([1,3,5,8,7,9]))  //output 6

//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
let arr2=((val)=>{
let sum=0;
val.map((item)=>{
sum=sum+item
})
return sum/val.length
});
console.log(arr2([2,5,7,8,6]))  // output 5.6


//Q3. write a function that takes in an object as an input and returns the total number of keys

let arr3=((val)=>{
    return Object.keys(val).length
})
console.log(arr3({name:"ram",age:20,address:"kathmandu",}))  // output 3

//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 

let arr4= ((val)=>{
    let sum=0
     val.forEach((item)=>{
        sum+=item

    })
    return sum

})
console.log(arr4([1,8,7,45,18,21])) // output  100