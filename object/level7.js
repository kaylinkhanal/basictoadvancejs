// Final balance with debit fee (2%)
//---------------------------------------------------
const transactions = [
  { type: "credit", amount: 5000 },
  { type: "debit", amount: 2000 },
  { type: "debit", amount: 1000 },
];

const balance = transactions.reduce((acc, cur) => {
  if (cur.type === "credit") {
    return acc + cur.amount;
  } else {
    return acc - (cur.amount + cur.amount * 0.02);
  }
}, 0);
console.log(balance);

//Cart total with 13% tax
//---------------------------------------------------
const cart = [
  { product: "Laptop", price: 1000, qty: 1 },
  { product: "Mouse", price: 50, qty: 2 },
];
cartTotal = cart.reduce((acc, cur) => {
  const subTotal = cur.price * cur.qty;
  return acc + subTotal + subTotal * 0.13;
}, 0);
console.log(cartTotal);

//Cart total with discount + tax
// rules:
// subtotal = price * qty
// discount = discount% on subtotal
// tax = 13% after discount

// expected output: final payable amount
// hint: reduce
//---------------------------------------------------
const cart1 = [
  { product: "Shoes", price: 2000, qty: 1, discount: 10 },
  { product: "Bag", price: 1500, qty: 2, discount: 5 },
];
const finalPayableAmount = cart1.reduce((acc, cur) => {
  const subTotal = cur.price * cur.qty;
  const disTotal = subTotal - (subTotal * cur.discount) / 100;
  return acc + disTotal + disTotal * 0.13;
}, 0);
console.log(finalPayableAmount);
