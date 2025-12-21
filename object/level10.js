/*
Q1.
Create a function `freezeExcept(obj, allowedKeys)`
that freezes an object EXCEPT the keys listed in allowedKeys.
*/

// Hint: Object.freeze is shallow. Think selectively.


const person = {

    person1: { subject: "Microbiology", degree: "Graduate" },
    person2: { subject: "Compter Science", degree: "Under-Grad" },
    person3: { subject: "Business Studies", degree: "Under-Grad" },

}

//concepts -------------------------------------------------------------------------------------
// Object.assign(person, { person4: { subject: "Physics", degree: "Under-Grad" } })
// console.log(person)

//Shallow freeze --- works for normal object (but not for nested one)
//Object.freeze(person)

//Object.assign(person, {person5 : {subject: "Maths", degree:"Post-Doctrate"}})// .assign() is for shallow only
//console.log(person)//throws error

// person.person1.uni = "Tribhuwan University" //--- direct assignment by dot operator
// console.log(person)

//  Output : {
//  person1: {
//     subject: 'Microbiology',
//     degree: 'Graduate',
//     uni: 'Tribhuwan University'
//  },
//  person2: { subject: 'Compter Science', degree: 'Under-Grad' },
//  person3: { subject: 'Business Studies', degree: 'Under-Grad' },
//  person4: { subject: 'Physics', degree: 'Under-Grad' }
//  }


//Deep freeze --- works for even nested ones
//---------------------------------------------------------------------------------------------------
// your code here:

function filterExcldue(obj, allowedKeys) {
    Object.seal(obj);

    Object.keys(obj).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            const desc = Object.getOwnPropertyDescriptor(person, key);
            Object.defineProperty(desc, key, {writable: false})
            
            Object.freeze(obj[key]);

        }
        return obj;
    }

    )

}

filterExcldue(person, ["person1"])
person.person1.subject = "food inspector"// exception -- allowed
person.person2.subject = "finance"// not allowed
console.log(person)
// Output:
// {
//   person1: { subject: 'food inspector', degree: 'Graduate' },
//   person2: { subject: 'Compter Science', degree: 'Under-Grad' },
//   person3: { subject: 'Business Studies', degree: 'Under-Grad' }
// }

/*
Version 1.0.0
Q2.
A `user` object is already provided.
Create a function `lockProperty(obj, key)` that makes a single property read-only
using Object.defineProperty and getOwnPropertyDescriptor.
*/
//code here :
//------------------------------------------------------
const user = { name: "Alice", age: 25, role: "admin" };

function lockProperty(obj, key){
    Object.seal(obj);
    Object.keys(obj).forEach((key)=>{
    
    }
    
    )
    
}


/*
Version 1.0.1
Q3.
An `account` object is already provided.
Create a function `lockPropertiesExcept(obj, allowedKeys)` that locks all top-level properties
except those in allowedKeys using Object.defineProperty.
*/
//code here :
//------------------------------------------------------

const account = { balance: 1000, type: "savings", pin: 1234 };
