// Q1.Given an array of user records, some of which are duplicates (same `id`), 
// create a single object where the key is the user `id`, 
// ensuring the final value for the user is the most recent record (assuming the last one in the array is the most recent).
// Expected Output = {1: {id: 1, status: 'Inactive'}, 2: {id: 2, status: 'Active'}}

records = [
    { id: 1, status: 'Active' },
    { id: 2, status: 'Active' },
    { id: 1, status: 'Inactive' }
]
const dataByUnque = records.reduce((acc, x) => {
    if (x.id === x.id) {
        acc[x.id] = x
    }
    else acc[x.id] = x;
    return acc
}, {})
console.log(dataByUnque)

// Q2.Given a data structure mapping employee IDs to an array of skills, 
// find all employees who possess only one unique skill 
// (i.e., their skill array length is 1)
// Expected Output:[102, 104]

const skillsMap = {
    101: ['JS', 'React'],
    102: ['Python'],
    103: ['CSS', 'HTML'],
    104: ['SQL']
}
const mappingEmployee = Object.entries(skillsMap).reduce((acc, x, id) => {
    if (x.length < 1)
        acc[id] = x
    return acc
}, [])
console.log(mappingEmployee)

// Q3.Given an array of data points, transform it into a "pivoted" object where a key (`year`) maps to another object that groups data by a second key (`quarter`).
// Expected Output:{2023: {Q1: 100, Q2: 120}, 2024: {Q1: 150}}
const data = [
    { year: 2023, q: 'Q1', value: 100 },
    { year: 2024, q: 'Q1', value: 150 },
    { year: 2023, q: 'Q2', value: 120 }
]
// * **Hint:** Use `reduce()`. The accumulator will be the outer object. For each item, dynamically create the `year` key, and then dynamically create the `quarter` key inside it.


// Q4.Given an array of monthly sales figures, calculate the running (cumulative) total, returning a new array of objects.
// Expected Output:[{month: 'Jan', amount: 100, total: 100}, {month: 'Feb', amount: 50, total: 150}, {month: 'Mar', amount: 200, total: 350}]

const sales = [
    { month: 'Jan', amount: 100 },
    { month: 'Feb', amount: 50 },
    { month: 'Mar', amount: 200 }
]
// * **Hint:** Use `reduce()` with an initial value of an empty array (`[]`). Keep track of the running total *outside* the array being built in the accumulator. In the reducer, push a *new object* with the cumulative total.


// Q5: Given an array of user objects and an object of filters, return only the users that match ALL filters.
// Expected Output:[{name: 'A', dept: 'IT', status: 'Active'}]
const users = [
    { name: 'A', dept: 'IT', status: 'Active' },
    { name: 'B', dept: 'HR', status: 'Active' },
    { name: 'C', dept: 'IT', status: 'Inactive' }
]
const filters = { dept: 'IT', status: 'Active' }
// * **Hint:** Use `filter()` on the `users` array. Inside the filter callback, use `Object.entries()` on the `filters` object to check if *every* `[key, value]` pair matches the user object's corresponding property.
