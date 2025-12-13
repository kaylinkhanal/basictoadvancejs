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
console.log(Object.values(addressDetails.secondary))
// hint: first convert object to array using Object.values() method
const addArray = Object.values(addressDetails.secondary);
upperarr = addArray.map((item) => item.toUpperCase());
console.log(upperarr);

// console.log(addressDetails);

//Q2. output should be 'kaylin lives in los angeles, usa'
console.log(
  `${user.name} lives in ${addressDetails.primary.city} , ${addressDetails.primary.country}`
);

//Q3. output should be [[name, 'kaylin'], [age, 50]]
console.log(Object.entries(user));
