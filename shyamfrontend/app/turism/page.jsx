import React from "react";
import Image from "next/image";

const places = [
  {
    name: "Kathmandu Valley",
    desc: "Cultural and historical heart of Nepal.",
    img: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
  },
  {
    name: "Pokhara",
    desc: "City of lakes and gateway to Annapurna.",
    img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  },
  {
    name: "Lumbini",
    desc: "Birthplace of Lord Buddha.",
    img: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
  },
  {
    name: "Chitwan National Park",
    desc: "Wildlife and jungle safari destination.",
    img: "https://images.unsplash.com/photo-1599465221762-5a3aef9f37c1",
  },
];

export default function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
        }}
      >
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Tourism in Nepal
          </h1>
          <p className="text-white mt-4 text-lg">
            Explore Nature, Culture and Adventure
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">About Nepal</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          Nepal is a beautiful country rich in natural beauty, cultural heritage
          and adventure tourism. From the Himalayas to historical temples, Nepal
          attracts tourists from all over the world.
        </p>
      </section>

      {/* Tourist Places */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Major Tourist Places
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <div className="relative h-40 w-full">
                <Image src={place.img} alt={place.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Importance */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Importance of Tourism
        </h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-700">
          <li>Source of foreign income</li>
          <li>Employment opportunities</li>
          <li>Cultural preservation</li>
          <li>International recognition</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-5">
        <p>© 2026 Tourism in Nepal | React Project</p>
      </footer>
    </div>
  );
}