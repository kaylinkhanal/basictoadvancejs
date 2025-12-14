// Q1.Given an object where values are arrays of numbers, find the total sum of *all* numbers across *all* arrays.
// Expected Output:`21` (1+2+3+4+5+6)

const dataObj = {
    groupA: [1, 2],
    groupB: [3, 4, 5],
    groupC: [6]
}
// * **Hint:** Use `Object.values()` to get the array of arrays. Then use `flat()` (or spread) followed by `reduce()` for the final sum.


// Q2.Given an array of objects where a certain property (`tags`) is a comma-separated string, transform that property into an array of strings.
// Expected Output:[{id: 1, tags: ['react', 'js', 'frontend']}, {id: 2, tags: ['css', 'html']}]

const items = [
    { id: 1, tags: 'react,js,frontend' },
    { id: 2, tags: 'css,html' }
]
// * **Hint:** Use `map()` to iterate. Inside `map()`, use the spread operator (`...`) to copy the object and overwrite the `tags` property using the `split(',')` string method.


// Q3.Given an array of user profiles, ensure that **every** profile has a non-empty array of permissions (`permissions.length > 0`).
// Expected Output:`false`

const profiles = [
    { id: 1, permissions: ['read'] },
    { id: 2, permissions: [] },
    { id: 3, permissions: ['write'] }
]
// * **Hint:** Use the `every()` array method. The check inside the callback must be `item.permissions && item.permissions.length > 0`.


// Q4.Given a complex object, recursively rename a specific nested key (e.g., change every instance of `old_id` to `new_id`).
// Expected Output:{user: {new_id: 101, config: [{new_id: 50}]}}

const data = {
    user: {
        old_id: 101,
        config: [{ old_id: 50 }]
    }
}
// * **Hint:** This requires a recursive function. Check if the current value is an object or array. If it's an object, check for the key, rename it, and then recursively call the function on the value.



// Q5.Given an array of objects, split it into two separate arrays: one containing objects that satisfy a condition (`isVip: true`), and the other containing the rest.
// Expected Output:[ [{name: 'A', isVip: true}, {name: 'C', isVip: true}], [{name: 'B', isVip: false}] ]

const users = [
    { name: 'A', isVip: true },
    { name: 'B', isVip: false },
    { name: 'C', isVip: true }
]
// * **Hint:** Use `reduce()`. Initialize the accumulator as an array of two empty arrays `[[], []]`. Check the condition and push the item to the correct inner array (index 0 or 1).


