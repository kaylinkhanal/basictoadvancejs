"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Card = (props) => {
    const router = useRouter();

  const handleCardClick = () => {
    router.push(`/ecommerce/product/${props.products.id}`);
  };
  return (
    <div 
     onClick={handleCardClick}
      className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 m-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl h-full cursor-pointer"
    >
      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {props.products.name}
      </h2>

      {/* Product Image */}
      <img
        src={props.products.image_url}
        alt={props.products.name}
        className="w-40 h-40 object-cover rounded-lg mb-3 transition-transform transform hover:scale-105"
      />

      {/* Rating */}
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-700 font-medium">{props.products.rating}</span>
      </div>

      {/* Add to Cart Button */}
      
    </div>
  )
}

export default Card