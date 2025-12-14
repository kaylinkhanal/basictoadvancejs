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
let total = 0;
    cartItems.forEach((item) => {
    total = total + ( item.price * item.quantity);
    
});
console.log(total);



// Q2. create an array of product names in the cart
const productNames = [];
cartItems.forEach((item) => {
    productNames.push(item.product);
});
console.log(productNames);


// Q3. find the most expensive item in the cart
const expensive = cartItems.reduce((max, item) => {
const total = item.price * item.quantity;
return max > item ? max : item;
});
console.log(expensive);


// Q4. create an array of items with quantity greater than 1
const greaterItem = cartItems.filter((item) => {
    return item.quantity > 1;
});
console.log(greaterItem);


// Q5. calculate the average price of items in the cart
const totalPrice = cartItems.reduce((sum, item) =>  sum + item.price * item.quantity, 0);
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

const average = totalPrice/totalQuantity;


console.log(average);


// Q6. create an array of products with price less than 800
const lowerPrice = cartItems.filter((item) => {
 if(item.price < 800){
     return item;
 }
});
console.log(lowerPrice);


// Q7. find the total quantity of all items in the cart
const totalQuan = cartItems.reduce((sum, item) => {
 return sum +  item.quantity;
}, 0);
console.log(totalQuan);






