// ### 4. Sorting and Searching

// **Q11: Sort Objects by Property**
 arryObj1 = [{name: 'A', age: 20}, {name: 'B', age: 25}, {name: 'C', age: 30}]
// Sort the array based on the `age` property in **descending** order.
// * **Hint:** Use the `sort()` method with a comparison function: `(a, b) => b.age - a.age`.
// * **Expected Output:** `[{name: 'C', age: 30}, {name: 'B', age: 25}, {name: 'A', age: 20}]`

const output1 = arryObj1.sort((a,b)=>b.age - a.age)
console.log(output1)

// **Q12: Find First Match**
arrObj2 = [{name: 'Alice', score: 99}, {name: 'Bob', score: 95}, {name: 'Charlie', score: 90}]
// Find the **first** object where the `score` is greater than 90.
// * **Hint:** Use the `find()` method.
// * **Expected Output:** `{name: 'Bob', score: 95}`

const output2 = arrObj2.filter(x=>x.score>90)
console.log(output2)

// **Q13: Check All Elements**
arrObj3 = [12, 15, 18, 9, 20]
// Check if **every** element in the array is greater than 10.
// * **Hint:** Use the `every()` method.
// * **Expected Output:** `false`
const output3 = arrObj3.map(x=>x>10)
console.log(output3)

// **Q14: Check Any Element**
arr4=['apple', 'grape', 'pear', 'plum']
// Check if **at least one** element in the array starts with the letter 'P'.
// * **Hint:** Use the `some()` method along with the `startsWith()` string method.
// * **Expected Output:** `true`

//some() methods stop iteration once the match have found e.g there is some p to start 
//unlike some() every() methods iterates || requires all data set to pass test e.g all element start with p 
const output4 = arr4.some(x=>x.startsWith('p'))
console.log(output4)

// **Q15: Remove Duplicates**
arr5 = [1, 2, 3, 2, 4, 1, 3]
// Return a new array containing only the unique numbers.
// * **Hint:** Use the `Set` object to automatically filter duplicates, then convert it back to an array using the spread operator (`...`).
// * **Expected Output:** `[1, 2, 3, 4]`

const output5 = [...new Set(arr5)]
console.log(output5)
console.log(new Set(arr5))
// console.log(new Set(Add(1)))
// console.log(new Set(arr5))
