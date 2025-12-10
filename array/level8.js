const members = [
  { name: "Anil", months: 12, fee: 6000, trainer: "Rohan", active: true },
  { name: "Sita", months: 6, fee: 3500, trainer: "Rohan", active: false },
  { name: "Imran", months: 3, fee: 1500, trainer: "Aditi", active: true },
  { name: "Geeta", months: 12, fee: 6000, trainer: "Aditi", active: true }
];
// Q11. Calculate total gym revenue.
 
const gymRevenue = members.reduce((acc,x)=>{
 acc += x.fee
  return acc
},0)
console.log(gymRevenue)

// Q12. Count active vs inactive members (return an object).

// Expected:
// { active: 3, inactive: 1 }

const count = members.reduce((acc,x)=>{
  if (x.active){
   acc.active++
  }
  else  acc.inactive++
  return acc
},{active : 0 , inactive : 0 })
console.log(count)

// Q13. Find which trainer earns the most total fees from members.

const totalFee = members.reduce((acc,x)=>{
acc[x.trainer]= (acc[x.trainer]||0) + x.fee
  return acc
},[]).sort((a,b)=>b.trainer-a.trainer)
console.log(totalFee)

// Q14. Create an array of member names sorted by membership duration (high → low).

const sortedArray = members.sort((a,b)=>b.months-a.months).reduce((acc,item,id,array)=>{
  acc[item.name] = item.months
  return acc
},[])
console.log(sortedArray)

// Q15. Calculate the average membership duration of active members only.\
let countt = 0
sum = 0
const avgMembership = members.reduce((acc,x)=>{
  if(x.active){
    sum+=x.months
   countt++
  }
  return acc = sum/countt
},{})

console.log(avgMembership)

const bookings = [
  { movie: "Dune", seats: 3, price: 300, food: 200, time: "Evening" },
  { movie: "Avatar", seats: 2, price: 250, food: 150, time: "Morning" },
  { movie: "Dune", seats: 4, price: 300, food: 300, time: "Night" },
  { movie: "Batman", seats: 1, price: 200, food: 0, time: "Evening" }
];

// Q16. Calculate total revenue from movie + food sales.

const totalRevenue = bookings.reduce((acc,x)=>{
  acc = (acc||0) +(x.food + x.price)
  return acc
},0)
console.log(totalRevenue)

// Q17. Group bookings by movie name with total seats booked.
// Output:
// {
//   Dune: 7,
//   Avatar: 2,
//   Batman: 1
// }
const movieName= bookings.reduce((acc,x)=>{
  acc[x.movie] = (acc[x.movie]||0) + x.seats
  return acc
},{})

console.log(movieName)

// Q18. Find which showtime (Morning/Evening/Night) has the highest ticket revenue.
// Use reduce.

// const highestTicketRevenue = bookings.reduce((acc,x)=>{
//   acc[x.time] = (acc[x.time] || 0) + x.food + x.price
//   return acc

// },{})

// console.log(highestTicketRevenue)

const highestTicketRevenue = bookings.reduce((acc, x) => {
    const currentRevenue = x.food + x.price;
    const newTotal = (acc[x.time] || 0) + currentRevenue;
    acc[x.time] = newTotal;
    if (newTotal > acc.maxRevenue) {
        acc.maxRevenue = newTotal;
        acc.highestTime = x.time;
    }

    return acc;

}, {
        // Stores total revenue per time: { Morning: 195, Evening: 305, Night: 435 }
    maxRevenue: 0,    // Tracks the highest revenue value found so far
    highestTime: 0  // Tracks the showtime with the highest revenue
});
console.log(highestTicketRevenue)
// Q19. Create a list of movies sorted by total revenue (movie price × seats + food).
// Q20. Find the movie with the highest average spending per person.

// Formula:

// (moviePrice * seats + food) / seats
