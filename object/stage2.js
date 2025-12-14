// Q1.Return an array of all the object's **keys**.
// Expected Output:['a', 'b', 'c']

arr1 = { 'a': 1, 'b': 2, 'c': 3 }
const output1 = Object.keys(arr1)
console.log(output1)

// Q2.Return an array of all the object's **values**.
// Expected Output:[1, 2, 3]

arr2 = { 'a': 1, 'b': 2, 'c': 3 }
const output2 = Object.values(arr2)
console.log(output2)

// Q3.Return a new object where the keys and values are swapped.
// Expected Output:{'1': 'a', '2': 'b', '3': 'c'}

arr3 = { 'a': 1, 'b': 2, 'c': 3 }
const output3 = Object.entries(arr3).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
}, {})
console.log(output3)

// Q4.Merge the two objects into a single new object. 
// If a key exists in both, the value from the second object should overwrite the first.
// Expected Output:{'a': 5, 'b': 2, 'c': 10, 'd': 4}

arr4 = { 'a': 1, 'b': 2, 'c': 3 }
arr5 = { 'c': 10, 'd': 4, 'a': 5 }
const arr6 = Object.entries(arr4).concat(Object.entries(arr5))
console.log(arr6)

// Q5.Check if the object is **empty** (has no enumerable properties).
// Expected Output:true

arr7 = {}
console.log(keys = (Object.keys(arr7) === 0))
console.log(arr7.length === 0) // not sure it should provide to true as output 