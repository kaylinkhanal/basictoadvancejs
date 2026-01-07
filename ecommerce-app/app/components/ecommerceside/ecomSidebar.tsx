"use client"
import React, { useEffect, useState } from "react";
import Counter from "../IncDec/incdec";
import { ShoppingBag, Trash2, CreditCard } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  selectedColor: string;
  price: number;
  currency: string;
  image_url: string;
  selectedColorImage?: string;
  quantity: number;
}

interface EcomSidebarProps {
  cartItems: CartItem[];
  onRemove: (id: string, selectedColor: string) => void;
  onClearCart?: () => void;
  onUpdateQuantity: (id: string, selectedColor: string, quantity: number) => void;
}

// Helper function to normalize cart items - ensures quantities are numbers
const normalizeCartItems = (items: any[]): CartItem[] => {
  return items.map(item => ({
    ...item,
    quantity: Number(item.quantity) || 1,
    price: Number(item.price) || 0
  }));
};

const EcomSidebar = ({ cartItems, onRemove, onClearCart, onUpdateQuantity }: EcomSidebarProps) => {
  // Use an internal state so the sidebar will react to localStorage changes made elsewhere (e.g. payment-demo)
  const [localCart, setLocalCart] = useState<CartItem[]>(normalizeCartItems(cartItems));

  // Sync when parent prop changes
  useEffect(() => {
    setLocalCart(normalizeCartItems(cartItems));
  }, [cartItems]);

  // On mount, try to read persistent cart if available (fallback)
  useEffect(() => {
    try {
      const persistent = localStorage.getItem("checkoutCartItems") || localStorage.getItem("cartItems");
      if (persistent) {
        const parsed = JSON.parse(persistent);
        setLocalCart(normalizeCartItems(parsed));
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // Listen for storage events so the sidebar updates if localStorage changes in another page/tab or when payment-demo clears keys
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (!e.key) return;
      if (["checkoutCartItems", "cartItems", "buyNowItem", "checkoutSource"].includes(e.key)) {
        try {
          const cart = localStorage.getItem("checkoutCartItems");
          if (cart) {
            setLocalCart(normalizeCartItems(JSON.parse(cart)));
            return;
          }
          const fallback = localStorage.getItem("cartItems");
          if (fallback) {
            setLocalCart(normalizeCartItems(JSON.parse(fallback)));
            return;
          }
          const buyNow = localStorage.getItem("buyNowItem");
          if (buyNow) {
            setLocalCart(normalizeCartItems([JSON.parse(buyNow)]));
            return;
          }
          setLocalCart([]);
        } catch {
          setLocalCart([]);
        }
      }
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Internal quantity update handler that updates both local state and localStorage
  const handleUpdateQuantity = (id: string, selectedColor: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Don't allow quantity less than 1

    // Update local state
    setLocalCart(prev => {
      const updated = prev.map(item =>
        item.id === id && item.selectedColor === selectedColor
          ? { ...item, quantity: Number(newQuantity) }
          : item
      );

      // Also update localStorage to keep it in sync
      try {
        const cartItemsKey = localStorage.getItem("checkoutCartItems") ? "checkoutCartItems" : "cartItems";
        localStorage.setItem(cartItemsKey, JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to update localStorage:", e);
      }

      return updated;
    });

    // Also call parent's update function to keep parent in sync
    try {
      onUpdateQuantity(id, selectedColor, newQuantity);
    } catch (e) {
      // Ignore if parent callback fails
    }
  };

  // Calculate total price - this will recalculate whenever localCart changes
  const totalPrice = localCart.reduce((total, item) => {
    // Ensure both values are numbers before calculation
    const itemPrice = Number(item.price) || 0;
    const itemQuantity = Number(item.quantity) || 1;
    return total + (itemPrice * itemQuantity);
  }, 0);

  // Get currency symbol from first item (assuming all items have same currency)
  const currencySymbol = localCart.length > 0 ? localCart[0].currency : "$";

  const handleCheckout = () => {
    // Save full cart for checkout - normalize before saving
    try {
      localStorage.setItem("checkoutCartItems", JSON.stringify(localCart));
      localStorage.setItem("checkoutSource", "cart");
    } catch (e) {
      // ignore storage errors
    }

    // Navigate to checkout (if your route differs, adjust)
    window.location.href = "/ecommerce/buynow";
  };

  return (
    <aside className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col shadow-2xl relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header with glassmorphism */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/20 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Cart
              </h2>
              <p className="text-xs text-gray-400">{localCart.length} items</p>
            </div>
          </div>
          {onClearCart && localCart.length > 0 && (
            <button
              onClick={() => {
                onClearCart?.();
                // Also clear local state and localStorage
                setLocalCart([]);
                try {
                  localStorage.removeItem("checkoutCartItems");
                  localStorage.removeItem("cartItems");
                } catch {}
              }}
              className="group p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300"
            >
              <Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-300" />
            </button>
          )}
        </div>

        {/* Total Price Pill */}
        {localCart.length > 0 && (
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-3 flex justify-between items-center">
            <span className="text-xs font-medium text-gray-300">Total Amount</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {currencySymbol}
              {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Cart Items - Scrollable with custom scrollbar */}
      <div className="relative z-10 flex-1 p-3 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
        {localCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div className="w-24 h-24 mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-purple-400" />
            </div>
            <p className="text-lg font-semibold text-gray-300 mb-2">Your cart is empty</p>
            <p className="text-sm text-gray-500">Add some amazing products!</p>
          </div>
        ) : (
          <>
            {localCart.map((item, index) => {
              // Ensure values are numbers for display
              const itemPrice = Number(item.price) || 0;
              const itemQuantity = Number(item.quantity) || 1;
              const subtotal = itemPrice * itemQuantity;

              return (
                <div
                  key={`${item.id}-${item.selectedColor}`}
                  className="group relative backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Product Image with overlay */}
                  <div className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                      <img
                        src={item.selectedColorImage || item.image_url}
                        alt={item.name}
                        className="relative w-16 h-16 object-cover rounded-xl ring-2 ring-white/20 group-hover:ring-purple-400/50 transition-all"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      {/* Product Name and Color */}
                      <div>
                        <h3 className="font-bold text-sm text-white mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-400 mb-1">Color: {item.selectedColor}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {item.currency}
                            {itemPrice}
                          </span>
                          <span className="text-xs text-gray-500">per item</span>
                        </div>
                      </div>

                      {/* Quantity Counter - Using internal handler */}
                      <div className="mt-2 text-black">
                        <Counter
                          quantity={itemQuantity}
                          onIncrease={() => handleUpdateQuantity(item.id, item.selectedColor, itemQuantity + 1)}
                          onDecrease={() => handleUpdateQuantity(item.id, item.selectedColor, itemQuantity - 1)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subtotal and Remove Button */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Subtotal</p>
                      <p className="text-base font-bold text-green-400">
                        {item.currency}
                        {isNaN(subtotal) ? "0.00" : subtotal.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onRemove(item.id, item.selectedColor);
                        // also update internal state quickly for immediate UI feedback
                        setLocalCart(prev => {
                          const updated = prev.filter(ci => !(ci.id === item.id && ci.selectedColor === item.selectedColor));
                          // Update localStorage
                          try {
                            const cartItemsKey = localStorage.getItem("checkoutCartItems") ? "checkoutCartItems" : "cartItems";
                            localStorage.setItem(cartItemsKey, JSON.stringify(updated));
                          } catch {}
                          return updated;
                        });
                      }}
                      className="group/btn px-3 py-1.5 bg-red-500/20 hover:bg-red-500 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-white rounded-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span className="text-xs font-semibold">Remove</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Checkout Button - Floating style */}
      {localCart.length > 0 && (
        <div className="relative z-10 p-4 backdrop-blur-xl bg-gradient-to-t from-black/50 to-transparent border-t border-white/10">
          <button
            onClick={handleCheckout}
            className="group relative w-full py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl font-bold text-base transition-all duration-500 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-[1.02] overflow-hidden"
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Checkout</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                {currencySymbol}
                {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
              </span>
            </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-0 {
          background-position: 0% 0%;
        }

        .bg-pos-100 {
          background-position: 100% 0%;
        }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 20px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </aside>
  );
};

export default EcomSidebar;