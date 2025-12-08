// 1.	Generate random integer 10–50, round down, then add 5.
        let min=10;
        let max=50;
        let random = Math.floor(Math.random()*(max-min+1)+min);
        console.log(random+1);
// 2.	Format 12.3456 to 3 decimals, convert to number, multiply by 2.
        let value= 12.3456;
        let convertedVal = Number(value.toFixed(3));
        console.log(convertedVal*2);   // 24.692

// 3.	Find max among -5, 0, 23, 7, 15, then subtract 7.
        console.log(Math.max(-5,0,23,7,1,15)*7);   // 161

// 4.	Find min among 100, -20, 35, 0, 50, then add 30.
        console.log(Math.min(100,-20,35,0,50)*30); // -600

// 5.	Round -7.8 to nearest integer, then multiply by -1.
        console.log(Math.round(-7.8)* -1);  // 8

// 6.	Convert "123.456px" to number and round up.
        console.log(Math.ceil(parseFloat("123.456px")));  // 124

// 7.	Generate random number 50–100, round to nearest integer.
        let randNum = Math.random()*(100-50)+50;
        console.log(Math.round(randNum));

// 8.	Check if NaN is really NaN.
        console.log(Number.isNaN(NaN));  // true

// 9.	Convert false to number, then add 5.
        console.log(Number(false)+5); // 5

// 10.	Find square root of 144, then multiply by 3.
        console.log(Math.sqrt(144)*3);  // 36

// 11.	Raise 5 to power 3, then subtract 10.
        console.log(Math.pow(5,3)-10); // 115

// 12.	Round 8.6789 to 2 decimals, convert to string, concatenate " USD".
        let num = 8.6789;
        let convertedNum= num.toFixed(2)
        console.log(convertedNum + " USD");  // 8.68 USD
