// 1.	Generate random number 20–80, round down, add 5, check if even.
        let randNum = Math.random()*(80-20+1)+20;
        let roundAddNum= Math.floor(randNum)+5;
        if(roundAddNum%2===0)
        {
        console.log(roundAddNum + " is even");
        }
        else{
            console.log(roundAddNum + " is not even");
        }

// 2.	Format 123.456789 to 4 decimals, convert to number, divide by 3, round to nearest integer.
        let placedNum = Number(123.456789.toFixed(4));
        let roundedDivNum=Math.round(placedNum/3);
        console.log(roundedDivNum);  // 41

// 3.	Convert "500px" to number, multiply by 2, then subtract 1200, find absolute value.
        let convertedNum= parseInt("500px")*2;
        let absSubNum= Math.abs(convertedNum-1200);
        console.log(absSubNum);  // 200

// 4.	Check if NaN or "hello" is NaN using Number.isNaN and isNaN; explain difference.
        console.log(Number.isNaN(NaN)); // true
        console.log(isNaN(NaN)); // true
        
        console.log(Number.isNaN("hello")); // false (no coercion)
        console.log(isNaN("hello")); // true (string-> NaN after coersion)

// 5.	Generate random integer 1–100, check if divisible by 5.
        let randInteger= Math.floor(Math.random()*100)+1;
        if(randInteger%5===0)
        {
        console.log(randInteger + " divisible by 5");
        }
        else{
                console.log(randInteger + " not divisible by 5");
        }

// 6.	Round -23.78 up, then multiply by -2.
        console.log(Math.ceil(-23.78)* -2);  //46

// 7.	Convert "45.67abc" to number using parseInt and parseFloat, compare results.
        console.log(parseInt("45.67abc")); // 45
        console.log(parseFloat("45.67abc")); // 45.67

// 8.	Find max among 12, -4, 0, 27, 8, then square it.
        let maxNum = Math.max(12,-4, 0, 27, 8);
        console.log(maxNum*maxNum);  // 729

// 9.	Format 0.6789 to 2 decimals, convert to string, append "kg".
        let twoDecNum = 0.6789.toFixed(2);
        console.log(twoDecNum+ " kg");

// 10.	Generate random decimal 0–10, round to nearest integer, check if odd or even.
        let randDec = Math.random()*10
        let nearInt =Math.round(randDec);
        if(nearInt%2===0)
        {
            console.log(nearInt+ " is even")
        }
        else{
            console.log(nearInt + " is odd")
        }
        
// 11.	Raise 7 to power 4, then take square root.
        console.log(Math.sqrt(Math.pow(7,4))); // 49

// 12.	Convert true to number, multiply by 50, add 100.
        console.log(Number(true)*50+100); // 150

// 13.	A product costs 45.678 USD. Apply a 10% discount, round up to nearest integer,
//  then convert to string with " USD" appended.
        let productCost = 45.678;
        let discountCost = productCost-(productCost*10/100);
        console.log(Math.ceil(discountCost) + " USD");

// 14.	Calculate total price: 3 items , 19.99 for each, round down, then add 5 shipping.
        let total = 3*19.99;
        let roundShipp = Math.floor(total);
        console.log(roundShipp+5);

// 15.	Average rating 4.5678. Round to 1 decimal place, then multiply by 20 to show percentage score.
        let avgRating = 4.5678;
        let roundMultRating = Number(avgRating.toFixed(1));
        console.log(roundMultRating*20);

