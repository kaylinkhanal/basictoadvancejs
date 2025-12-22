// optional chaining in nested objects

// -- accessing nested properties safely
// -- 
const user = {
    name: 'kaylin',
    age: 50,
    address: {
        primary: {
            city: 'los angeles',
            country: 'usa'
        },
     
    }
}


console.log(user.address?.secondary?.city)


const userArr = [
    'ram',
    50,
    [
        ['los angeles', 'usa'],
        ['gorkha', 'nepal'],
    ]
]


console.log(userArr[3]?.[1]?.[0])

const data = {
  student: {
    name: "Sagun",
    scores: { math: 49, science: 40 }
  }
}


// print the math score
console.log(data?.student?.scores?.math)

// print the total Marks

