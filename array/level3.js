const arr = [5,1,4]
// syntax for map           
// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
//--------------------



//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
    const output = arr.map((item)=>{
        if(item%2===0)
        {
            return item*3
        }
        else{
            return item *2;
        }
    })
    console.log(output);


//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]
let filterOut = arr.filter(item => item > 2);
console.log(filterOut);


const arr1 = [5,1,2,4]
//Q1. use map to multiply each item by 3 if even and remove the odds ones
const output1 = arr1.map((item) => {
    if(item%2===0){
    return item*3;
    }
}).filter((item) => {
    // if(item%2!==0){
    //     return item;
    // }
    return item;
    
})
console.log(output1);


// Q2 use foreach to calculate the sum of all even numbers in the array
    let sum = 0
arr1.forEach((item) => {
    if(item %2 ===0){
        sum += item
    }
});
console.log(sum)