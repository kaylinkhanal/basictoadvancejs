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

// Q1. calculate the total price of all items in the cart using forEach.

let sum = 0
cartItems.forEach((item) => {
    sum = sum + (item.price * item.quantity);
});
console.log(sum);