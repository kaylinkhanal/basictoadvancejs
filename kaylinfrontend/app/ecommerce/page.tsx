import Card from "../../../sonyfrontend/components/card/card";
import React from "react";

const Ecommerce = () => {
  const productList = [
    {
      id: "nk-001",
      name: "Nike Air Max 270",
      category: "Running",
      price: 160.0,
      currency: "USD",
      rating: 4.8,
      reviews_count: 1240,
      colors: ["White/Black/University Red", "Triple Black", "Anthracite"],
      description:
        "Nike's first lifestyle Air Max brings you style, comfort and big attitude. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      image_url:
        "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005655.jpg?ga=GA1.1.562570709.1766542571&semt=ais_hybrid&w=740&q=80",
      in_stock: true,
      sizes: [7, 8, 9, 10, 11, 12],
    },
    {
      id: "nk-002",
      name: "Nike Air Force 1 '07",
      category: "Lifestyle",
      price: 115.0,
      currency: "USD",
      rating: 4.9,
      reviews_count: 5600,
      colors: ["White", "Black"],
      description:
        "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      image_url:
        "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005673.jpg?ga=GA1.1.562570709.1766542571&semt=ais_hybrid&w=740&q=80",
      in_stock: true,
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: "nk-003",
      name: "Nike Pegasus 40",
      category: "Running",
      price: 130.0,
      currency: "USD",
      rating: 4.5,
      reviews_count: 890,
      colors: ["Volt/Black", "Blue Whisper", "Black/White"],
      description:
        "A springy ride for every run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in sensitive areas.",
      image_url:
        "https://img.freepik.com/free-photo/close-up-futuristic-sneakers-showcase_23-2151005693.jpg?ga=GA1.1.562570709.1766542571&semt=ais_hybrid&w=740&q=80",
      in_stock: false,
      sizes: [8, 9, 10],
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 px-4">
      {productList.map((item, id) => {
        return <Card products={item} />;
      })}
    </div>
  );
};

export default Ecommerce;
