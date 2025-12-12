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

let out=Object.values(addressDetails.secondary)
let upper=out.map(values=> values.toUpperCase())
console.log(upper)


// hint: first convert object to array using Object.values() method



//Q2. output should be 'kaylin lives in los angeles, usa'
let output=user.name  +" " + "lives in"  + " "+  addressDetails.primary.city  +","+" "+ addressDetails.primary.country
console.log(output)



//Q3. output should be [[name, 'kaylin'], [age, 50]]
const output1= Object.entries(user)
console.log(output1)
