// Q1. write a function that takes in array as input and calculates the length of that array
    const calculateArrayLength = (arr)=>{
        return arr.length;
    }
    console.log(calculateArrayLength([1,2,3,4,5]));

//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const calculateArrayAvg = (numArr)=>{
    let sum=0;
    numArr.forEach((item)=>{
        sum=sum+item;

    });
    return sum/numArr.length;

}
    console.log(calculateArrayAvg([10,20,30,40,50]));




//Q3. write a function that takes in an object as an input and returns the total number of keys
    const calculateObjectTotalKeys = (obj)=>{
        return Object.keys(obj).length;
    } 
   console.log(`Total number of keys: ${calculateObjectTotalKeys({
        name: "Ram",
        age: 22,
        gender:"Male"
    })}`);


//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 
    const calculateArraySum = (arrSum)=>{
        let sum =0;
        arrSum.forEach(item=>{
            sum=sum+item;
        })
        return sum;
    }
    console.log(calculateArraySum([10,20,30,40,50]));