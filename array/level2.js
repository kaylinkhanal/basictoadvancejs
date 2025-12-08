const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
console.log([...arr,...arr2])

//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())


// hw: map vs foreach vs filter  in array
const output = arr.map((item) => {
    if(item % 2 === 0){
        return item * 3
    }else{
        return item * 2
    }
})
console.log(output);