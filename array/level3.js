
//use of map in array (map le chia array ko valu lai function ko help le 
// condition check garera return value lai true or false dekhauxa )
let array=[5,20,2,30,15,7,1,9,3]

let arr1= array.map(function(val){
    return val>5;
});
console.log(arr1);

// using filter in array(filter le chai yesto value return
//  garxa jun case ma defined gariyeko hunxa)
let arr2= array.filter(function(val){
    return val>6 ;
});
console.log(arr2);

//use reduce in array( reduce ko use chai hamile
//  array vitrako varibal lai sum garmanko lagi use garinxa)
let arr3= array.reduce((acc,val)=>{
return acc+val;
},0); 
console.log(arr3);


// use sort in array(sort ko use chai array vitra ko variable lai 
// assending ra disending order ma milayera akhana lai use garinxa )
let arr4= array.sort((a,b)=>{
return a-b;
});
console.log(arr4);
// (for disending order  return b-a)
let arr7=array.sort((a,b)=>{
    return b-a;
});
console.log(arr7);

// some use in array (array vitra kunai pani value condition 
// saga milema true return garxa )
let arr5=array.some(function(val){
    return val>20;
});
console.log(arr5);

// every use in array (every le chai array vitra sabai value 
// condition saga milema matra true return garxa natra vane false return garxa)
let arr6=array.every((val)=>{
    return val>10;
});
console.log(arr6);

// foreach use in array (foreach le array ko valu lai loop le jastai return garxa   )
let arr8= array.forEach((val)=>{
    console.log(val);
});
 


