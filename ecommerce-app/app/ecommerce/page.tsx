"use client"
import Card from '../components/card/card'
import EcommerceNav from '../components/ecommercenav/EcommerceNav'
import EcomFooter from '../components/ecomfooter/ecomfooter'
import Slider from '../components/slider/slider'
import { useEffect, useState } from 'react'
import EcomSidebar from '../components/ecommerceside/ecomSidebar'
import productList from '../data/productList'
import Modal from '../components/modal' // Import Modal
import { LoginFormContent } from './ecomlogin/page'
import { SignupFormContent } from './ecomsignup/page'
import EcomHero from './ecomhero/page'

const Ecommerce = () => {
  // Initialize cart from localStorage (safe parse) with quantity normalization
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Normalize quantities to numbers
        return parsed.map(item => ({
          ...item,
          quantity: Number(item.quantity) || 1,
          price: Number(item.price) || 0
        }));
      }
      return [];
    } catch {
      return [];
    }
  });

  // Cart count = number of UNIQUE items (not total quantity)
  const cartCount = cartItems.length;

  // Auth modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  // Persist cartItems to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch {
      // ignore write errors
    }
  }, [cartItems]);

  // Keep in sync with other pages (payment page) that may clear localStorage keys.
  useEffect(() => {
    const syncFromStorage = () => {
      try {
        // Prefer canonical cartItems key, then fallback to checkoutCartItems, then buyNowItem
        const stored = localStorage.getItem("cartItems") || localStorage.getItem("checkoutCartItems");
        if (stored) {
          const parsed = JSON.parse(stored);
          // Normalize quantities when syncing
          setCartItems(parsed.map(item => ({
            ...item,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0
          })));
          return;
        }
        const buyNow = localStorage.getItem("buyNowItem");
        if (buyNow) {
          const parsed = JSON.parse(buyNow);
          setCartItems([{
            ...parsed,
            quantity: Number(parsed.quantity) || 1,
            price: Number(parsed.price) || 0
          }]);
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

  // Updated to handle selectedColor parameter
  const updateQuantity = (id: string, selectedColor: string, newQuantity: number) => {
    const normalizedQuantity = Number(newQuantity);
    
    if (normalizedQuantity <= 0) {
      // If quantity is 0 or less, remove the item
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

  // Updated to handle selectedColor parameter
  const removeFromCart = (id: string, selectedColor: string) => {
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

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart(prev => !prev);

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

  const [wishlistCount, setWishlistCount] = useState(0);

// Load wishlist count
useEffect(() => {
  const loadWishlist = () => {
    const saved = localStorage.getItem("wishlistItems");
    const wishlist = saved ? JSON.parse(saved) : [];
    setWishlistCount(wishlist.length);
  };
  
  loadWishlist();
  window.addEventListener('storage', loadWishlist);
  return () => window.removeEventListener('storage', loadWishlist);
}, []);

  return (
    <div className='flex h-screen'>
      
      <div className='flex-1'>
        <EcommerceNav 
          cartCount={cartCount}
           
          onToggleCart={toggleCart}
          onOpenLogin={handleOpenLogin}
        />
        <EcomHero />

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

      <div className={`
        transition-transform 
        duration-300 ease-in-out h-screen
        ${showCart ? "w-80" : "w-0"} overflow-hidden `}
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