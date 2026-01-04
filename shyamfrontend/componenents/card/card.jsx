import { ShoppingCart, Star } from 'lucide-react'
import React from 'react'

const Card = (props) => {
 
  return (
  <>
   <div  className='shadow-sm  p-4 m-4 rounded-lg border border-gray-100'>
   {props.products.name }

   <img src={props.products.image_url} alt={props.products.name} className="w-32 h-32 object-cover"/>
   <div >${props.products?.price} </div>
   <div>{props.products?.category}</div>
   
   <div className='text-center'><Star className=' text-yello-500'/>{props.products?.rating}</div>
   <div  className='  bg-green-400 flex text-center p-1 m-2 rounded-l' > <a href='shop '><ShoppingCart className='mr-2 text-black '/></a>Shop</div>


   </div>
   
</>
  )
}

export default Card