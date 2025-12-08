const arr = [5,1,4]

// syntax for map 

// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
//--------------------



//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
const newArr = arr.map((item) => {
if (item % 2 === 0 ){
    return item * 3
}
else {
    return item * 2
}
})
console.log(newArr)



//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]

const output = arr.filter((item) =>{
    if (item > 2){
        return item 
    }
})
console.log(output)


let arr2 = [5, 6, 3, 1]
const arr3 = arr2.map((item)=>{
    return item*10
})
console.log(arr3.reverse())