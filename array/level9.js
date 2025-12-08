const arr = [5, 1, 2, 4]

//Q1. use map to multiply each item by 2 if even and remove the odds ones

const output = arr.map((item) => {

    if (item % 2 === 0) { return item * 2 }

}).filter((item) => {
    return item
});

console.log(output)


// Q2 use foreach to calculate the sum of all even numbers in the array

let sum = 0
arr.forEach(x => {
    if (x % 2 == 0) {
        sum += x
    }
})
console.log(sum)