const arr = [5,1,4,7]

// syntax for map 

// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
//--------------------



//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
let newarray=arr.map((val)=>{
    if (val%2===0) return val*3
    else{
        return val*2
    }
})
console.log(newarray);

//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]
let arr2=arr.filter((val)=>{
    return val>2
})
console.log(arr2);