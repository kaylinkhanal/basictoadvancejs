'use client'
import React from 'react'

const Card = ({products,onAddToCart}:any) => {
  return (
    <div className='shadow-sm p-4 m-4 rounded-lg border border-gray-200'>
   {products.name }
   <img src={products.image_url} alt={products.name} className="w-32 h-32 object-cover"/>
    <div>Price: {products.currency } {products.price}</div>
   <div className='bg-amber-300 rounded-sm'>Rating: {products.rating}</div>
   <button onClick={()=>
    onAddToCart(products)}
    className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
    Add to Cart
    </button>
   </div>
  )
}

export default Card