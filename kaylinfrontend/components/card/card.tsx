import React from "react";

const Card = (props) => {
  return (
    <div className="w-80 shadow-sm rounded-xl border border-gray-200 p-4 my-4 bg-gray-900 flex flex-col">
      <div className="flex-1 text-white">
        <img
          src={props.products.image_url}
          alt={props.products.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <a href="#" className="text-lg font-semibold">
          {props.products.name}
        </a>
        <p className="text-sm text-amber-100 line-clamp-1">
          {props.products.description}
        </p>
        <div className="text-sm flex text-gray-200 mb-3 mt-3 gap-1">
          Category:
          <p className="text-white font-semibold">{props.products.category}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-200">Price:</p>

          <div className="text-xl font-bold">
            {props.products.currency}
            {props.products.price}
          </div>
        </div>
        {props.products.in_stock ? (
          <>
            <div className="my-4">
              <p className="text-sm font-medium text-gray-200 mb-1">
                Sizes Available:
              </p>
              <div className="flex gap-2 flex-wrap">
                {props.products.sizes.map((size) => (
                  <label key={size} className="cursor-pointer">
                    <input type="radio" className="hidden peer" />
                    <span
                      className="px-3 py-1 text-sm border rounded-md border-gray-300 text-white-700 peer-checked:border-white
            peer-checked:bg-amber-200 peer-checked:text-black hover:border-white transition"
                    >
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-200 mb-1">
                Color Available:
              </p>
              <div className="flex gap-2 flex-wrap">
                {props.products.colors.map((color) => (
                  <label key={color} className="cursor-pointer">
                    <input type="radio" className="hidden peer" />
                    <span
                      className="px-3 py-1 text-sm border rounded-md border-gray-300 text-white-700 peer-checked:border-white
            peer-checked:bg-amber-200 peer-checked:text-black hover:border-white transition"
                    >
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mt-4 text-center text-red-600 font-semibold">
            Not Available
          </div>
        )}
      </div>
      <button className="mt-6 w-full bg-white text-black py-2 rounded-lg cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
