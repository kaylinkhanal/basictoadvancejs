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
    sum = sum + item.quantity*item.price
});
console.log(sum)

//Q2. Print all keys of an object

const user = {
  name: "Ram",
  age: 22,
  city: "Kathmandu"
};
for (const key of Object.keys(user)) {
  console.log(key)
}

//Q3.Print all values of an object

const marks = {
  math: 80,
  science: 75,
  english: 85
};
for(const value of Object.values(marks)){
    console.log(value)
}

//Q4.. Print key and value together

const product = {
  name: "Laptop",
  price: 90000,
  brand: "Dell"
};
for (const [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}

//Q5. Count number of properties in an object

const student = {
  id: 1,
  name: "Sita",
  grade: "A",
  age: 20
};

let count = 0;
for (const key in student) {
    
    if (Object.hasOwn(student, key)) { 
        count++;
    }
}

console.log(count);