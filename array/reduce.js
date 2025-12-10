// 1. Sum of numbers
// Q: Sum all numbers in 
arr= [1, 2, 3, 4]

const sum=arr.reduce((acc,nextitem,id)=>
{
    acc=acc+nextitem;
    return acc;

},0);console.log(sum);

// 2. Multiply all numbers

// Q: Find product of [2, 3, 4].

arr1= [ 2, 3, 4]

const mul=arr1.reduce((acc,nextitem,id)=>
{
    acc=acc*nextitem;
    return acc;

},1);console.log(mul);

    

// 3. Find maximum

// Q: Max in [5, 1, 7, 3].

arr2 =  [5, 1, 7, 3]

const max=arr2.reduce((acc,nextitem)=>
{if(acc>nextitem){
  return acc;
   
}
else{
    acc=nextitem;
}
return nextitem;
 

},0);console.log(max);


// 4. Find minimum

// Q: Min in [9, 4, 12, 2].
const min = [9,4,12,2].reduce((acc, n) => {
    if(acc<n){
        return acc;
    }
    else{
        return acc=n;
    }
});
console.log(min);
// 5. Double every number (map using reduce)

// Q: [1,2,3] → [2,4,6]


const doubled=[1,2,3] .reduce((acc,n)=>{

    acc.push(n*2);
    return acc;
},[]);
console.log(doubled)
// 6. Count even numbers

// Q: Count evens in [1,2,4,5,6].
const count=[1,2,4,5,6].reduce((acc,n)=>{
    if(n%2==0) acc++; {
          
        return acc;
    }
},0);
console.log(count);

// 7. Count occurrences (frequency map)

// Q: ["a","b","a","c","b","a"] → {a:3, b:2, c:1}

const occour=["a","b","a","c","b","a"].reduce((acc,n)=>{
     if(!acc[n]){ acc[n]=1;

        
     } else{
       acc[n]++;
     }

     return acc;
         
    
},{});
console.log(occour);

// 8. Flatten an array

// Q: [[1,2],[3,4],[5]] → [1,2,3,4,5]

const flat=[[1,2],[3,4],[5]].reduce((acc,arr)=>

    acc.concat(arr),
    
[]);
console.log(flat);

// 9. Longest string

// Q: From ["hi","hello","coode"]

const long=["hi","hello","coode"].reduce((acc,n)=>{
    if(acc.length>n.length){
        return acc;
    }
    else if (acc.length=n.length){
        return acc=acc,n;
    }
    else {
        return acc=n;
    }
})
console.log(long);

// 10. Reverse an array

// Q: [1,2,3,4] → [4,3,2,1]

const reverse=[1,2,3,4].reduce((acc,n)=>[n,...acc],[]);
console.log(reverse);
