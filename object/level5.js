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
<<<<<<< HEAD
// hint using forEach
let totalPrice = 0;
=======
// hint using forEach, make required changes if required in below code:
>>>>>>> 3a20a94793e423ed0fe8d8ae3b962919dd657b4f

cartItems.forEach((item) => {
<<<<<<< HEAD
  totalPrice = totalPrice + item.price;
  //   console.log(item.price);
});
console.log(totalPrice);

//use reduce for same problem
const totalPrice1 = cartItems.reduce((acc, cur) => {
  return (acc = acc + cur.price);
}, 0);
console.log(totalPrice1);
=======
    //NOTE: each item is an object, hence to access price use item.price
    //first item is { product: "Phone", quantity: 2, price: 500 }
    //second item in loop is { product: "Laptop", quantity: 1, price: 1000 }
    sum = sum + item.price
});

console.log(sum)

// Q2. use reduce loop to calcualte sum of total price of all items in the cart
>>>>>>> 3a20a94793e423ed0fe8d8ae3b962919dd657b4f
