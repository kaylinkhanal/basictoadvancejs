// Q1.Given a `cartItems` array (with `id` and `quantity`) and a separate `products` object (key is `id`, value is `{price, name}`). 
// Calculate the total cost of the cart.
// Expected Output:`220` (2 * 50 + 1 * 120)

const cartItems = [
  { id: 'P001', qty: 2 },
  { id: 'P003', qty: 1 }
]
const products = {
  P001: { price: 50 },
  P002: { price: 10 },
  P003: { price: 120 }
}
const output1 = cartItems.reduce((acc, item) => {
  const product = products[item.id];   // look up product by id
  return acc + (product.price * item.qty)
}, 0);
console.log(output1)

//Q2.Given a flat array of product objects, transform it into an object where products are grouped under their respective `category` keys.
//Expected Output:{Tech: [{name: 'A', ...}, {name: 'C', ...}], Food: [{name: 'B', ...}]}

obj1 = [
  { name: 'A', category: 'Tech' },
  { name: 'B', category: 'Food' },
  { name: 'C', category: 'Tech' }
]
const output2 = obj1.reduce((acc, x) => {
  if (x.category === '') x.category = []
  acc[x.category] = x
  return acc
}, {})
console.log(output2)

// Q3.Using the grouped structure from Q2, 
// determine which category has the highest total number of products.
// Expected Output:'Tech'

const grouped = obj1.reduce((acc, x) => {
  if (!acc[x.category]) {
    acc[x.category] = [];
  }
  acc[x.category].push(x);
  return acc;
}, {});
const entries = Object.entries(grouped);
const bestsellerCategory = entries.reduce((max, curr) => {
  return curr[1].length > max[1].length ? curr : max;
})[0];
console.log(bestsellerCategory); // Expected Output: 'Tech'


//Q4.Given a complex product configuration object, 
// update a specific setting deep inside a nested array of options without mutating the original object.
// Expected Output:A new object identical to `config` but with `Quality` value changed to `'Ultra'`.

const config = {
  color: 'Red',
  settings: [
    { type: 'Size', value: 'L' },
    { type: 'Quality', value: 'High' }
  ]
}

const output3 = { ...config }
const [...output4] = output3.settings.map((x) => {
  (x.type === 'Quality') ? (x.value = 'Ultra') : (x.value = x.value)
  return x
})
console.log(output3)

// Q5.Calculate Average Salary by Department**
// calculate the average salary for each department,
// Ignoring employees with salaries under 30000. 
// Expected Output:{HR: 50000, IT: 80000}

employees = [
  { dept: 'HR', salary: 60000 },
  { dept: 'IT', salary: 80000 },
  { dept: 'HR', salary: 40000 },
  { dept: 'IT', salary: 20000 }
]
let count = 0
let count2 = 0
const avgSalary = employees.filter(x => x.salary > 30000).reduce((acc, x) => {
  //  acc[x.dept] = (acc[x.dept] || 0) + x.salary
  if (x.dept === 'HR') {
    acc[x.dept] = (acc[x.dept] || 0) + x.salary
    count++
  }
  else (acc[x.dept] = (acc[x.dept] || 0) + x.salary, count2++);

  return acc

}, []).map(x => x.index)
console.log(avgSalary)