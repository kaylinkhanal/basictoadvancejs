// array.reduce((accumulator, currentValue) => {
//      Logic to update the accumulator
//      return accumulator;
// }, initialValue); <-- This is crucial!

// accumulator: The running total or calculated value that gets carried through each iteration.
// currentValue: The current element being processed in the array.
// initialValue: The starting value for the accumulator (e.g., 0 for a sum, or {} for a new object).

// --- SETUP ---
const data = [5, 10, 2, 8, 5];
const inventory = [
    { item: "A", quantity: 3, price: 10 },
    { item: "B", quantity: 1, price: 50 },
    { item: "C", quantity: 7, price: 5 }
];
const names = ["Alice", "Bob", "Charlie", "Alice", "David", "Bob"];
// -------------

// Q1. Use .reduce() to calculate the total sum of all numbers in the 'data' array.
// The initial accumulator value should be 0.
// Expected Output: 30

const totalSum = data.reduce((acc, x) => { return acc += x }, 0) //intial acc = 0 
console.log(totalSum)

// Q2. Use .reduce() to find the largest number in the 'data' array. 
// The initial accumulator value can be the first element of the array.
// Expected Output: 10

const largestArray = data.reduce((acc, x) => { return acc > x ? acc : x }, data[0]) //intial acc=frist index of the data array 
console.log(largestArray)

// Q3. Use .reduce() to calculate the total number of items in the 'inventory'.
// (Total quantity = 3 + 1 + 7) 
// Expected Output: 11

const totalQuantity = inventory.reduce((total, x) => { return total += x.quantity }, 0)
console.log(totalQuantity)


// Q4. Use .reduce() to calculate the total value of the inventory (quantity * price for each item).
// Total value = (310) + (150) + (7*5)
// Expected Output: 115

const totalValueOfInventory = inventory.reduce((total, x) => { return total += x.quantity * x.price }, 0)
console.log(totalValueOfInventory)

// Q5. Use .reduce() to count how many times each name appears in the 'names' array. 
// The initial accumulator should be an empty object {}. 
// Expected Output: { Alice: 2, Bob: 2, Charlie: 1, David: 1 }

const count = names.reduce((acc, x) => {
    if (acc[x]) 
    {
        acc[x]++
    }
    else
    {
        acc[x]= 1
    }
    return acc //return only the accumulator 
}, [])
console.log(count)

// Q6. Use .reduce() to create a single array that contains only the item name from the 'inventory' objects.
// Expected Output: ["A", "B", "C"]

// const singeArray = inventory.reduce((list,x) =>(...x , x.item))
const itemNames = inventory.reduce((list, product) => {
    list.push(product.item);
    return list; // Return the array with the new name added
}, []); // <-- Initial Value: [] (An empty array)
console.log(itemNames); 


// Q7. Use .reduce() to check if all numbers in the 'data' array are greater than 1.
// The accumulator should be a boolean (true/false).
// Expected Output: true

const greaterThanOne = data.reduce((acc,x)=>{
    acc = x>1
    return acc
},[])
console.log (greaterThanOne)

// Q8. Use .filter() and .reduce() together to find the sum of only the numbers in 'data' that are greater than 4.
// Expected Output: 28 (5 + 10 + 8 + 5)

const sumOfNumberGreaterThanFour = data.filter(x => x>4).reduce((acc,x)=>acc+=x)
console.log (sumOfNumberGreaterThanFour)


// Q9. Use .map() and .reduce() together. First, double every number in 'data', then find the sum of the doubled numbers.
// Expected Output: 60

const doubleAndSum = data.map(x=>x*2).reduce((acc,x)=>acc+=x)
console.log(doubleAndSum)

// Q10. Use .reduce() to find the average of the 'data' array.
// Hint: You need to keep track of both the sum and the count (index) inside the reducer function.
// let sum=0
// const avg = data.reduce((acc,x)=>{
//     acc += x
//    acc= acc/data.length
//    return acc
// },0)
// console.log(avg)


const average = data.reduce((acc, num, index, array) => {
    acc += num; // Always add the current number to the sum
    
    // Check if this is the LAST item in the array
    if (index === array.length - 1) {
        return acc / array.length; // Return the final average
    }
    return acc; // Otherwise, return the running sum for the next iteration
}, 0);
console.log(average); // Output: 6 (30 / 5)