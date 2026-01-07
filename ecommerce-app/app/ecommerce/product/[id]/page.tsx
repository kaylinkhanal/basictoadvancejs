"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import productList from '../../../data/productList'
import EcommerceNav from '../../../components/ecommercenav/EcommerceNav'
import EcomFooter from '../../../components/ecomfooter/ecomfooter'
import EcomSidebar from '../../../components/ecommerceside/ecomSidebar'
import WishlistSidebar from '../../../components/wishlistside/WishlistSidebar'

const ProductDetails = () => {
  const params = useParams()
  const router = useRouter()
  const productId = params.id

  // Find the specific product based on the ID from URL
  const product = productList.find(p => p.id === productId)

  // State for selected size and color
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null)
  const [currentImage, setCurrentImage] = useState(product?.colors[0]?.image_url || product?.image_url)
  const [quantity, setQuantity] = useState(1)

  // Cart state - synced with localStorage
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState([])
  const [showWishlist, setShowWishlist] = useState(false)
  const [isInWishlist, setIsInWishlist] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      const saved = localStorage.getItem("cartItems")
      setCartItems(saved ? JSON.parse(saved) : [])
    }
    loadCart()

    // Listen for storage changes (when cart is updated from other pages)
    window.addEventListener('storage', loadCart)
    return () => window.removeEventListener('storage', loadCart)
  }, [])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const loadWishlist = () => {
      const saved = localStorage.getItem("wishlistItems")
      const wishlist = saved ? JSON.parse(saved) : []
      setWishlistItems(wishlist)
      
      // Check if current product is in wishlist
      if (product) {
        const inWishlist = wishlist.some(item => item.id === product.id)
        setIsInWishlist(inWishlist)
      }
    }
    loadWishlist()

    // Listen for storage changes
    window.addEventListener('storage', loadWishlist)
    return () => window.removeEventListener('storage', loadWishlist)
  }, [product])

  // Cart count
  const cartCount = cartItems.length

  // Wishlist count
  const wishlistCount = wishlistItems.length

  const toggleCart = () => {
    setShowCart(prev => !prev)
    setShowWishlist(false) // Close wishlist when opening cart
  }

  const toggleWishlist = () => {
    setShowWishlist(prev => !prev)
    setShowCart(false) // Close cart when opening wishlist
  }

  // Add to wishlist function
  const handleAddToWishlist = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    const wishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image_url: product.image_url,
      selectedSize,
      selectedColor: selectedColor.name,
      selectedColorImage: currentImage,
      category: product.category,
      rating: product.rating,
      addedAt: new Date().toISOString()
    }

    // Check if item already exists in wishlist
    const existingItem = wishlistItems.find(item => item.id === product.id)

    if (existingItem) {
      alert('This item is already in your wishlist!')
    } else {
      const updatedWishlist = [...wishlistItems, wishlistItem]
      setWishlistItems(updatedWishlist)
      setIsInWishlist(true)
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist))
      
      // Trigger storage event for other tabs/pages
      window.dispatchEvent(new Event('storage'))
      
      alert('Added to wishlist successfully!')
      setShowWishlist(true) // Open wishlist sidebar to show the added item
    }
  }

  // Remove from wishlist function
  const handleRemoveFromWishlist = () => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== product.id)
    setWishlistItems(updatedWishlist)
    setIsInWishlist(false)
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist))
    
    // Trigger storage event for other tabs/pages
    window.dispatchEvent(new Event('storage'))
    
    alert('Removed from wishlist!')
  }

  // Remove from wishlist by ID (for sidebar)
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== id)
    setWishlistItems(updatedWishlist)
    
    // Update isInWishlist if current product was removed
    if (product && id === product.id) {
      setIsInWishlist(false)
    }
    
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist))
    window.dispatchEvent(new Event('storage'))
  }

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([])
    setIsInWishlist(false)
    localStorage.removeItem("wishlistItems")
    window.dispatchEvent(new Event('storage'))
  }

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <EcommerceNav 
          cartCount={0} 
          onToggleCart={() => {}} 
          onToggleWishlist={() => {}}
          wishlistCount={0} 
        />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-md bg-white/80 backdrop-blur rounded-2xl p-10 shadow-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push('/ecommerce')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              ← Back to Shop
            </button>
          </div>
        </div>
        <EcomFooter />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    const newItem = {
      ...product,
      selectedSize,
      selectedColor: selectedColor.name, // Save color name
      selectedColorImage: currentImage, // Save selected color's image
      quantity
    }

    // Check if item already exists with same size and color
    const existingItem = cartItems.find(
      item => item.id === product.id && 
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor.name
    )

    if (existingItem) {
      alert('This item with the selected size and color is already in your cart!')
    } else {
      // Add new item to cart
      const updatedCart = [...cartItems, newItem]
      setCartItems(updatedCart)
      localStorage.setItem('cartItems', JSON.stringify(updatedCart))
      
      // Trigger storage event for other tabs/pages
      window.dispatchEvent(new Event('storage'))
      
      alert('Added to cart successfully!')
      setShowCart(true) // Open sidebar to show the added item
    }
  }

  const updateQuantity = (id, selectedColor, newQuantity) => {
    const normalizedQuantity = Number(newQuantity)
    
    if (normalizedQuantity <= 0) {
      removeFromCart(id, selectedColor)
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === id && item.selectedColor === selectedColor
          ? { ...item, quantity: normalizedQuantity }
          : item
      )
      setCartItems(updatedCart)
      localStorage.setItem('cartItems', JSON.stringify(updatedCart))
      window.dispatchEvent(new Event('storage'))
    }
  }

  const removeFromCart = (id, selectedColor) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === id && item.selectedColor === selectedColor)
    )
    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('storage'))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems")
    localStorage.removeItem("checkoutCartItems")
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Wishlist Sidebar - Left side */}
      <div className={`
        transition-all 
        duration-300 ease-in-out h-screen
        ${showWishlist ? "w-96" : "w-0"} overflow-hidden z-40`}
      > 
        <WishlistSidebar 
          wishlistItems={wishlistItems} 
          onRemove={(id) => removeFromWishlist(id)} 
          onClearWishlist={clearWishlist}
          onClose={() => setShowWishlist(false)}
        /> 
      </div>

      <div className="flex-1 flex flex-col">
        <EcommerceNav 
          cartCount={cartCount} 
          wishlistCount={wishlistCount}
          onToggleCart={toggleCart}
          onToggleWishlist={toggleWishlist}
        />
        
        <main className="flex-1 container mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/ecommerce')}
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm font-medium"
              >
                <span className="text-lg">←</span>
                <span>Back to Shop</span>
              </button>
              <div className="text-xs text-gray-400 mt-1">Home / {product.category} / <span className="text-gray-700 font-medium">{product.name}</span></div>
            </div>
            <div className="flex items-center gap-3">
              
            </div>
          </div>

          {/* Main card */}
          <section className="grid md:grid-cols-2 gap-10">
            {/* Left - image + thumbnails */}
            <div className="flex gap-6">
              {/* Thumbnails column */}
              <div className="hidden md:flex flex-col gap-4">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedColor(color)
                      setCurrentImage(color.image_url)
                    }}
                    className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-transform transform hover:scale-105 ${selectedColor?.name === color.name ? 'ring-2 ring-yellow-400 border-transparent' : 'border-gray-200'}`}
                    aria-label={`Select ${color.name}`}
                  >
                    <img src={color.image_url} alt={color.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Hero image */}
              <div className="flex-1 bg-gradient-to-br from-white/60 to-gray-50 rounded-3xl p-6 shadow-2xl backdrop-blur-sm flex items-center justify-center relative">
                {/* Out of Stock Badge */}
                {!product.in_stock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    Out of Stock
                  </div>
                )}
                
                <div className="relative w-full max-w-2xl">
                  <div className="absolute -left-6 -top-6 w-40 h-40 rounded-full bg-yellow-200 opacity-20 blur-3xl pointer-events-none" />
                  <div className="absolute -right-8 bottom-8 w-44 h-44 rounded-full bg-green-200 opacity-10 blur-3xl pointer-events-none" />
                  <img
                    src={currentImage}
                    alt={product.name}
                    className={`w-full h-[520px] object-contain rounded-2xl bg-white p-6 shadow-inner ${!product.in_stock ? 'opacity-60' : ''}`}
                  />
                </div>
              </div>
            </div>

            {/* Right - product info */}
            <aside className="flex flex-col justify-between">
              <div className="bg-white/85 backdrop-blur rounded-2xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800">
                      {product.category}
                    </span>
                    <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                      {product.name}
                    </h1>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-2 text-yellow-500">
                        <span className="text-2xl">★</span>
                        <span className="font-bold text-lg text-gray-800">{product.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">({product.reviews_count.toLocaleString()} reviews)</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-2">Price</div>
                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
                      {product.currency}{product.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-gray-700 leading-relaxed">
                  <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
                  <p className="text-sm">{product.description}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${product.in_stock ? 'bg-green-500' : 'bg-red-400'}`} />
                    <div>
                      <div className="text-xs text-black font-bold">Availability</div>
                      <div className="text-sm font-semibold text-black">{product.in_stock ? 'In Stock' : 'Out of Stock'}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <div>
                      <div className="text-xs text-black font-bold">Shipping</div>
                      <div className="text-sm font-semibold text-black">Free over $100</div>
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedColor(color)
                          setCurrentImage(color.image_url)
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-shadow ${
                          selectedColor?.name === color.name
                            ? 'bg-yellow-50 ring-1 ring-yellow-300 shadow-sm'
                            : 'bg-white border border-gray-100 hover:shadow-sm'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full overflow-hidden border" title={color.name}>
                          <img src={color.image_url} alt={color.name} className="w-full h-full object-cover" />
                        </span>
                        <span className="text-sm font-medium text-gray-700">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Select Size { !selectedSize && <span className="text-red-500 text-xs">*</span> }</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[56px] h-12 rounded-lg flex items-center justify-center font-semibold transition ${
                          selectedSize === size
                            ? 'bg-yellow-400 text-black shadow-sm transform scale-105'
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-yellow-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity - Only show for in-stock items */}
                {product.in_stock && (
                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 mb-2">Quantity</h4>
                      <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-full text-red-600 border border-red-200 flex items-center justify-center hover:bg-red-50 transition font-bold"
                        >
                          −
                        </button>
                        <div className="text-xl font-bold text-gray-900 w-12 text-center">{quantity}</div>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-full border border-green-200 text-green-600 flex items-center justify-center hover:bg-green-50 transition font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="ml-auto flex-1">
                      <div className="text-xs text-gray-400 mb-1">Estimated total</div>
                      <div className="text-lg font-bold">{product.currency}{(product.price * quantity).toFixed(2)}</div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 space-y-3">
                  {product.in_stock ? (
                    <>
                      <button
                        onClick={handleAddToCart}
                        className="w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:scale-103 shadow-xl"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="10" cy="20" r="1" fill="currentColor"/>
                          <circle cx="18" cy="20" r="1" fill="currentColor"/>
                        </svg>
                        Add to Cart
                      </button>

                      <button
                        onClick={() => {
                          if (!selectedSize) {
                            alert('Please select a size');
                            return;
                          }
                          
                          // Store buy now item in localStorage
                          const buyNowItem = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            currency: product.currency,
                            selectedSize,
                            selectedColor: selectedColor.name,
                            selectedColorImage: currentImage,
                            quantity,
                            image_url: currentImage
                          };
                          
                          localStorage.setItem("checkoutSource", "buynow");
                          localStorage.setItem("buyNowActive", "true");
                          localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem)); 
                          router.push('/ecommerce/buynow');
                        }}
                        className="w-full py-3 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition shadow-md"
                      >
                        Buy Now
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Out of Stock - Show Wishlist Button */}
                      {isInWishlist ? (
                        <button
                          onClick={handleRemoveFromWishlist}
                          className="w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-red-400 to-pink-500 text-white hover:scale-103 shadow-xl"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          Remove from Wishlist
                        </button>
                      ) : (
                        <button
                          onClick={handleAddToWishlist}
                          className="w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white hover:scale-103 shadow-xl"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Add to Wishlist
                        </button>
                      )}

                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                        <p className="text-red-600 font-semibold text-sm">This item is currently out of stock</p>
                        <p className="text-red-500 text-xs mt-1">Add to wishlist to be notified when available</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-gray-100 text-sm text-gray-500">
                  Product ID: <span className="font-mono text-gray-700 ml-2">{product.id}</span>
                </div>
              </div>

              {/* Feature highlights under the card */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-yellow-500 mb-2">✔</div>
                  <div className="text-xs text-gray-500">Premium</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-blue-500 mb-2">⚡</div>
                  <div className="text-xs text-gray-500">Fast Delivery</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-green-500 mb-2">🔒</div>
                  <div className="text-xs text-gray-500">Secure Pay</div>
                </div>
              </div>
            </aside>
          </section>

          {/* Additional information */}
          <section className="mt-10">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Product Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">High-quality materials and craftsmanship</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm">Free shipping on orders over $100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
                    <p className="text-gray-600 text-sm">100% secure payment processing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <EcomFooter />
      </div>

      {/* Sidebar Cart - Right side */}
      <div className={`
        transition-all 
        duration-300 ease-in-out h-screen
        ${showCart ? "w-96" : "w-0"} overflow-hidden z-40`}
      > 
        <EcomSidebar 
          cartItems={cartItems} 
          onRemove={(id, selectedColor) => removeFromCart(id, selectedColor)} 
          onClearCart={clearCart}
          onUpdateQuantity={(id, selectedColor, quantity) => updateQuantity(id, selectedColor, quantity)}
        /> 
      </div>
    </div>
  )
}

export default ProductDetails