const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
<<<<<<< HEAD
console.log(arr.concat(arr2));


//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())

=======
console.log([...arr, ...arr2]);

//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())
>>>>>>> d8525524db1f5254904e4655423dfa5bcc28b349

// hw: map vs foreach vs filter  in array