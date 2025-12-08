const patients = [
  { name: "Ravi", age: 45, disease: "Diabetes", admitted: true, bill: 1200, doctor: "Dr. Shah" },
  { name: "Meena", age: 32, disease: "Fever", admitted: false, bill: 200, doctor: "Dr. Clark" },
  { name: "Aman", age: 67, disease: "Heart", admitted: true, bill: 3500, doctor: "Dr. Shah" },
  { name: "Priya", age: 23, disease: "Fracture", admitted: true, bill: 1800, doctor: "Dr. Adams" },
  { name: "Karan", age: 50, disease: "Diabetes", admitted: false, bill: 600, doctor: "Dr. Shah" }
];
// Q1. Calculate the total hospital revenue (sum of all bills).

let sumOfBill = 0
patients.forEach(x=>{
   return sumOfBill += x.bill
})
console.log(sumOfBill)

// Q2. Find the doctor who treated the most patients.
// Return: "Dr. Shah" etc.

const doctorCounts = patients.reduce((acc, x) => {
  acc[x.doctor] = (acc[x.doctor] || 0) + 1;
  return acc;
}, {});

// const mostTreatedDoctor = Object.entries(doctorCounts)
//   .reduce((max, curr) => (curr[1] > max[1] ? curr : max), ["", 0])[0];

console.log(doctorCounts);// -----> doesn't understand


// Q3. Count how many patients are currently admitted.

const countPatient = patients.reduce((acc,x)=>{
    if(x.admitted===true){
    acc++
    }
    return acc
},0)
console.log(countPatient)

// Q4. Create a summary object of diseases and their count.

// Example:

// {
//   Diabetes: 2,
//   Fever: 1,
//   Heart: 1,
//   Fracture: 1
// }

const diseaseAndTheirCount = patients.reduce((acc,x)=>{
    if(acc[x.disease]){
        acc[x.disease]++
    }
    else acc[x.disease]=1
    return acc
},[])
console.log(diseaseAndTheirCount)

// Q5. Calculate average bill amount of admitted patients only.
let count = 0
let admsum = 0
const avgBillOfAdmPat = patients.reduce((acc,x)=>{
    if(x.admitted){
        admsum += x.bill
        count++
    }
    
    return acc=admsum/count
},0)
console.log(avgBillOfAdmPat)