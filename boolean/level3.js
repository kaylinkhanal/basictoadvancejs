// 1.	Check if userAge > 18 && hasLicense == true for a driving. 
        let userAge= 19;
        let hasLicense = true;
        if(userAge>18 && hasLicense===true)
        {
            console.log("Eligible for driving");
        }
        else
        {
            console.log("Not Eligible for driving");
        }

// 2.	Check if input !== "" && input.length > 0 before submitting a form.
        let input =""
        if(input!=="" && input.length>0)
        {
            console.log("Form Submitted");
        }
        else
        {
            console.log("Input cannot be empty"); // Input cannot be empty
        }
// 3.	Determine if a string is non-empty using Boolean() or !!.
        let str ="Ram"
        // Using Boolean()
        console.log(Boolean(str)); // true
        // Using !!
        console.log(!!str); // true

// 4.	Check if a number is even: num % 2 === 0.
        let num = 10;
        if(num%2===0)
        {
            console.log(`${num} is even`)
        }
        else
        {
        console.log(`${num} is odd`)

        }

// 5.	Check if a number is divisible by 3 or 5.
        let num1=15;
        if(num1%3===0 || num1%5===0)
        {
        console.log(`${num1} is divible by 3 or 5`)
        }
        else
        {
        console.log(`${num1} is not divible by 3 or 5`)
  
        }

// 6.	Validate email format by checking if string includes "@" and includes ".".  
        let email = "example@gmail.com";
        if(email.includes("@") && email.includes("."))
            {
                console.log("Valid email format");
            } 
        else
        {
            console.log("Invalid email format");
        }

        // Valid email format
