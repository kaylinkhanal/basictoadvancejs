const arr = [3, 4, 5, 6, 1]

const arr2 = [6, 2, 3, 1, 5]

//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

const output1 = arr.concat(arr2)
console.log(output1)

//Q2. output shoulb be [5,1,3,2,6]

const output2 = arr2.reverse()
console.log(output2)
// hw: map vs foreach vs filter  in array