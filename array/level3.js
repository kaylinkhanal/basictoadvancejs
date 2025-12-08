
//Q1. Reverse an array without using revwrse method
const arr = [1,2,3,4,5];
let revArr = arr.reduce ((acc , curr) => 
   [curr , ...acc], []
);
console.log(revArr);

//Q2. Find the second largest number in [12, 35, 1, 10, 34, 1].
//Expected output: 34
const arr1 = [12,35,1,10,34,1];
const secondLargest = [...new Set(arr1)].sort((a,b) => b - a)[1];
console.log(secondLargest);

//Q3. Merge two arrays and remove duplicates
const box1 = [1,2,3,4];
const box2 = [3,4,5,6];
const mergedDup = [...new Set([...box1, ...box2])];
console.log(mergedDup);

