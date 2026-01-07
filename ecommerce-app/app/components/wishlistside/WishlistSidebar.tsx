"use client"
import React from 'react'
import { X, Heart, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface WishlistItem {
  id: string
  name: string
  price: number
  currency: string
  image_url: string
  selectedSize: string
  selectedColor: string
  selectedColorImage: string
  category: string
  rating: number
  addedAt: string
}

interface WishlistSidebarProps {
  wishlistItems: WishlistItem[]
  onRemove: (id: string) => void
  onClearWishlist: () => void
  onClose: () => void
}

const WishlistSidebar = ({ 
  wishlistItems, 
  onRemove, 
  onClearWishlist,
  onClose 
}: WishlistSidebarProps) => {
  const router = useRouter()

  const handleViewProduct = (productId: string) => {
    router.push(`/ecommerce/product/${productId}`)
    onClose()
  }

  return (
    <div className="h-full bg-gradient-to-b from-pink-50 to-white shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 fill-white" />
          <div>
            <h2 className="text-xl font-bold">My Wishlist</h2>
            <p className="text-pink-100 text-sm">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h3>
            <p className="text-gray-600 text-sm mb-6">
              Save items you love for later!
            </p>
            <button 
              onClick={() => {
                router.push('/ecommerce')
                onClose()
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-pink-100"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div 
                    className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-80 transition"
                    onClick={() => handleViewProduct(item.id)}
                  >
                    <img 
                      src={item.selectedColorImage || item.image_url} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="font-bold text-gray-900 mb-1 cursor-pointer hover:text-pink-600 transition truncate"
                      onClick={() => handleViewProduct(item.id)}
                    >
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <span>★</span>
                        <span className="text-gray-600">{item.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Size:</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-semibold">
                          {item.selectedSize}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Color:</span>
                        <span className="text-xs">{item.selectedColor}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="text-lg font-bold text-pink-600">
                        {item.currency}{item.price.toFixed(2)}
                      </div>
                      
                      <button
                        onClick={() => onRemove(item.id)}
                        className="p-2 hover:bg-red-50 rounded-full transition group"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition" />
                      </button>
                    </div>

                    <button
                      onClick={() => handleViewProduct(item.id)}
                      className="w-full mt-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      {wishlistItems.length > 0 && (
        <div className="p-4 border-t border-pink-100 bg-white">
          <button
            onClick={onClearWishlist}
            className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition flex items-center justify-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Clear Wishlist
          </button>
          
          <button
            onClick={() => {
              router.push('/ecommerce')
              onClose()
            }}
            className="w-full mt-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  )
}

export default WishlistSidebar