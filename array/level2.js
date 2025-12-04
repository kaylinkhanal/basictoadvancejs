const arr = [3, 4, 5, 6, 1]

const arr2 = [6, 2, 3, 1, 5]

//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
// console.log (arr + arr2) 
console.log([...arr] + [...arr2])


//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())


// --- SETUP ---
const numbers = [10, 25, 4, 30, 15, 7];
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "T-Shirt", price: 30, category: "Apparel" },
    { name: "Coffee Maker", price: 45, category: "Appliances" },
    { name: "Mouse", price: 25, category: "Electronics" }
];
// -------------

// Q1. Use .map() to create a new array where every number in 'numbers' is multiplied by 2.
// Output should be [20, 50, 8, 60, 30, 14]

const doubleOfTheNumber = numbers.map(x => x * 2)     //map function maps ever element in the array and x is input whereas  x*2 return value 
console.log(doubleOfTheNumber)
//arrange in acending order 
doubleOfTheNumber.sort((a, b) => a - b)
console.log('sorted number:', doubleOfTheNumber)

// Q2. Use .filter() to create a new array containing only numbers from 'numbers' that are greater than 10.
// Output should be [25, 30, 15]

const greaterThan10 = numbers.filter(x => x > 10)      //filter compares the elements in array and print the true elements
console.log(greaterThan10.sort((a, b) => a - b))


// Q3. Use .map() to create a new array containing only the 'name' of each product in the 'products' array.
// Output should be ["Laptop", "T-Shirt", "Coffee Maker", "Mouse"]

const newName = products.map(x => x.name)
console.log(newName)

// Q4. Use .filter() to find all products from the 'products' array that belong to the "Electronics" category.
// Output should be an array of two objects.

const selectedProduct = products.filter(x => x.category === "Electronics")
console.log(selectedProduct)

// Q5. Use .forEach() to print the name and price of every product to the console.
// Example Output: "Laptop costs $1200", "T-Shirt costs $30", etc.

const nameAndPrice = products.forEach(y => { console.log(`${y.name} costs $${y.price}`)})
//.foreach() runs the block of code for every items

// Q6. Use .map() to create a new array from 'products' that includes the product name and a new property 'taxedPrice' (price * 1.10).
// Output: [{name: "Laptop", taxedPrice: 1320}, ...] (partial structure)

const newProduct = products.map(x=>{return{...x, taxedPrice: x.price*1.10}}) //...x This copies the original name, price, and category into the new object
console.log (newProduct)

// Q7. Use .filter() to find all products whose price is less than or equal to $40.

const priceFilter = products.filter(x => x.price<=40)
console.log(priceFilter)

// Q8. Use .map() to create a new array that checks if each number in 'numbers' is even or odd.
// Output should be: ["odd", "odd", "even", "even", "odd", "odd"]

// const checkEvenOrOdd =  numbers.map(x=>`${x%2==0},${x%2===1}`)
const checkEvenOrOdd = numbers.map(x=>x%2===0 ? 'even':'odd') //Condition  ? value if true : value if false 
console.log(checkEvenOrOdd)

// Q9. Use .forEach() to calculate and log the sum of all numbers in the 'numbers' array.
// (Hint: You will need a separate variable initialized to 0 outside the forEach loop.)
let totalSum = 0
numbers.forEach(x=> totalSum += x)
console.log(totalSum)

// Q10. Use .filter() and .map() together (chaining) to first find products in the "Apparel" category, and then create an array of just their names.
// Output should be: ["T-Shirt"]

let combiledFuncton = products.filter(x=>x.category== "Electronics").map(x=>x.name)
console.log(combiledFuncton)
