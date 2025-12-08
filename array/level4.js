// SETUP DATA
const numbers = [4, 12, 7, 23, 9, 15, 3, 19];
const products = [
  { name: "Laptop", price: 1200, inStock: true, category: "Electronics" },
  { name: "Mouse", price: 25, inStock: true, category: "Electronics" },
  { name: "Book", price: 15, inStock: false, category: "Education" },
  { name: "Pen", price: 3, inStock: true, category: "Stationery" },
  { name: "Headphones", price: 150, inStock: true, category: "Electronics" },
  { name: "Notebook", price: 8, inStock: false, category: "Stationery" }
];
const words = ["apple", "banana", "apple", "cherry", "banana", "apple", "date"];
const students = [
  { name: "John", score: 85 },
  { name: "Jane", score: 92 },
  { name: "Bob", score: 70 },
  { name: "Alice", score: 95 },
  { name: "Eve", score: 88 }
];

// Q1. Find the sum of all numbers in the 'numbers' array
// Expected Output: 92

const sumOfarray = numbers.reduce((acc,x)=>acc += x)
console.log (sumOfarray)

// Q2. Find the maximum number in the 'numbers' array
// Use numbers[0] as initial value
// Expected Output: 23

const maxNumberInArray = numbers.reduce((acc,x)=>{
  // acc = x
 let y = Math.max(acc,x)
  return y
},0) 
console.log(maxNumberInArray)

// Q3. Count total number of products that are in stock (inStock === true)
// Expected Output: 4
let count =0 
const countNumber = products.map(item=>{
  if (item.inStock===true) return count++
})

// products.reduce((acc,x)=>{
//   if(x.inStock===true)
//   return count++
// },0)
console.log(count)

// Q4. Calculate total price of all Electronics products
// Expected Output: 1375 (1200 + 25 + 150)
let sum =0 
products.filter(item =>{
  if (item.category==="Electronics") return sum += item.price
})
console.log ( sum )

// Q5. Count how many times each word appears in the 'words' array
// Expected Output: { apple: 3, banana: 2, cherry: 1, date: 1 }

const countHow = words.reduce((acc, x) => {
  if (acc[x]) {
    acc[x]++;
  } else {
    acc[x] = 1;
  }
  return acc;
}, []);
console.log(countHow)

// Q6. Extract only the names of all products into a new array
// Expected Output: ["Laptop", "Mouse", "Book", "Pen", "Headphones", "Notebook"]

// const productName = products.map(x=>x.name)
const productName = products.reduce((acc,x)=>{
  if(x.name){
    acc.push(x.name)
  }
 return acc
},[])
console.log(productName)

// Q7. Check if ALL students scored above 75 (return true/false)
// Expected Output: true



const checkScore = students.reduce((acc,x)=>{
acc.push(x.score>75 ? true : false)
return acc
},[])
console.log (checkScore)

// Q8. Using filter + reduce: Find the sum of scores of students whose name starts with 'J'
// Expected Output: 177 (John 85 + Jane 92)

const sumOfScoreNameStartJ = students.filter(x=>x.name.startsWith("J")).reduce((acc,x)=>{
acc += x.score
return acc
},0)
console.log(sumOfScoreNameStartJ)

// Q9. Using map + reduce: First increase every product price by 10%, then calculate total value
// Expected Output: 1586 (rounded or exact)

const priceIncrease = products.map(x=>{
 return (x.price+x.price*0.10)
}).reduce((acc,x)=> {
  return acc += x
},0)
console.log(priceIncrease)

// Q10. Calculate the average score of all students using reduce only
// Hint: Use index and array.length like your original Q10
// Expected Output: 87.6
let avgSum = 0
const avgScore = students.reduce((acc,x,index,array)=>{
avgSum +=x.score
if (index===array.length-1){
return acc=avgSum/array.length
}
},[])
console.log(avgScore)