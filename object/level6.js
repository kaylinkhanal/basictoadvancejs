



const cartItems = [
  { product: "Phone", quantity: 2, price: 500 },
  { product: "Laptop", quantity: 1, price: 1000 },
  { product: "Headphones", quantity: 3, price: 200 },
  { product: "Charger", quantity: 0, price: 100 }
];






// 1. Calculate the **total cart value**, but **exclude products whose quantity is 0**.

const totalValue = cartItems.reduce((total, item) => {
    if (item.quantity > 0) {
        total += item.price * item.quantity
    }
    return total;
}, 0);

console.log(totalValue)


// 2. Create a **new array of objects** that contains only the products whose
//    **total price (price × quantity) is greater than 200**.
const availableitem=cartItems.filter((x)=>x.price*x.quantity>600)
console.log(availableitem)





// 3. Convert the `cartItems` array into an **object**, where:

//    * key → product name
//    * value → total price of that product









// 4. Find the **product object** with the **highest total price**
//    (price × quantity).








// 5. Create a **new array** where each object includes an additional property:

//    ```js
//    totalPrice
//    ```

//    without mutating the original `cartItems` array.

