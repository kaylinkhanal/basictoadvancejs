// Q1.Given two arrays, one of keys and one of values, combine them into a single object. (Assume key array has unique strings).
// Expected Output:{name: 'Bob', age: 30, city: 'London'}

const keys = ['name', 'age', 'city']
const values = ['Bob', 30, 'London']
// * **Hint:** Use `reduce()` on the `keys` array. Use the index of the current key to retrieve the corresponding value from the `values` array.


// Q2.Given an array of all items and a small array of required item IDs, filter the first array to only include items whose ID is present in the second array.
// Expected Output:[{id: 2, data: 'B'}, {id: 3, data: 'C'}]

const allItems = [
    { id: 1, data: 'A' },
    { id: 2, data: 'B' },
    { id: 3, data: 'C' }
]
const requiredIds = [2, 3]
// * **Hint:** Convert `requiredIds` into a `Set` for $O(1)$ lookup time. Then, use `filter()` on `allItems` and check `Set.has(item.id)`.

// Q3.Given a current state object and a patch object. Merge them, but if a property is an array in the patch, completely replace the array in the current state instead of merging its contents.
// Expected Output:{user: 'Alice', settings: {theme: 'Dark', fontSize: 12}, logs: [3, 4]}

const currentState = {
    user: 'Alice',
    settings: { theme: 'Dark' },
    logs: [1, 2]
}
const patch = {
    settings: { fontSize: 12 },
    logs: [3, 4]
}
// * **Hint:** Use the spread operator (`...`) to combine the top level. The arrays will naturally be overwritten by the spread.


// Q4.Given a nested object representing a file system structure, find the value associated with the property named `deepest_value`.
// Expected Output:'FOUND'

const tree = {
    folderA: {
        fileX: 'data',
        folderB: {
            fileY: 'more data',
            deepest_value: 'FOUND'
        }
    }
}
// * **Hint:** Implement a recursive search function. Check if the current object contains the key. If not, iterate over the object's values and recursively call the function if the value is another object.


// Q5. Given an array of geometric objects, calculate a new property (e.g., `area` for circle objects) and then sort the array based on this calculated property in ascending order.
// Expected Output:[{type: 'circle', radius: 2, area: 12.57...}, {type: 'circle', radius: 5, area: 78.54...}]
const shapes = [
    { type: 'circle', radius: 5 },
    { type: 'circle', radius: 2 }
]
// * **Hint:** Use `map()` first to create a new array where each object is enhanced with the calculated area ($\pi r^2$). Then, use `sort()` on the new array based on the `area` property.
