'use client'
import React, { useState } from 'react'

const Counter = () => {
let [count, setCount] = useState(0)

const increment = ()=>{
    setCount(count=>count+1)
}
const decrement =()=>{
    setCount(count=>Math.max(count-1,0))
}
const reset = ()=>{
    setCount(0)
}

  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className='flex flex-col items-center bg-amber-200 font-sans dark:bg-black p-20 rounded-2xl shadow-2xl'>
    <h1 className='text-4xl font-bold mb-20'>Counter App</h1>
    <p className='text-8xl mb-10'>{count}</p>
    <div className='flex gap-2'>
    <button className='border-2 rounded-lg p-1  bg-black text-white font-semibold' onClick={decrement}>Decrement</button>
    <button className='border-2 rounded-lg p-1 bg-black text-white font-semibold' onClick={reset}>Reset</button>
    <button className='border-2 rounded-lg p-1 bg-black text-white font-semibold' onClick={increment}>Increment</button>
    </div>
    </div>
    </div>
        
  )
}

export default Counter