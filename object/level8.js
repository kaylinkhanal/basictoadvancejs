// HIGH LEVEL DIFFICULTY PROBLEM
const user = {
    name: 'kaylin',
    age:50
}

const addressDetails = {
    primary: {
        city: 'los angeles',
        country: 'usa'
    },
    secondary: {
        city: 'Gorkha',
        country: 'Nepal'
    }
}

// Q1. output should ['GORKHA', 'NEPAL']
let arr=Object.values(addressDetails.secondary)
let arr10=arr.map((values)=>{
    return values.toUpperCase()
    
})

console.log(arr10)

// hint: first convert object to array using Object.values() method


//Q2. output should be 'kaylin lives in los angeles, usa'
console.log(`${user.name} live in ${addressDetails.primary.city}, ${addressDetails.primary.country}`)


//Q3. output should be [[name, 'kaylin'], [age, 50]]
let arr5 =Object.entries(user)
console.log(arr5)