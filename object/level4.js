// HIGH LEVEL DIFFICULTY PROBLEM
const user = {
  name: "kaylin",
  age: 50,
};

const addressDetails = {
  primary: {
    city: "los angeles",
    country: "usa",
  },
  secondary: {
    city: "Gorkha",
    country: "Nepal",
  },
};

// Q1. output should ['GORKHA', 'NEPAL']
const secondaryValue = Object.values(addressDetails.secondary);
console.log(secondaryValue);
console.log(secondaryValue.map((city) => city.toUpperCase()));

// hint: first convert object to array using Object.values() method

//Q2. output should be 'kaylin lives in los angeles, usa'

console.log("kaylin lives in 'primary.city', 'primary.country'");

//Q3. output should be [[name, 'kaylin'], [age, 50]]
