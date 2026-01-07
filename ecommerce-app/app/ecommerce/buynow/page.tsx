"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Banknote, Truck, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();

  // Billing form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);

  // Load buy now item from localStorage
  useEffect(() => {
    const source = localStorage.getItem("checkoutSource");

    if (source === "cart") {
      const cart = localStorage.getItem("checkoutCartItems");
      setCartItems(cart ? JSON.parse(cart) : []);
    } else if (source === "buynow") {
      const item = localStorage.getItem("buyNowItem");
      setCartItems(item ? [JSON.parse(item)] : []);
    } else {
      setCartItems([]);
    }

    // If we previously saved billing details, populate them
    const billing = localStorage.getItem("checkoutBilling");
    if (billing) {
      try {
        const b = JSON.parse(billing);
        setFirstName(b.firstName || "");
        setLastName(b.lastName || "");
        setCompany(b.company || "");
        setAddress(b.address || "");
        setApartment(b.apartment || "");
        setCity(b.city || "");
        setPhone(b.phone || "");
        setEmail(b.email || "");
        setSaveDetails(b.saveDetails || false);
      } catch {
        // ignore
      }
    }
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal;

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // Save billing details so payment-demo can read them
    const billing = {
      firstName,
      lastName,
      company,
      address,
      apartment,
      city,
      phone,
      email,
      saveDetails
    };
    localStorage.setItem("checkoutBilling", JSON.stringify(billing));

    // Store payment method for the payment demo page
    localStorage.setItem("selectedPaymentMethod", paymentMethod);

    // Navigate to payment demo page
    // Note: DO NOT clear checkoutCartItems or checkoutSource here
    // The payment-demo page needs them to display order info
    router.push("/ecommerce/payment-demo");
  };

  return (
    <div
      className="min-h-screen p-6 lg:p-12 flex items-start justify-center relative"
      style={{
        backgroundImage:
          "url('https://media.giphy.com/media/8cAUoSNGJrMyc/giphy-downsized-large.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* overlay should sit above the background but beneath the content */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* main content sits above the overlay */}
      <main className="relative z-20 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Billing / Shipping */}
        <section className="relative bg-white/5 border border-white/8 rounded-2xl p-8 shadow-xl backdrop-blur-md overflow-hidden">
          {/* subtle background accent */}
          <div
            aria-hidden
            className="absolute -right-8 -top-12 w-64 h-64 rounded-full opacity-40 blur-3xl"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1606166322433-9a09a3c45b24?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b6fa6a1f9e0d3e8a65a77e8e9b4f5b4)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(12deg)"
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full" />
              <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                Billing & Delivery
              </h1>
            </div>

            <p className="text-sm text-slate-300 mb-6">
              Enter your billing details and choose a delivery address. Fast,
              secure and hassle-free.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
              <input
                type="text"
                placeholder="First name*"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white md:col-span-2"
              />
              <input
                type="text"
                placeholder="Street address*"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white md:col-span-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc."
                value={apartment}
                onChange={(e)=>setApartment(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white md:col-span-2"
              />
              <input
                type="text"
                placeholder="City*"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
              />
              <input
                type="tel"
                placeholder="Phone*"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white"
              />
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="p-3 rounded-xl bg-black/30 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white md:col-span-2"
              />

              <label className="md:col-span-2 flex items-center gap-3 mt-2 cursor-pointer select-none text-white">
                <input
                  type="checkbox"
                  checked={saveDetails}
                  onChange={(e)=>setSaveDetails(e.target.checked)}
                  className="w-5 h-5 accent-emerald-400 rounded border-transparent"
                />
                <span className="text-sm text-slate-300">
                  Save details for faster checkout next time
                </span>
              </label>
            </form>
          </div>
        </section>

        {/* Right: Order Summary & Payment */}
        <aside className="relative bg-white/3 border border-white/8 rounded-2xl p-6 lg:p-8 shadow-2xl backdrop-blur-md">
          {/* accent image */}
          <div
            aria-hidden
            className="absolute -left-10 -bottom-10 w-56 h-56 rounded-2xl opacity-30 blur-2xl"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=c39a7b0a5a9b0f92f1533d2b2a1f05d1)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(-8deg)"
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-10 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full" />
                <h2 className="text-2xl font-extrabold text-white">Your Order</h2>
              </div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-400" />
                <span>Free shipping</span>
              </div>
            </div>

            <div className="rounded-xl bg-black/20 border border-white/6 divide-y divide-white/6 overflow-hidden">
              {/* Items list */}
              <ul className="max-h-60 overflow-auto">
                {cartItems.length === 0 ? (
                  <li className="p-6 text-center text-slate-300 font-medium">
                    No items selected
                  </li>
                ) : (
                  cartItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 p-4 hover:bg-white/3 transition"
                    >
                      <img
                        // Prefer the color-specific image if available
                        src={item.selectedColorImage || item.image_url}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-none border border-white/8"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-white truncate">
                            {item.name}
                          </h3>
                          <span className="text-sm font-semibold text-white">
                            {item.currency}
                            {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Color: {item.selectedColor} • Size: {item.selectedSize ?? "-"} •
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))
                )}
              </ul>

              {/* price block */}
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">
                    {cartItems.length ? `$${subtotal.toFixed(2)}` : "-"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Shipping
                  </span>
                  <span className="font-semibold text-emerald-300">Free</span>
                </div>

                <div className="mt-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 p-3 rounded-lg border border-white/6 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-300">Total</div>
                    <div className="text-xl font-extrabold text-white">
                      {cartItems.length ? `$${total.toFixed(2)}` : "-"}
                    </div>
                  </div>
                  <div className="text-sm text-slate-300">Incl. taxes (if any)</div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">Payment</h3>

              <div className="grid grid-cols-2 gap-3">
                {["eSewa", "Khalti", "Bank Transfer", "Cash on Delivery"].map(
                  (method) => (
                    <label
                      key={method}
                      className={`relative cursor-pointer rounded-xl p-3 flex flex-col items-center gap-2 text-sm font-semibold transition border ${
                        paymentMethod === method
                          ? "border-emerald-400 bg-gradient-to-b from-emerald-600/20 to-emerald-700/8 shadow-lg ring-4 ring-emerald-400/20 text-white"
                          : "border-white/8 bg-black/10 hover:border-emerald-400 text-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        className="sr-only"
                        onChange={() => setPaymentMethod(method)}
                      />
                      <div className="h-8 flex items-center">
                        {method === "eSewa" && (
                          <img src="/esewa.png" alt="eSewa" className="h-6 object-contain" />
                        )}
                        {method === "Khalti" && (
                          <img src="/khalti.png" alt="Khalti" className="h-6 object-contain" />
                        )}
                        {method === "Bank Transfer" && (
                          <img src="/bankcash.png" alt="Bank transfer" className="h-6 object-contain" />
                        )}
                        {method === "Cash on Delivery" && (
                          <img src="/cod.png" alt="Cash on Delivery" className="h-6 object-contain" />
                        )}
                      </div>
                      <span className="text-sm">{method}</span>
                      {paymentMethod === method && (
                        <span className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow">
                          ✓
                        </span>
                      )}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* coupon + place order */}
            <div className="mt-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Have a coupon?"
                  className="flex-1 p-3 rounded-xl bg-black/20 border border-white/8 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                />
                <button
                  type="button"
                  className="px-5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold shadow hover:scale-[1.01] transition"
                >
                  Apply
                </button>
              </div>

              <button
                onClick={handlePlaceOrder}
                type="button"
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-lg hover:scale-[1.01] transition"
                aria-label="Place order now"
              >
                <span className="flex items-center justify-center gap-3">
                  <Banknote className="w-5 h-5" />
                  Place Order
                </span>
              </button>

              <div className="mt-4 text-xs text-slate-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Secure payment • 30-day returns • 24/7 support
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}