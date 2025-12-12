// ### 5. Advanced/Mixed Concepts

// **Q16: Grouping by Property**
arrObj1 = [{name: 'A', city: 'NY'}, {name: 'B', city: 'LA'}, {name: 'C', city: 'NY'}]

// Create an object that groups the user objects by their `city` property.
// * **Hint:** Use the `reduce()` method. The accumulator will be the grouping object where keys are the cities and values are arrays of users.
// * **Expected Output:** `{'NY': [{name: 'A', city: 'NY'}, {name: 'C', city: 'NY'}], 'LA': [{name: 'B', city: 'LA'}]}`

const output1 = arrObj1.reduce((acc,x)=>{
    acc[x.city] = x
    return acc
},[])
console.log(output1)

// **Q17: Deep Copying**
// Given a nested object: `const original = { a: 1, b: { c: 2, d: 3 } }`
// Create a **deep copy** of this object.
// * **Hint:** A simple shallow copy (e.g., `...`) will still share references for nested objects. Use **`JSON.parse(JSON.stringify(original))`** for a common, simple deep copy solution.
// * **Expected Output:** A new, independent object: `deepCopy.b.c` can be changed without affecting `original.b.c`.

// **Q18: Optional Chaining for Nested Data**
const user = { id: 1, data: { address: { street: '123 Main St', city: 'NY' } } }
// Access the `city` property. Write the code so it does **not** throw an error if `data` or `address` is missing/null.
// * **Hint:** Use the **Optional Chaining** operator (`?.`).
// * **Expected Output:** `'NY'` (or `undefined` if any intermediate property was missing)
const output2 = user.data?.address?.city
console.log(output2)

// **Q19: Extract and Join**
arrObj2 = [{type: 'apple'}, {type: 'banana'}, {type: 'orange'}]
// Extract the values of the `type` key and return them as a comma-separated string.
// * **Hint:** Use `map()` to extract the `type` values, then use the `join(',')` method on the resulting array.
// * **Expected Output:** `'apple,banana,orange'`
const output3 = arrObj2.map(x=>x.type).join(',')
console.log(output3)

// **Q20: Object Destructuring with Rest**
const person = { name: 'Alice', age: 30, city: 'NY', job: 'Engineer' }
// Destructure the `name` and `age` properties, and assign all the **remaining** properties (`city`, `job`) to a new object named `details`.
// * **Hint:** Use object destructuring and the **rest operator** (`...`) for the remaining properties.
// * **Expected Output:** A successful destructuring where `name` is 'Alice', `age` is 30, and `details` is `{ city: 'NY', job: 'Engineer' }`.

// const [name,age]=[Object.values(person.name),Object.values(person.age)]
// console.log(name)
// console.log(age)
// const details = person.reduce((acc,x)=>{
// acc[x.city]=[x.city]
// acc[x.job]=[x.job]
// return acc
// },{})
// console.log(details)

// Destructure `name` and `age` properties.
// The rest operator `...details` collects all other properties 
// ('city' and 'job') into a new object named `details`.
const { name, age, ...details } = person;

// --- Verification ---
console.log(name);    // Expected: 'Alice'
console.log(age);     // Expected: 30
console.log(details); // Expected: { city: 'NY', job: 'Engineer' }