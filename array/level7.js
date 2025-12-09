const rides = [
  { driver: "Arjun", distance: 12, fare: 220, rating: 4.9, city: "Delhi" },
  { driver: "Vijay", distance: 5, fare: 90, rating: 4.2, city: "Mumbai" },
  { driver: "Arjun", distance: 18, fare: 350, rating: 4.8, city: "Delhi" },
  { driver: "Sara", distance: 22, fare: 500, rating: 4.5, city: "Bangalore" },
  { driver: "Vijay", distance: 7, fare: 120, rating: 4.7, city: "Mumbai" }
];
// Q6. Calculate total distance driven by each driver.
// Output example:
// { Arjun: 30, Vijay: 12, Sara: 22 }

const totalDistance = rides.reduce((acc,x)=>{
    if(acc[x.driver]){
        acc[x.driver] += x.distance
    } 
    else acc[x.driver]=x.distance        
    return acc
},[])
console.log(totalDistance)

// Q7. Find the highest-earning driver (sum of fare).

const highestEarning = Object.entries(rides.reduce((acc,x)=>{
    if (acc[x.driver]){
        acc[x.driver]+=x.fare
    }
    else acc[x.driver]=x.fare
return acc
},[]))
.filter(x=>{
    Math.max(x)
})
console.log(highestEarning)

// Q8. Get a list of cities sorted by total revenue (high → low).

// Result example:

// [
//   { city: "Bangalore", revenue: 500 },
//   { city: "Delhi", revenue: 570 },
//   { city: "Mumbai", revenue: 210 }
// ]

const listOfCities = Object.entries(rides.reduce((acc,x)=>{
    acc[x.city] = (acc[x.city] || 0) + x.fare
    return acc
},{})
).map(([city,revenue])=>({city,revenue})).sort((a,b)=>a.revenue-b.revenue)
console.log(listOfCities)

// Q9. Calculate the average driver rating.

let avgDriverSum = 0
let iteration = 0
const avgDriverRating = rides.reduce((acc,x)=>{
    acc[x.driver] = (acc[x.driver]||0)+x.rating
    avgDriverSum += x.rating
    iteration++
return acc = avgDriverSum/iteration
},[])

console.log(avgDriverRating)

// Q10. Return only rides where fare/km ratio is more than 20.

// Formula:
// fare / distance > 20

const fareKmMore20 = rides.filter(x=>x = x.fare/x.distance > 20 ? x : 'itlessthan20')
console.log (fareKmMore20)