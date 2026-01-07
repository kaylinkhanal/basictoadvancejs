
import { ShoppingCart, Star } from "lucide-react";
import React from "react";

const cart = (props) => {
  return (
    <div className="shadow-sm p-4 m-4 rounded-lg border border-gray-200">
      {props.products.name}
      <div>
         $ {props.products.price}
      </div>
      <img
        src={props.products.image_url}
        alt={props.products.name}
        className="w-32 h-32 object-cover"
      />
      <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm text-gray-700">
            {props.products.rating}
          </span>
        </div>
         <span
        className={`inline-block mt-2 px-3 py-1 text-sm rounded-full
          ${
            props.products.inStock
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
      >
        {props.products.inStock ? "In-Stock" : "Out of Stock"}
      </span>
      <div>
        <button
        disabled={!props.products.inStock}
        className={`w-full mt-4 py-2 rounded-lg flex items-center justify-center gap-2
          ${
            props.products.inStock
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
      {/* <button className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-blue-600">
        <ShoppingCart className="mr-2 inline" /> Add to Cart
      </button> */}
    </div>
    
    </div>
    
  );
};

export default cart;
