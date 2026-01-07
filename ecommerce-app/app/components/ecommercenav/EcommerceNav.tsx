'use client'
import { HeartPlus, ShoppingCart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { navData } from '../../data/navData'

const EcommerceNav = ({ 
  cartCount, 
  wishlistCount,
  onToggleCart,
  onToggleWishlist,
  onOpenLogin 
}: { 
  wishlistCount?: number; 
  cartCount: number;
  
  onToggleCart: () => void;
  onToggleWishlist: () => void;
  onOpenLogin: () => void;
}) => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  
  // Only show cart count after component mounts (client-side only)
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="relative w-full bg-white">
      {/* Main Navbar */}
      <div className="min-h-[4.5rem] flex items-center px-4">
        {/* Logo left */}
        <div className="flex items-center">
          <img
            src="https://www.citypng.com/public/uploads/preview/black-nike-logo-transparent-background-701751694777156f3ewilq1js.png?v=2025081506"
            className="h-10 w-10 rounded-full"
            alt="Nike Logo"
          />
        </div>

        {/* Centered menu */}
        <div className="flex-1 flex justify-center gap-8 relative">
          {navData.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-gray-600 text-black font-bold py-6 transition-colors">
                {item.label}
              </button>
            </div>
          ))}

          {/* Login button */}
          <div className='flex flex-col items-center justify-center'>
          <button 
            onClick={onOpenLogin} 
            className='text-black font-serif font-extrabold ml-10 bg-yellow-400 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-300'
          >
            Login
          </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder='Search' 
            className='bg-white text-black h-10 rounded-full border-2 w-50 mr-5 pl-3 pr-3 py-2 border-black focus:border-green-500 outline-none' 
          />
          
          <div className='relative flex items-center'>
            <button onClick={onToggleWishlist} className="relative mr-3">
              <HeartPlus className='text-black fill-red-400'/>
              {mounted && wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button onClick={onToggleCart} className="relative">
              <ShoppingCart className='text-black fill-black'/>
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Dropdown Mega Menu */}
      {hovered && (
        <div 
          className="absolute left-0 right-0 top-full bg-white shadow-lg z-50 border-t border-gray-200"
          onMouseEnter={() => setHovered(hovered)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex justify-center px-4 py-8">
            <div className="flex gap-20 justify-center">
              {navData
                .find((item) => item.label === hovered)
                ?.sections.map((section) => (
                  <div key={section.title} className="min-w-[180px]">
                    <h3 className="font-bold text-black mb-3 text-sm">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link}>
                          <span className="text-gray-600 hover:text-black transition text-sm block cursor-pointer">
                            {link}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EcommerceNav