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

// hint: first convert object to array using Object.values() method
let output = Object.values(addressDetails.secondary).map(item => item.toUpperCase())
console.log(output)


//Q2. output should be 'kaylin lives in los angeles, usa'
console.log(user.name + ` ` + `lives in ` + Object.values(addressDetails.primary))

//Q3. output should be [[name, 'kaylin'], [age, 50]]
console.log(Object.entries(user))