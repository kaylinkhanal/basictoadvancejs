
const mixed = [10, "apple", 25, "banana", true, 15, false, "cherry", 30];
const temps = [22, 28, 19, 30, 25, 18, 32];

// Q1. Use filter to create an array containing only numbers from mixed
// Expected output: [10, 25, 15, 30]
const onlyNum = mixed.filter((item) => {
    return typeof item === 'number';
});
console.log(onlyNum);

// Q2. Use filter to create an array containing only strings from mixed
// Expected output: ["apple", "banana", "cherry"]
const onlyStr = mixed.filter((item) => {
    return typeof item === 'string';
});
console.log(onlyStr);

// Q3. From temps, use map and filter: first filter temperatures above 25, then convert them to Fahrenheit (F = C × 9/5 + 32)
// Expected output: [86, 89.6, 89.6] (approx values ok)
const twoArr = temps.filter((item) => {
    if (item > 25){
        return item;
    }
}).map((item) => {
    return (item * (9/5) + 32);
})
console.log(twoArr);

// Q4. Use forEach on mixed array to count how many boolean values are there
// Print the count (expected: 2)
let count = 0;
mixed.forEach((item) => {
    if (typeof item === 'boolean'){
        count++;
    }
});
console.log(count);

// Q5. Use map to create a new array from temps where each temperature is shown as "XX°C"
// Expected output: ["22°C", "28°C", "19°C", "30°C", "25°C", "18°C", "32°C"]
const add = temps.map((item) => {
    return item + "°C";
});
console.log(add);