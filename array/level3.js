const nums = [10, 20, 30, 40, 50, 60];
//================>slice()
// const part = nums.slice(1, 4);
// console.log(part); // [20, 30, 40]
console.log(nums.slice(1, 4));
//slice(start, end) → end not included

console.log(nums); // original same

//last 3 item--- [40, 50, 60]
console.log(nums.slice(-3));

//================>splice()
const nums2 = [100, 200, 300, 400];
// splice(start, deleteCount, itemsToAdd…) -->changes orginal array
// remove 1 item from index 1 and add 250
nums2.splice(1, 1, 250);
console.log(nums2); // [100, 250, 300, 400]
//removes item from index 2 & 2 items
spliced1 = nums2.splice(2, 2);

console.log("After Spliced", nums2);
console.log("After Spliced", spliced1);

// Remove last two items --Expected Output[5,10]
const data = [5, 10, 15, 20];
data.splice(-2, 2);
console.log(data);

//Spread operator (…)
const a = [1, 2];
const b = [3, 4];

//merge the element of array a and array b
const merged = [...a, ...b];
console.log(merged);

//Copy the element of a
const copy = [...a];
console.log(copy);
