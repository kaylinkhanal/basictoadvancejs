'use client'
import React, { useState } from 'react'

const Card = (props) => {

  // ✅ Hooks at top level
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('white')

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
    setTheme('')
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1)
    setTheme('')
  }

  return (
    <div className='font-sans bg-gray-200 rounded-2xl m-4 p-4 h-auto w-auto'>

      <div>{props.person.name}</div>
      <div>{props.person.position}</div>

      <div className='text-black hover:text-2xl my-3'>
        Address: {props.person.address.city}
      </div>

      <img
        className="h-32 w-32"
        src={props.person.image_url}
        alt="person"
      />


      <div className='text-gray-800 mx-5 my-3'>
        Price: {props.person.price}
      </div>

      {/* Counter Section */}
      <div className='my-4'>
        <button onClick={decrement} className='px-3 py-1 bg-red-300'>-</button>
        <span className='mx-3'>{count}</span>
        <span className='mx-3'>{theme}</span>
        <button onClick={increment} className='px-3 py-1 bg-blue-300'>+</button>
      </div>
      <button className='ring-2 ring-red-200 m-4 rounded-sm bg-green-200 text-pink hover:text-blue-700 hover:bg-yellow-200'>
        Add to cart
      </button>

    </div>
  )
}

export default Card
