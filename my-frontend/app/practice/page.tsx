import Card from '@/components/card/page';
import React from 'react';

const HappyNewYear = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
      {/* <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg mb-6">
        🎉 Happy New Year 2026! 🎉
      </h1>
      <p className="text-xl text-white text-center max-w-lg">
        Wishing you a year filled with new hopes, joys, and beginnings. May this new year bring success, happiness, and peace to you and your loved ones.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300">
        Celebrate 🎆
      </button> */}
      <Card/>
    </div>
  );
};

export default HappyNewYear;
