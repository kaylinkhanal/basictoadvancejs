// foreach()
let arr = [1,2,3];
arr.forEach(num => {
    console.log(num);
});

// Map()
let arr1 = [1,2,3];
let doubled = arr1.map(n => n*2);
console.log(doubled);

// filter()
let arr2 = [5,1,4];
let result = arr2.filter( n => n>2);
console.log(result);

// reduce()
let arr3 = [1,2,3,4];
let sum = arr3.reduce((total,current) => total + current ,0 );
console.log(sum);

// Q2 find max using reduce()
let arr4 = [10,25,3,48,5];
let max = arr4.reduce((a,b) =>(a>b ? a:b));
console.log(max);

// pure function
function add (a,b) {
    return a + b;
}
add(2,3);

// impure function
  
let x = 10;
function addTox (num) {
    x += num;
}
addTox(5);
console.log(x);

// using math.random()
function getRandom() {
    return Math.random();

}

// spread operator
// copying an Array
const arr5 = [1,2,3];
const arr6 = [...arr5];
console.log(arr6);

// merging arrays
const a = [1,2];
const b = [3,4];
const merged = [... a,...b];
console.log(merged);

