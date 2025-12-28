import React from 'react'

const Card = (props) => {
  return (
    <div className=' bg-gray-200 rounded-2xl m-4 p-4 h-auto w-auto'>
        <div>{props.person.name}</div>
        <div>{props.person.position}</div>
        <div className='text-black-100 font-serif hover:text-2xl'>Address:{props.person.address.city}</div>
        <img className="h-32 w-32
 content-center"src={props.person.image_url} alt="person1" />
        <button className='flex flex-start ring-2 ring-red-200 m-4 rounded-sm bg-green-200 text-pink hover:text-blue-700 hover:bg-yellow-200'>Add to cart</button>
    </div>
  )
}

export default Card;