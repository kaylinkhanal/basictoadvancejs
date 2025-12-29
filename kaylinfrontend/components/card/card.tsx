import React from 'react'

const Card = (props) => {
  return (
   <div className='shadow-sm p-4 m-4 rounded-lg border border-gray-200'>
   {props.products.name }
   <div>{props.products.price}</div>
   <img src={props.products.image_url} alt={props.products.name} className="w-32 h-32 object-cover"/>
   </div>
  )
}

export default Card