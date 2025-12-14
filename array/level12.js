// Q1.Return a new array containing the **square** of only the **even** numbers.
// Expected Output:[4, 16, 36, 64]

arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const newArry = arr1.filter(x => {
    if (x % 2 === 0)
        return x
}).map(x => x ** 2)
console.log(newArry)

//Q2.Flatten this array of depth 2 into a single array.
//Expected Output:[1, 2, 3, 4, 5, 6]

arr2 = [[1, 2], [3, 4, 5], [6]]
const flattenArry = arr2.flat(1)
console.log(flattenArry)

// Q3.Return a new array containing the strings that are **longer than 5 characters**, converted to **uppercase**.
// Expected Output:['BANANA', 'GRAPEFRUIT']

arr3 = ['apple', 'banana', 'kiwi', 'grapefruit', 'cat']
const filteredArry = arr3.filter(x => {
    if (x.length > 5)
        return x
}).map(x => x.toUpperCase())
console.log(filteredArry)

// Q4.Use the `reduce()` method to find the **sum** of all numbers.
// Expected Output:15

arr4 = [1, 2, 3, 4, 5]
const sumOfAll = arr4.reduce((acc, x) => {
    acc += x
    return acc
}, 0)
console.log(sumOfAll)

// Q5.Use `reduce()` to count the frequency of each element, returning an object.
// Expected Output:{'apple': 2, 'banana': 1, 'orange': 3}

arr5 = ['apple', 'banana', 'orange', 'apple', 'orange', 'orange']
const countAll = arr5.reduce((acc, x) => {
    acc[x] = (acc[x] || 0) + 1
    return acc
}, [])
console.log(countAll)