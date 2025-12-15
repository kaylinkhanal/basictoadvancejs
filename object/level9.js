const products = [
  {
    id: 101,
    name: "Samsung Galaxy S23",
    price: 899,
    category: "mobile",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 102,
    name: "HP Pavilion",
    price: 1199,
    category: "laptop",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 103,
    name: "Boat Earbuds",
    price: 79,
    category: "audio",
    inStock: false,
    rating: 4.1,
  },
  {
    id: 104,
    name: "iPad Air",
    price: 599,
    category: "tablet",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 105,
    name: "Lenovo ThinkPad",
    price: 1399,
    category: "laptop",
    inStock: false,
    rating: 4.8,
  },
  {
    id: 106,
    name: "JBL Speaker",
    price: 199,
    category: "audio",
    inStock: true,
    rating: 4.3,
  },
];

// LEVEL-1 (filter + map)
//---------------------------------------------------
// Q1. Get names of all in-stock products that cost less than 1000
// expected output:
// ["Samsung Galaxy S23", "iPad Air", "JBL Speaker"]
//---------------------------------------------------

// Q2. Get price list of all laptop products
// expected output:
// [1199, 1399]
//---------------------------------------------------

// LEVEL-2 (filter + reduce)
// Q3. Calculate total price of all audio products that are in stock
// expected output:
// 199
//---------------------------------------------------

// Q4. Calculate average rating of out-of-stock products
// expected output:
// (4.1 + 4.8) / 2 = 4.45
//---------------------------------------------------

// 🔹 LEVEL-3 (map + reduce)
// Q5. Create a new array of { name, discountedPrice }

// Discount rule:

// price > 1000 → 15% discount

// otherwise → no discount

// expected output:
// [
//   { name: "Samsung Galaxy S23", discountedPrice: 899 },
//   { name: "HP Pavilion", discountedPrice: 1019.15 },
//   ...
// ]
//---------------------------------------------------

// Q6. Calculate total inventory value
// inventory value = sum of all product prices
//---------------------------------------------------

// 🔹 LEVEL-4 (filter + map + reduce)
// Q7. Calculate total value of in-stock electronics
// expected output:
// 899 + 1199 + 599 + 199 = 2896
//---------------------------------------------------

// Q8. Get comma-separated string of all audio product names
// expected output:
// "Boat Earbuds, JBL Speaker"
//---------------------------------------------------

// 🔥 LEVEL-5 (Interview / Logic)
// Q9. Find the highest-rated product that is in stock
// expected output:
// { id: 104, name: "iPad Air", ... }
//---------------------------------------------------

// Q10. Count products by category
// expected output:
// {
//   mobile: 1,
//   laptop: 2,
//   audio: 2,
//   tablet: 1
// }
//---------------------------------------------------

// 🔥 LEVEL-6 (Very Real-World)
// Q11. Check if all laptops are in stock
// expected output:
// false
//---------------------------------------------------

// Q12. Find the first product costing less than 100
// expected output:
// Boat Earbuds
