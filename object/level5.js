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
// hint using forEach

let sum = 0
cartItems.forEach((item) => {
    //NOTE: each item is an object, hence to access price use item.price
    //first item is { product: "Phone", quantity: 2, price: 500 }
    //second item in loop is { product: "Laptop", quantity: 1, price: 1000 }
    sum = sum + (item.price*item.quantity);
});
console.log(sum);