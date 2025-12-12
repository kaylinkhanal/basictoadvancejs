// ### 3. Basic Object Operations

// **Q6: Get Object Keys**
arr1 = {'a': 1, 'b': 2, 'c': 3}
// Return an array of all the object's **keys**.
// * **Hint:** Use `Object.keys()`.
// * **Expected Output:** `['a', 'b', 'c']`
const output1 = Object.keys(arr1)
console.log(output1)

// **Q7: Get Object Values**
arr2 = {'a': 1, 'b': 2, 'c': 3}
// Return an array of all the object's **values**.
// * **Hint:** Use `Object.values()`.
// * **Expected Output:** `[1, 2, 3]`
const output2 = Object.values(arr2)
console.log(output2)

// **Q8: Swap Keys and Values**
arr3 = {'a': 1, 'b': 2, 'c': 3}
// Return a new object where the keys and values are swapped.
// * **Hint:** Use `Object.entries()` to get key/value pairs, and then use `reduce()` to reconstruct the object.
// * **Expected Output:** `{'1': 'a', '2': 'b', '3': 'c'}`
const output3 = Object.entries(arr3).reduce((acc,[key,value])=>{
    // acc = Object.keys(arr3)
    // Object.keys(arr3)=Object.values(arr3)
    // Object.values(arr3) = acc
    acc[value]=key
    return acc
},{})
console.log(output3)

// **Q9: Merge Objects**
arr4 = {'a': 1, 'b': 2, 'c': 3}
arr5 = {'c': 10, 'd': 4, 'a': 5}
// Merge the two objects into a single new object. If a key exists in both, the value from the second object should overwrite the first.
// * **Hint:** Use the spread syntax (`...`) to create a new object.
// * **Expected Output:** `{'a': 5, 'b': 2, 'c': 10, 'd': 4}`
const arr6 = Object.entries(arr4).concat(Object.entries(arr5))
console.log(arr6)

// **Q10: Check for Empty Object**
arr7 = {}
// Check if the object is **empty** (has no enumerable properties).
// * **Hint:** Get the keys and check the array's `length`.
// * **Expected Output:** `true`
console.log( keys = (Object.keys(arr7)===0) )
console.log( arr7.length===0)
// not sure it should provide to true as output 
