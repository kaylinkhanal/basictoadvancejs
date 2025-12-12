
const products = [
  { id: 1, name: "iPhone 15", price: 799, category: "mobile", inStock: true, rating: 4.5 },
  { id: 2, name: "MacBook Pro", price: 2399, category: "laptop", inStock: false, rating: 4.8 },
  { id: 3, name: "AirPods Pro", price: 249, category: "audio", inStock: true, rating: 4.6 },
  { id: 4, name: "iPhone 14", price: 699, category: "mobile", inStock: true, rating: 4.3 },
  { id: 5, name: "Dell XPS", price: 1299, category: "laptop", inStock: true, rating: 4.7 },
  { id: 6, name: "Sony Headphones", price: 399, category: "audio", inStock: false, rating: 4.4 }
];

// Q1. Get array of names of all products that are in stock and cost less than 1000
const affordableInStock = products.filter((item) => {
if(item.inStock === true && item.price < 1000){
    return item.name;
}
});
console.log(affordableInStock);

// Q2. Calculate the average rating of all laptops
const laptop = products.filter((item) => item.category === "laptop");
const totalRating = products.reduce((sum, item) => sum + item.rating, 0);
const average = totalRating/laptop.length;
console.log(average);
