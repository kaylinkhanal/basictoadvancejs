// ### 1. Filtering and Mapping (Transformation)

// **Q1: Square the Evens**
arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// Return a new array containing the **square** of only the **even** numbers.
// * **Hint:** Use the `filter()` method to select evens, followed by the `map()` method to square them.
// * **Expected Output:** `[4, 16, 36, 64]`

const newArry = arr1.filter(x=>{
    if(x%2===0)
    return x
}).map(x=>x**2)
console.log(newArry)

// **Q2: Flatten Array**
arr2 = [[1, 2], [3, 4, 5], [6]] 
// Flatten this array of depth 2 into a single array.
// * **Hint:** Use the built-in `flat()` method with the correct depth argument.
// * **Expected Output:** `[1, 2, 3, 4, 5, 6]`

const flattenArry = arr2.flat(1)
console.log(flattenArry)

// **Q3: Filter and Uppercase**
arr3 = ['apple', 'banana', 'kiwi', 'grapefruit', 'cat']
// Return a new array containing the strings that are **longer than 5 characters**, converted to **uppercase**.
// * **Hint:** Chain `filter()` (check `length > 5`) and `map()` (use `toUpperCase()`).
// * **Expected Output:** `['BANANA', 'GRAPEFRUIT']`

const filteredArry = arr3.filter(x=>{
    if(x.length > 5)
    return x
}).map(x=> x.toUpperCase())
console.log(filteredArry)

// ### 2. Array Reduction (`reduce()`)

// **Q4: Sum of Array**
arr4 = [1, 2, 3, 4, 5]
// Use the `reduce()` method to find the **sum** of all numbers.
// * **Hint:** The initial value for the accumulator should be `0`.
// * **Expected Output:** `15`
const sumOfAll = arr4.reduce((acc,x)=>{
    acc+=x
    return acc
},0)
console.log(sumOfAll)

// **Q5: Count Element Frequency**
arr5 = ['apple', 'banana', 'orange', 'apple', 'orange', 'orange']
// Use `reduce()` to count the frequency of each element, returning an object.
// * **Hint:** Initialize the accumulator as an empty object (`{}`). For each string, check if it's already a key in the object.
// * **Expected Output:** `{'apple': 2, 'banana': 1, 'orange': 3}`
 const countAll = arr5.reduce((acc,x)=>{
    acc[x] = (acc[x]||0) + 1 
    return acc
 },[])
 console.log(countAll)