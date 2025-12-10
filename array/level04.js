
const fruits = ["apple", "banana", "orange", "mango"];
const numbers = [10, 25, 15, 30, 5];

// Q1. Join all fruits into a single string 

const fruitJoined = fruits.join();
console.log(fruitJoined);



// Q2. Find the smallest number in numbers array
// Expected output: 5
const smaller = Math.min(numbers.length);
console.log(smaller);

// Q3. Sort the numbers array in ascending order 
const ascending = numbers.sort((a, b) =>
{
    return a-b;
});
console.log(ascending);
   


// Q4. Create a new array that contains only fruits with length greater than 5
const longName = fruits.filter((item) =>{
    
        return item.length > 5;
    
});
console.log(longName);

// Q5. Check if the fruits array includes "grape"
// Expected output: false
const checking = fruits.includes("grape");
console.log(checking);