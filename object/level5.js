// ARRAY AND OBJECTS

const cartItems = [
  {
    product: "Phone",
    quantity: 2,
    price: 500,
  },
  {
    product: "Laptop",
    quantity: 1,
    price: 1000,
  },
];

// Q1. calculate the total price of all items in the cart
// hint using forEach
let totalPrice = 0;

cartItems.forEach((item) => {
  totalPrice = totalPrice + item.price;
  //   console.log(item.price);
});
console.log(totalPrice);

//use reduce for same problem
const totalPrice1 = cartItems.reduce((acc, cur) => {
  return (acc = acc + cur.price);
}, 0);
console.log(totalPrice1);
