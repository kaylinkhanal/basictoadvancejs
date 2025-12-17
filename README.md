
*A closure is created when a function remembers variables from its outer (lexical) scope even after the outer function has finished executing. Function + its surrounding data = Closure*

### 1.Example

> function makeFunc() {
   > const name = "Mozilla";
    >function displayName() {
        >console.log(name);
    }
    >return displayName;
}
const myFunc = makeFunc();
myFunc();

### 2.Example(tracking scores)

const trackScores = () => {
    let scores = 0
    const positivePoints = (points) => {
        scores += points;
        console.log(`+${scores}pts`)
    }
    const negativePoints = (points) => {
        scores -= points;
        console.log(`-${scores}pts`)
    }
    const currentPoints = () => {
        return scores
    }
    return {positivePoints, negativePoints, currentPoints} ;
}
const dot = trackScores()
dot.positivePoints(5)
dot.positivePoints(4)
dot.positivePoints(3)
dot.negativePoints(1)
console.log(dot.currentPoints())
console.log(trackScores())


### 3.Real life banking practice example

const bankingAmount=()=>{

    let orgAmount = 10000
    
    const depositeAmount =(amounts)=>{

        orgAmount +=amounts
        console.log(`your credited banalce is ${orgAmount}`)
    }

    const withdrawalAmount =(amounts)=>{

        orgAmount -= amounts
        console.log(`your debited balance is ${orgAmount}`)
    }

    return {depositeAmount,withdrawalAmount}
}
let orgAmount =200000000
const data = bankingAmount()
console.log(bankingAmount())
data.depositeAmount(4000)
data.withdrawalAmount(2000)



