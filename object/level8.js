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
// Calculate total price of all in-stock products
// hint: filter + reduce
// expected output: Total Price : 2896
//---------------------------------------------------
const totalPrice = products
  .filter((item) => item.inStock === true)
  .reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
console.log(`Total Price : ${totalPrice}`);

// Calculate average rating of all laptops
// hint: filter + reduce
// expected output: Average Rating : 4.6
//---------------------------------------------------
const laptops = products.filter((item) => item.category === "laptop");
const averageRating =
  laptops.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / laptops.length;
console.log(`Average Rating : ${averageRating}`);

// Find the most expensive product in the audio category
// hint: filter + reduce
// expected output: Most Expensive Audio Product : JBL Speaker
//---------------------------------------------------
const audio = products.filter((item) => item.category === "audio");
const expensiveProduct = audio.reduce((acc, cur) =>
  cur.price > acc.price ? cur : acc
);
console.log(`Most Expensive Audio Product : ${expensiveProduct.name}`);

//  Calculate total price of products with rating above 4.5
// hint: filter + reduce
// expected output: Total Price of High Rating Products : 2897
//---------------------------------------------------
const totalPrice1 = products
  .filter((item) => item.rating > 4.5)
  .reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
console.log(`Total Price of High Rating Products : ${totalPrice1}`);
