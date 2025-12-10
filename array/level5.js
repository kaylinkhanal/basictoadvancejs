const arr = [-1,4,-5,1,-2,4]
//Q1. calculate the sum of all -ve numbers in the array
const output = arr.reduce((sum,nextItem,nextid,orgArr)=>{
    if(nextItem<0)
    {
        console.log(sum,nextItem,nextid,orgArr);
        return sum+nextItem;
    }
    return sum;
 
},0)
    console.log(output);

