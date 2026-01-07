"use client"
import React, { useState, useEffect } from "react";

const MediaSlider = () => {
  const mediaItems = [
    {
      type: "video",
      src: "/videos/sneakers.mp4", // your video
    },
    { type: "image", src: "https://cdn.wallpapersafari.com/6/52/2gnxT0.jpg" },
    { type: "image", src: "https://wallpapers.com/images/hd/cool-nike-shoe-ft6gor5zjwt950u2.jpg" },
    { type: "image", src: "https://images2.alphacoders.com/649/649977.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000); // 3 seconds
    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <div className="mt-4 w-full mx-auto h-screen">
      <div className="overflow-hidden rounded-lg shadow-lg w-full h-screen">
        {mediaItems[currentIndex].type === "video" ? (
          <video
            src={mediaItems[currentIndex].src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={mediaItems[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 gap-2">
        {mediaItems.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              idx === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;
