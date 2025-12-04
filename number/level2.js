
let a =10;
b = a++
 console.log(b)



 let a = 10
 console.log(a++)

 console.log(a)


let r=4
let area = Math.PI*r**2
console.log(area)

console.log(area.toFixed(2))

OR
let abs = Math.abs(area)
console.log(abs)



// the area of triangle having sides 13cm, 12 cm and 9cm.

let a = 13
let b = 12 
let c = 9

let sp = (a + b + c)/2;
let area = Math.sqrt(sp*(sp - a)*(sp - b)*(sp - c));
console.log(area.toFixed(2))


// swap two variables values using third variable.

let a = 5
let b = 2
 let temp = null

 console.log("Before swapping:", a, b );

    //swapping
    temp = a;
    a = b;
    b = temp;

console.log("After swapping:", a, b);


// swap two variables values without using third variable.

let a = 5
let b = 2

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("After swapping:", a, b);



// check if the given integer number is even using bitwise operator.
let a = 5
console.log(a % 2 === 0)
console.log("-->The answer as True i.e. even and False i.e. odd")



// check if the given integer number is odd using bitwise operator.
let a = 9
console.log(a & 1 === 1)
console.log("-->The answer as 1 is True i.e. odd here and 0 is False i.e. even")



// greatest and average of two integers given using conditional operator
let a = 3
let b = 7
let greatest = null
let average = null
    greatest = (a > b)?a:b;
    average = (a + b)/2;
console.log(greatest)   //direct answer dinxa; not interms of true or false..
console.log(average.toFixed(2))


// greatest of three integers given using conditional operator
let a = -3
let b = 8
let c = 4
let greatest = null
    greatest = (a > b)?((a > c)?a:c):((b > c)?b:c);
console.log(greatest)



// compute in mind...
let a = 3
let b = 7
let p = a++
// let q = --b
// let z = a %= 2
let y =  b += 5
console.log(p)
console.log(q)
console.log(z)
console.log(y)