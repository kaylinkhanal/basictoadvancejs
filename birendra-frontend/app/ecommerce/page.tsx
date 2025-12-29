'use client'
import Card from '@/components/card/card'
import React from 'react'

const Ecommerce = () => {
     const productList = [
    {
      "id": "nk-001",
      "name": "Nike Air Max 270",
      "category": "Running",
      "price": 160.00,
      "currency": "USD",
      "rating": 4.8,
      "reviews_count": 1240,
      "colors": ["White/Black/University Red", "Triple Black", "Anthracite"],
      "description": "Nike's first lifestyle Air Max brings you style, comfort and big attitude. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      "image_url": "https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/26f78b79-0a89-4d5f-8fa9-ab583bfa1432/image.jpg",
      "in_stock": true,
      "sizes": [7, 8, 9, 10, 11, 12]
    },
    {
      "id": "nk-002",
      "name": "Nike Air Force 1 '07",
      "category": "Lifestyle",
      "price": 115.00,
      "currency": "USD",
      "rating": 4.9,
      "reviews_count": 5600,
      "colors": ["White", "Black"],
      "description": "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      "image_url": "https://t4.ftcdn.net/jpg/04/10/65/53/360_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.webp",
      "in_stock": true,
      "sizes": [6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
      "id": "nk-003",
      "name": "Nike Pegasus 40",
      "category": "Running",
      "price": 130.00,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 890,
      "colors": ["Volt/Black", "Blue Whisper", "Black/White"],
      "description": "A springy ride for every run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in sensitive areas.",
      "image_url": "https://t4.ftcdn.net/jpg/04/79/11/23/240_F_479112366_dku6Ufwd9OVnRB3AZxonMgRzuZYeTTYY.jpg",
      "in_stock": false,
      "sizes": [8, 9, 10],
    },
    
      {
      "id": "nk-004",
      "name": "Nike Air Max 270",
      "category": "Running",
      "price": 160.00,
      "currency": "USD",
      "rating": 4.8,
      "reviews_count": 1240,
      "colors": ["White/Black/University Red", "Triple Black", "Anthracite"],
      "description": "Nike's first lifestyle Air Max brings you style, comfort and big attitude. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      "image_url": "https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/26f78b79-0a89-4d5f-8fa9-ab583bfa1432/image.jpg",
      "in_stock": true,
      "sizes": [7, 8, 9, 10, 11, 12]
    },
    {
      "id": "nk-005",
      "name": "Nike Air Force 1 '07",
      "category": "Lifestyle",
      "price": 115.00,
      "currency": "USD",
      "rating": 4.9,
      "reviews_count": 5600,
      "colors": ["White", "Black"],
      "description": "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      "image_url": "https://t4.ftcdn.net/jpg/04/10/65/53/360_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.webp",
      "in_stock": true,
      "sizes": [6, 7, 8, 9, 10, 11, 12, 13]
    }
     
    
  ]

  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product.name)
    alert(`${product.name} added to cart`)
  }

  return (
    <div className='flex flex-wrap'>
       {
        productList.map((item,id)=>{
            return <Card 
            key={id} 
            products={item}
            onAddToCart={handleAddToCart}
            />
        })
       }
    </div>
  )
}

export default Ecommerce