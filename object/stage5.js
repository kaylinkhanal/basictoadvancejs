// ### 1. E-Commerce and Inventory Management

// **Q1: Calculate Cart Total with Lookups**
// Given a `cartItems` array (with `id` and `quantity`) and a separate `products` object (key is `id`, value is `{price, name}`). Calculate the total cost of the cart.
const  cartItems = [{id: 'P001', qty: 2}, {id: 'P003', qty: 1}]
const  products = {P001: {price: 50}, P002: {price: 10}, P003: {price: 120}}
// // * **Hint:** Use `reduce()` on `cartItems`. In the accumulator, look up the price from the `products` object using the item's `id`.
// // * **Expected Output:** `220` (2 * 50 + 1 * 120)
// const output1 = cartItems.reduce((acc,x)=>{
//    if ( x.id = Object.values.(products)) return acc=products.price
    
// },{})
// console.log(cartItems)
// console.log(products)
const output1 = cartItems.reduce((acc, item) => {
  const product = products[item.id];   // look up product by id
  return acc + (product.price * item.qty)},0);
  console.log(output1)

// **Q2: Group Products by Category**
// Given a flat array of product objects, transform it into an object where products are grouped under their respective `category` keys.

// * **Data:**
//   * `products`: `[{name: 'A', category: 'Tech'}, {name: 'B', category: 'Food'}, {name: 'C', category: 'Tech'}]`
// * **Hint:** Use `reduce()` to build the grouping object. For each product, check if the `category` key exists; if not, initialize it with an empty array.
// * **Expected Output:** `{Tech: [{name: 'A', ...}, {name: 'C', ...}], Food: [{name: 'B', ...}]}`

// **Q3: Find the Bestseller Category**
// Using the grouped structure from Q2, determine which category has the highest total number of products.

// * **Data:** (Use the output structure from Q2)
// * **Hint:** Use `Object.entries()` on the grouped object to get an array of `[category, products]` pairs. Then, use `reduce()` to find the category with the max `products.length`.
// * **Expected Output:** `'Tech'`

// **Q4: Deep Update Nested Configuration**
// Given a complex product configuration object, update a specific setting deep inside a nested array of options without mutating the original object.

// * **Data:**
//   * `config`: `{color: 'Red', settings: [{type: 'Size', value: 'L'}, {type: 'Quality', value: 'High'}]}`
//   * *Update needed:* Change `Quality`'s `value` to `'Ultra'`.
// * **Hint:** Use the spread operator (`...`) to shallow copy the top level. Use `map()` on the `settings` array to create a new array, checking the `type` and spreading/overwriting the value for the match.
// * **Expected Output:** A new object identical to `config` but with `Quality` value changed to `'Ultra'`.

// ### 2. HR and User Data Analysis

// **Q5: Calculate Average Salary by Department**
// Given an array of employee objects, calculate the average salary for each department, ignoring employees with salaries under 30000.

// * **Data:**
//   * `employees`: `[{dept: 'HR', salary: 60000}, {dept: 'IT', salary: 80000}, {dept: 'HR', salary: 40000}, {dept: 'IT', salary: 20000}]`
// * **Hint:** Use `filter()` first to remove low salaries. Then, use `reduce()` to group and sum the salaries (`{dept: {total: 0, count: 0}}`). Finally, use `Object.entries()` and `map()` to calculate the average for each department.
// * **Expected Output:** `{HR: 50000, IT: 80000}`

// **Q6: Normalize Data by Unique ID (Deduplication)**
// Given an array of user records, some of which are duplicates (same `id`), create a single object where the key is the user `id`, ensuring the final value for the user is the most recent record (assuming the last one in the array is the most recent).

// * **Data:**
//   * `records`: `[{id: 1, status: 'Active'}, {id: 2, status: 'Active'}, {id: 1, status: 'Inactive'}]`
// * **Hint:** Use `reduce()`. Since the objects are processed in order, subsequent assignments to the same key will overwrite previous ones, naturally handling deduplication and recency.
// * **Expected Output:** `{1: {id: 1, status: 'Inactive'}, 2: {id: 2, status: 'Active'}}`

// **Q7: Find Employees with Unique Skills**
// Given a data structure mapping employee IDs to an array of skills, find all employees who possess only one unique skill (i.e., their skill array length is 1).

// * **Data:**
//   * `skillsMap`: `{101: ['JS', 'React'], 102: ['Python'], 103: ['CSS', 'HTML'], 104: ['SQL']}`
// * **Hint:** Use `Object.entries()` to get the pairs, and then `filter()` on the skill array length. Finally, use `map()` to return the employee IDs.
// * **Expected Output:** `[102, 104]`

// ### 3. Analytics and Reporting

// **Q8: Pivot Data Table**
// Given an array of data points, transform it into a "pivoted" object where a key (`year`) maps to another object that groups data by a second key (`quarter`).

// * **Data:**
//   * `data`: `[{year: 2023, q: 'Q1', value: 100}, {year: 2024, q: 'Q1', value: 150}, {year: 2023, q: 'Q2', value: 120}]`
// * **Hint:** Use `reduce()`. The accumulator will be the outer object. For each item, dynamically create the `year` key, and then dynamically create the `quarter` key inside it.
// * **Expected Output:** `{2023: {Q1: 100, Q2: 120}, 2024: {Q1: 150}}`

// **Q9: Cumulative Sum by Property**
// Given an array of monthly sales figures, calculate the running (cumulative) total, returning a new array of objects.

// * **Data:**
//   * `sales`: `[{month: 'Jan', amount: 100}, {month: 'Feb', amount: 50}, {month: 'Mar', amount: 200}]`
// * **Hint:** Use `reduce()` with an initial value of an empty array (`[]`). Keep track of the running total *outside* the array being built in the accumulator. In the reducer, push a *new object* with the cumulative total.
// * **Expected Output:** `[{month: 'Jan', amount: 100, total: 100}, {month: 'Feb', amount: 50, total: 150}, {month: 'Mar', amount: 200, total: 350}]`

// **Q10: Filter by Multiple Criteria (Dynamic Keys)**
// Given an array of user objects and an object of filters, return only the users that match ALL filters.

// * **Data:**
//   * `users`: `[{name: 'A', dept: 'IT', status: 'Active'}, {name: 'B', dept: 'HR', status: 'Active'}, {name: 'C', dept: 'IT', status: 'Inactive'}]`
//   * `filters`: `{dept: 'IT', status: 'Active'}`
// * **Hint:** Use `filter()` on the `users` array. Inside the filter callback, use `Object.entries()` on the `filters` object to check if *every* `[key, value]` pair matches the user object's corresponding property.
// * **Expected Output:** `[{name: 'A', dept: 'IT', status: 'Active'}]`

// ### 4. Nested Data and Deep Operations

// **Q11: Sum Nested Array Values**
// Given an object where values are arrays of numbers, find the total sum of *all* numbers across *all* arrays.

// * **Data:**
//   * `dataObj`: `{groupA: [1, 2], groupB: [3, 4, 5], groupC: [6]}`
// * **Hint:** Use `Object.values()` to get the array of arrays. Then use `flat()` (or spread) followed by `reduce()` for the final sum.
// * **Expected Output:** `21` (1+2+3+4+5+6)

// **Q12: Deep Property Transformation**
// Given an array of objects where a certain property (`tags`) is a comma-separated string, transform that property into an array of strings.

// * **Data:**
//   * `items`: `[{id: 1, tags: 'react,js,frontend'}, {id: 2, tags: 'css,html'}]`
// * **Hint:** Use `map()` to iterate. Inside `map()`, use the spread operator (`...`) to copy the object and overwrite the `tags` property using the `split(',')` string method.
// * **Expected Output:** `[{id: 1, tags: ['react', 'js', 'frontend']}, {id: 2, tags: ['css', 'html']}]`

// **Q13: Check Deep Array Integrity**
// Given an array of user profiles, ensure that **every** profile has a non-empty array of permissions (`permissions.length > 0`).

// * **Data:**
//   * `profiles`: `[{id: 1, permissions: ['read']}, {id: 2, permissions: []}, {id: 3, permissions: ['write']}]`
// * **Hint:** Use the `every()` array method. The check inside the callback must be `item.permissions && item.permissions.length > 0`.
// * **Expected Output:** `false`

// **Q14: Deep Key Renaming**
// Given a complex object, recursively rename a specific nested key (e.g., change every instance of `old_id` to `new_id`).

// * **Data:**
//   * `data`: `{user: {old_id: 101, config: [{old_id: 50}]}}`
// * **Hint:** This requires a recursive function. Check if the current value is an object or array. If it's an object, check for the key, rename it, and then recursively call the function on the value.
// * **Expected Output:** `{user: {new_id: 101, config: [{new_id: 50}]}}`

// ### 5. Utilities and Advanced Manipulation

// **Q15: Partition Array by Condition**
// Given an array of objects, split it into two separate arrays: one containing objects that satisfy a condition (`isVip: true`), and the other containing the rest.

// * **Data:**
//   * `users`: `[{name: 'A', isVip: true}, {name: 'B', isVip: false}, {name: 'C', isVip: true}]`
// * **Hint:** Use `reduce()`. Initialize the accumulator as an array of two empty arrays `[[], []]`. Check the condition and push the item to the correct inner array (index 0 or 1).
// * **Expected Output:** `[ [{name: 'A', isVip: true}, {name: 'C', isVip: true}], [{name: 'B', isVip: false}] ]`

// **Q16: Create Object from Key-Value Arrays**
// Given two arrays, one of keys and one of values, combine them into a single object. (Assume key array has unique strings).

// * **Data:**
//   * `keys`: `['name', 'age', 'city']`
//   * `values`: `['Bob', 30, 'London']`
// * **Hint:** Use `reduce()` on the `keys` array. Use the index of the current key to retrieve the corresponding value from the `values` array.
// * **Expected Output:** `{name: 'Bob', age: 30, city: 'London'}`

// **Q17: Filter by Existence in Another Array (Set Intersection)**
// Given an array of all items and a small array of required item IDs, filter the first array to only include items whose ID is present in the second array.

// * **Data:**
//   * `allItems`: `[{id: 1, data: 'A'}, {id: 2, data: 'B'}, {id: 3, data: 'C'}]`
//   * `requiredIds`: `[2, 3]`
// * **Hint:** Convert `requiredIds` into a `Set` for $O(1)$ lookup time. Then, use `filter()` on `allItems` and check `Set.has(item.id)`.
// * **Expected Output:** `[{id: 2, data: 'B'}, {id: 3, data: 'C'}]`

// ### 6. Simulation and State Management

// **Q18: State Merging with Array Overwrite**
// Given a current state object and a patch object. Merge them, but if a property is an array in the patch, completely replace the array in the current state instead of merging its contents.

// * **Data:**
//   * `currentState`: `{user: 'Alice', settings: {theme: 'Dark'}, logs: [1, 2]}`
//   * `patch`: `{settings: {fontSize: 12}, logs: [3, 4]}`
// * **Hint:** Use the spread operator (`...`) to combine the top level. The arrays will naturally be overwritten by the spread.
// * **Expected Output:** `{user: 'Alice', settings: {theme: 'Dark', fontSize: 12}, logs: [3, 4]}`

// **Q19: Find Deepest Property Value**
// Given a nested object representing a file system structure, find the value associated with the property named `deepest_value`.

// * **Data:**
//   * `tree`: `{folderA: {fileX: 'data', folderB: {fileY: 'more data', deepest_value: 'FOUND'}}}`
// * **Hint:** Implement a recursive search function. Check if the current object contains the key. If not, iterate over the object's values and recursively call the function if the value is another object.
// * **Expected Output:** `'FOUND'`

// **Q20: Sort by Calculated Property**
// Given an array of geometric objects, calculate a new property (e.g., `area` for circle objects) and then sort the array based on this calculated property in ascending order.

// * **Data:**
//   * `shapes`: `[{type: 'circle', radius: 5}, {type: 'circle', radius: 2}]`
// * **Hint:** Use `map()` first to create a new array where each object is enhanced with the calculated area ($\pi r^2$). Then, use `sort()` on the new array based on the `area` property.
// * **Expected Output:** `[{type: 'circle', radius: 2, area: 12.57...}, {type: 'circle', radius: 5, area: 78.54...}]`