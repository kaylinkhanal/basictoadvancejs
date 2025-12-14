//Q1.Create an object that groups the user objects by their `city` property.
// Expected Output:{'NY': [{name: 'A', city: 'NY'}], [{name: 'C', city: 'NY'}],'LA': [{name: 'B', city: 'LA'}]}

arrObj1 = [
    { name: 'A', city: 'NY' },
    { name: 'B', city: 'LA' },
    { name: 'C', city: 'NY' }
]
const output1 = arrObj1.reduce((acc, x) => {
    acc[x.city] = x
    return acc
}, [])
console.log(output1)

//Q2.A simple shallow copy (e.g., `...`) will still share references for nested objects.
//  Use JSON.parse(JSON.stringify(original)) for a common, simple deep copy solution.
//  Expected Output:A new, independent object: `deepCopy.b.c` can be changed without affecting `original.b.c`.

const original = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}


// Q3.Access the `city` property. 
// Write the code so it does **not** throw an error if `data` or `address` is missing/null.
// Expected Output: 'NY' (or `undefined` if any intermediate property was missing)

const user = {
    id: 1,
    data: {
        address: {
            street: '123 Main St',
            city: 'NY'
        }
    }
}
const output2 = user.data?.address?.city
console.log(output2)

// Q4. Extract the values of the `type` key and return them as a comma-separated string.
// Expected Output:'apple,banana,orange'

arrObj2 = [
    { type: 'apple' },
    { type: 'banana' },
    { type: 'orange' }
]
const output3 = arrObj2.map(x => x.type).join(',')
console.log(output3)

// Q5.Destructure the `name` and `age` properties, and assign all the **remaining** properties (`city`, `job`) to a new object named `details`.
// Expected Output: A successful destructuring where `name` is 'Alice', `age` is 30, and `details` is `{ city: 'NY', job: 'Engineer' }`.

const person = {
    name: 'Alice',
    age: 30,
    city: 'NY',
    job: 'Engineer'
}
// Destructure `name` and `age` properties.
// The rest operator `...details` collects all other properties 
// ('city' and 'job') into a new object named `details`.
const { name, age, ...details } = person;

console.log(name);    // Expected: 'Alice'
console.log(age);     // Expected: 30
console.log(details); // Expected: { city: 'NY', job: 'Engineer' }