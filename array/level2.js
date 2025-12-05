const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
console.log(arr + ',' + arr2);


//Q2. output shoulb be [5,1,3,2,6]
let reverse = arr2.reverse();
console.log(reverse);

//Q3. Find and print the highest number in arr2
let maximumNumber = Math.max(...arr2);
console.log(maximumNumber);

//Q4. Find and print the lowest number in arr
let lowestNumber = Math.min(...arr);
console.log(lowestNumber);

//Q5. Add the total length of both arr and arr2
let totalLength = arr.length + arr2.length;
console.log(totalLength);





// hw: map vs foreach vs filter  in array
