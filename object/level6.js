const cartItems= [{
    brand:'Samsung',
    product: "Phone",
    quantity: 2,
    price: 500
}, {
    brand:'dell',
    product: "Laptop",
    quantity: 1,
    price: 1000000
}, {
    brand:'Apple',
    product: "mac book",
    quantity: 5,
    price: 100000
}, {
    brand:'Apple',
    product: "iphone",
    quantity: 3,
    price: 1000000
}]

// Q1. create an array of items with quantity greater than 1
const greateritem=cartItems.filter((item)=>
{
    if(item.quantity>1){
        return item
    }
})
console.log(greateritem)

 //Q2. create an array of products with price less than 800

 const  lowerproduct=cartItems.filter((item)=>{
    if(item.price<800){
        return item
    }
 })
 console.log(lowerproduct)

//Q3. create an array of item that is from apple brand and add there total  amount
const brandproduct=cartItems.filter((item)=>{
    if(item.brand==='Apple'){
        return item
    }
})
const totalitem=brandproduct.map((item)=>
{
    return item.quantity*item.price
})
    sum=0
totalitem.forEach((item)=>
{
   sum=sum+item
})
console.log(sum)

