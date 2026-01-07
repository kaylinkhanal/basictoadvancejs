"use client"
import Card from '../components/card/card'
import EcommerceNav from '../components/ecommercenav/EcommerceNav'
import EcomFooter from '../components/ecomfooter/ecomfooter'
import Slider from '../components/slider/slider'
import { useEffect, useState } from 'react'
import EcomSidebar from '../components/ecommerceside/ecomSidebar'
import WishlistSidebar from '../components/wishlistside/WishlistSidebar'
import productList from '../data/productList'
import Modal from '../components/modal' // Import Modal
import { LoginFormContent } from './ecomlogin/page'
import { SignupFormContent } from './ecomsignup/page'

const Ecommerce = () => {
  // Initialize cart from localStorage (safe parse)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Initialize wishlist from localStorage
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlistItems");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cart count = number of UNIQUE items (not total quantity)
  const cartCount = cartItems.length;

  // Wishlist count
  const wishlistCount = wishlistItems.length;

  // Auth modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  // Sidebar states
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  // Persist cartItems to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch {
      // ignore write errors
    }
  }, [cartItems]);

  // Persist wishlistItems to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    } catch {
      // ignore write errors
    }
  }, [wishlistItems]);

  // Keep cart in sync with other pages
  useEffect(() => {
    const syncFromStorage = () => {
      try {
        // Prefer canonical cartItems key, then fallback to checkoutCartItems, then buyNowItem
        const stored = localStorage.getItem("cartItems") || localStorage.getItem("checkoutCartItems");
        if (stored) {
          setCartItems(JSON.parse(stored));
          return;
        }
        const buyNow = localStorage.getItem("buyNowItem");
        if (buyNow) {
          setCartItems([JSON.parse(buyNow)]);
          return;
        }
        // nothing found -> empty cart
        setCartItems([]);
      } catch {
        setCartItems([]);
      }
    };

    // Listen to storage events (useful when other tabs update localStorage)
    const onStorage = (e: StorageEvent) => {
      if (!e.key) return;
      if (["cartItems", "checkoutCartItems", "buyNowItem", "checkoutSource"].includes(e.key)) {
        syncFromStorage();
      }
    };

    // Also sync when window/tab becomes visible (helps after same-tab navigation/redirect)
    const onFocus = () => syncFromStorage();

    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onFocus);

    // run once on mount to ensure we are fully synced
    syncFromStorage();

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Keep wishlist in sync with other pages
  useEffect(() => {
    const syncWishlistFromStorage = () => {
      try {
        const saved = localStorage.getItem("wishlistItems");
        setWishlistItems(saved ? JSON.parse(saved) : []);
      } catch {
        setWishlistItems([]);
      }
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === "wishlistItems" || !e.key) {
        syncWishlistFromStorage();
      }
    };

    const onFocus = () => syncWishlistFromStorage();

    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onFocus);

    syncWishlistFromStorage();

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  const updateQuantity = (id, selectedColor, newQuantity) => {
    const normalizedQuantity = Number(newQuantity);
    
    if (normalizedQuantity <= 0) {
      removeFromCart(id, selectedColor);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id && item.selectedColor === selectedColor
            ? { ...item, quantity: normalizedQuantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (id, selectedColor) => {
    setCartItems((prev) => 
      prev.filter((item) => !(item.id === id && item.selectedColor === selectedColor))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("checkoutCartItems");
    } catch {}
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    try {
      localStorage.removeItem("wishlistItems");
    } catch {}
  };

  const toggleCart = () => {
    setShowCart(prev => !prev);
    setShowWishlist(false); // Close wishlist when opening cart
  };

  const toggleWishlist = () => {
    setShowWishlist(prev => !prev);
    setShowCart(false); // Close cart when opening wishlist
  };

  // Auth modal handlers
  const handleOpenLogin = () => {
    setAuthView('login');
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleSwitchToSignup = () => {
    setAuthView('signup');
  };

  const handleSwitchToLogin = () => {
    setAuthView('login');
  };

  // Handle successful login - just close the modal
  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    // Optionally, you can add any other logic here like:
    // - Updating user state
    // - Fetching user data
    // - Showing a success toast
    console.log('User logged in successfully');
  };

  // Handle successful signup - just close the modal
  const handleSignupSuccess = () => {
    setIsAuthModalOpen(false);
    console.log('User signed up successfully');
  };

  return (
    <div className='flex h-screen'>
      {/* Wishlist Sidebar - Left side */}
      <div className={`
        transition-all 
        duration-300 ease-in-out h-screen
        ${showWishlist ? "w-96" : "w-0"} overflow-hidden z-40`}
      >
        <WishlistSidebar
          wishlistItems={wishlistItems}
          onRemove={removeFromWishlist}
          onClearWishlist={clearWishlist}
          onClose={() => setShowWishlist(false)}
        />
      </div>

      <div className='flex-1'>
        <EcommerceNav 
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onToggleCart={toggleCart}
          onToggleWishlist={toggleWishlist}
          onOpenLogin={handleOpenLogin}
        />

        <Slider />

        <div className='grid grid-cols-4 gap-6 p-6'>
          {
            productList.map((item) => (
              <Card key={item.id} products={item} />
            ))
          }
        </div>

        <EcomFooter />
      </div>

      {/* Cart Sidebar - Right side */}
      <div className={`
        transition-all 
        duration-300 ease-in-out h-screen
        ${showCart ? "w-96" : "w-0"} overflow-hidden z-40`}
      >
        <EcomSidebar
          cartItems={cartItems}
          onRemove={removeFromCart}
          onClearCart={clearCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>

      {/* Auth Modal */}
      <Modal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal}>
        {authView === 'login' ? (
          <LoginFormContent 
            onSwitchToSignup={handleSwitchToSignup}
            onLoginSuccess={handleLoginSuccess}
          />
        ) : (
          <SignupFormContent 
            onSwitchToLogin={handleSwitchToLogin}
            onSignupSuccess={handleSignupSuccess}
          />
        )}
      </Modal>
    </div>
  )
}

export default Ecommerce