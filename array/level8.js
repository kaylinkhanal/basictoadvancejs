
 let arr=[5,10,15,20]

 let arr2=arr.reduce((acc,val,arr)=>{
    return acc+val+arr
 },0);
 console.log(arr2)