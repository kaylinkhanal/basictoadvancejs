const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

const arrMerge = arr.concat(arr2)
console.log(arrMerge);
console.log([...arr, ...arr2])//Output: [3,4,5,6,1,6,2,3,1,5]

//Q2. output shoulb be [5,1,3,2,6]
const arr1 =[...arr]
const arrReverse = arr1.reverse()
console.log(arrReverse);//Output: [5,1,3,2,6]

//Q3. Output should be ascending order of elements in array
const arrAscend = arrMerge.sort((a,b) => a-b)
console.log(arrAscend);//Output: [1,1,2,3,3,4,5,5,6,6]

//Output should be descending order of elements in array
const arrDescend = arrMerge.sort((a,b)=>b-a)
console.log(arrDescend);//Output: [6,6,5,5,4,3,3,2,1,1]

//Q4. Output should be 5
console.log(arr[2]);

//Q5. Output should be [5,6,1]
const arrS = [...arr]
const arrSlice = arrS.slice(2,5)
console.log(arrSlice);//Output: [5,6,1]


// hw: map vs foreach vs filter  in array