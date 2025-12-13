// REDUCE LEVEL 0

const prices = [5, 10, 30, 25, 15, 20]
function sum(prev, next){
    return prev + next
}
const total = prices.reduce(sum)
console.log(`$${total.toFixed(2)}`)





const grades = [75, 50, 90, 80, 65, 95]
function getMax(acc, elem){
    return Math.max(acc, elem)
}
function getMin(acc, elem){
    return Math.min(acc, elem)
}
const maximum = grades.reduce(getMax)
const minimum = grades.reduce(getMin)

console.log(maximum)
console.log(minimum)


