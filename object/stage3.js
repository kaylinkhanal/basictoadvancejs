// Q1.Sort the array based on the `age` property in **descending** order.
// Expected Output:[{name: 'C', age: 30}, {name: 'B', age: 25}, {name: 'A', age: 20}]

arryObj1 = [
    { name: 'A', age: 20 },
    { name: 'B', age: 25 },
    { name: 'C', age: 30 }
]
const output1 = arryObj1.sort((a, b) => b.age - a.age)
console.log(output1)

// Q2.Find the **first** object where the `score` is greater than 90.
// Expected Output:{name: 'Bob', score: 95}

arrObj2 = [
    { name: 'Alice', score: 99 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 90 }
]
const output2 = arrObj2.filter(x => x.score > 90)
console.log(output2)

// Q3.Check if **every** element in the array is greater than 10.
// Expected Output:false

arrObj3 = [12, 15, 18, 9, 20]
const output3 = arrObj3.map(x => x > 10)
console.log(output3)

// Q4. Check if **at least one** element in the array starts with the letter 'P'.
// Expected Output:true

arr4 = ['apple', 'grape', 'pear', 'plum']
const output4 = arr4.some(x => x.startsWith('p')) //some() methods stop iteration once the match have found e.g there is some p to start 
console.log(output4) //unlike some() every() methods iterates || requires all data set to pass test e.g all element start with p 

// Q5.Return a new array containing only the unique numbers.
// Expected Output:[1, 2, 3, 4]

arr5 = [1, 2, 3, 2, 4, 1, 3]
const output5 = [...new Set(arr5)]
console.log(output5)
console.log(new Set(arr5))
// console.log(new Set(Add(1)))
// console.log(new Set(arr5))
