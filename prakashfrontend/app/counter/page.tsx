'use client'

import { useState } from "react"

const Counter = () => {
    let [number, setNumber] = useState(10)
    function increment(){
        setNumber(number + 1)
        console.log(number)
    }

    function decrement(){
      if(number <= 0) return;
      setNumber(number - 1)
      console.log(number)
  }
  return (
    <div>
         <button className="bg-red-200 p-4 m-4 shadow-md"  onClick={decrement}>-</button>
           {number}
            <button className="bg-green-200 p-4 m-4 shadow-md" onClick={increment}>+</button>
    </div>
  )
}

export default Counter