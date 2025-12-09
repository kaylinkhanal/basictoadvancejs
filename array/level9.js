const arr = [5,1,2,4]

//Q1. use map to multiply each item by 2 if even and remove the odds ones
const output = arr.map((item) => {
    if (item%2==0)
        return item*3;

}).filter((item) => {
    return item
});
console.log(output);


// Q2 use foreach to calculate the sum of all even numbers in the array
letevensum=0;
const ram=arr.forEach((item)=>{
    if (item%2==0){
        evensum+=item;
    }
}

);