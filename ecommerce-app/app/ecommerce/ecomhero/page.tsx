import React from 'react'
const categories = [
  {
    name: "Shoes",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20221013/pngtree-nike-sneakers-showcased-in-tyumen-store-leather-product-nike-shoes-photo-image_49118888.jpg",
  },
  {
    name: "Hoodie",
    image: "https://wallpapercave.com/wp/wp12391503.jpg",
  },
  {
    name: "Bags",
    image: "https://www.golfposer.com/media/catalog/product/n/i/nike-golf-shoe-bag-classic-shoebox-black-2024-da7337-013-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  },
   {
    name: "Track-Suits",
    image: "https://thumblr.uniid.it/product/171565/3f985fcbe7f4.jpg?width=3840&format=webp&q=75",
  },
];
const EcomHero = () => {
  return (
     <section className="w-fit py-12 px-4 cursor-pointer">
      <h1 className="text-3xl font-bold text-center mb-10">
        Shop by Category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {categories.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EcomHero