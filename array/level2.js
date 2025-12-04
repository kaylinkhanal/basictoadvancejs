const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

output1 = arr.concat(arr2);
console.log(output1);

//Q2. output shoulb be [5,1,3,2,6]

output2 = arr2.reverse();
console.log(output2);

//Q3. Check if number 3 exists in both arrays.

console.log(arr.includes(3));   
console.log(arr2.includes(3));

//Q4. Sort both arrays in ascending order.

let sortedArr  = arr.sort((a, b) => a - b);
let sortedArr2 = arr2.sort((a, b) => a - b);

console.log(sortedArr);  
console.log(sortedArr2);

//Q5. Find the last element of arr and arr2.

console.log(arr[arr.length - 1]);   
console.log(arr2[arr2.length - 1]);

