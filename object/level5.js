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
let totalPrice = 0;

cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity; 
    totalPrice += itemTotal; 
});

console.log(totalPrice);


// hint using forEach


    //NOTE: each item is an object, hence to access price use item.price
    //first item is { product: "Phone", quantity: 2, price: 500 }
    //second item in loop is { product: "Laptop", quantity: 1, price: 1000 }

    //Q2.. Create a nested object student with name and an inner address object. Print city.
    const student={
        name:'bishmeeta',
        address:{
            city:'Itahari',
            district:'sunsari'
 }
    }
    console.log(student.address.city)

    //Q3.Loop through an object using for...in and print all keys
    for (let key in student){
        console.log(key)
    if(typeof student[key] === "object") 
    {
    for (let nestedKey in student[key]) {
        console.log(nestedKey)
    }
}
}  

//Q4.Loop through an object using for...in and print all values.

for (let key in student){
    if(typeof student[key] === "object")
        {
            for(let nestedKey in student[key]){
                console.log(student[key][nestedKey])
            }
        } 
        else{
            console.log(student[key])
        }
}

//Q5.Merge two objects using the spread operator.
const obj={...cartItems,...student}
console.log(obj)

//Q6.Check if two objects have the same value using === .
console.log(cartItems===student)

//Q7. Freeze an object using Object.freeze() and show that values can't change.
Object.freeze(student)
student.name="jhalak"
console.log(student.name)

//Q8.seal an object using Object.seal() and try adding/removing keys.


//Q9.Create an object with a function inside and call the function.
const randomweigth = () => {
    return '100kg'
}

const car={
    brand:'roll',
    color:'red',
    weigth: randomweigth()
    
}


console.log(car)
