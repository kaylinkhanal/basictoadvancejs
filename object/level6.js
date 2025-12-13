//  Calculate total cost (quantity * price) of all products
// expected output: 10*5 + 3*50 + 1*800 = 1000
// hint: reduce
//---------------------------------------------------
const products = [
  { name: "Pen", quantity: 10, price: 5 },
  { name: "Book", quantity: 3, price: 50 },
  { name: "Bag", quantity: 1, price: 800 },
];
const productsPrice = products.reduce((acc, cur) => {
  return acc + cur.quantity * cur.price;
}, 0);
console.log(productsPrice);

// Calculate total price of only delivered orders
// hint: filter + reduce
//---------------------------------------------------
const orders = [
  { item: "Pizza", price: 400, delivered: true },
  { item: "Burger", price: 200, delivered: false },
  { item: "Momo", price: 150, delivered: true },
];

const totalDelivered = orders
  .filter((item) => {
    return item.delivered === true;
  })
  .reduce((acc, cur) => {
    return (acc = acc + cur.price);
  }, 0);
console.log(totalDelivered);

// Calculate total payout (salary + bonus) of all employees
// hint: reduce
//---------------------------------------------------
const employees = [
  { name: "A", salary: 30000, bonus: 5000 },
  { name: "B", salary: 40000, bonus: 7000 },
  { name: "C", salary: 25000, bonus: 3000 },
];
const totalPayout = employees.reduce((acc, cur) => {
  return acc + (cur.salary + cur.bonus);
}, 0);
console.log(totalPayout);

// Calculate total number of students in all classrooms
// hint: reduce
//---------------------------------------------------
const classrooms = [
  {
    room: "A",
    students: 30,
  },
  {
    room: "B",
    students: 25,
  },
  {
    room: "C",
    students: 20,
  },
];
const totalStudent = classrooms.reduce((acc, cur) => {
  return acc + cur.students;
}, 0);
console.log(totalStudent);

// Calculate final payable amount
// formula: price * qty - discount%
// hint: reduce
//---------------------------------------------------
const cart = [
  { product: "Shirt", price: 1200, qty: 2, discount: 10 },
  { product: "Pant", price: 2000, qty: 1, discount: 20 },
];
const payableAmount = cart.reduce((acc, cur) => {
  return acc + cur.price * cur.qty - cur.discount / 100;
}, 0);
console.log(payableAmount);

// Calculate final balance
// credit → add, debit → subtract
// hint: reduce
//---------------------------------------------------
const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 500 },
  { type: "credit", amount: 2000 },
  { type: "debit", amount: 800 },
];

const finalBalance = transactions.reduce((acc, cur) => {
  if (cur.type === "credit") {
    acc = acc + cur.amount;
  } else if (cur.type === "debit") {
    acc = acc - cur.amount;
  }
  return acc;
}, 0);
console.log(finalBalance);
