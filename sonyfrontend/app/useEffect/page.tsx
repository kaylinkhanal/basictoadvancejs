"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState(2);

  useEffect(() => {
    console.log(Math.random());
  }, [action]);
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex">
        <button
          className="cursor-pointer border border-gray-400 bg-green-700 text-white text-3xl rounded-full p-3"
          onClick={() => setCount(Math.min(10, count + 1))}
        >
          +
        </button>
        <span className="text-blue border border-gray-600 text-lg w-25 text-center py-5 mx-6">
          {count}
        </span>
        <button
          className="cursor-pointer border border-red-400 bg-red-700 text-white text-3xl rounded-full p-3"
          onClick={() => setCount(Math.max(0, count - 1))}
        >
          -
        </button>
      </div>
      <div className="mt-20">
        {action}
        <button
          className="cursor-pointer border border-red-400 bg-red-700 text-white text-3xl rounded-full p-3"
          onClick={() => setAction(Math.random)}
        >
          set random
        </button>
      </div>
    </div>
  );
};

export default Home;
