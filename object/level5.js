// ARRAY AND OBJECTS 

const cartItems= [{
    product: "Phone",
    quantity: 2,
    price: 500
}, {
    product: "Laptop",
    quantity: 1,
    price: 1000
}]

// Q1. calculate the total price of all items in the cart
// hint using forEach, make required changes if required in below code:

let sum = 0
cartItems.forEach((item) => {
    //NOTE: each item is an object, hence to access price use item.price
    //first item is { product: "Phone", quantity: 2, price: 500 }
    //second item in loop is { product: "Laptop", quantity: 1, price: 1000 }
    sum = sum + item.price
});

<<<<<<< HEAD
console.log(sum)
=======
console.log(sum)

// Q2. use reduce loop to calcualte sum of total price of all items in the cart
>>>>>>> 3a20a94793e423ed0fe8d8ae3b962919dd657b4f
