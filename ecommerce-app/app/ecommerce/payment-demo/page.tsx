"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, CreditCard, Wallet, Truck, Info, Landmark } from "lucide-react";

export default function PaymentDemoPage() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [billing, setBilling] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // method-specific fields
  const [walletPhone, setWalletPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [bankRef, setBankRef] = useState("");
  const [codNotes, setCodNotes] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    const method = localStorage.getItem("selectedPaymentMethod");
    setPaymentMethod(method);

    // load billing saved by checkout
    const b = localStorage.getItem("checkoutBilling");
    if (b) {
      try {
        setBilling(JSON.parse(b));
      } catch {
        setBilling(null);
      }
    }

    // load items (respect checkoutSource if present)
    const source = localStorage.getItem("checkoutSource");
    let arr: any[] = [];
    if (source === "cart") {
      const cart = localStorage.getItem("checkoutCartItems");
      arr = cart ? JSON.parse(cart) : [];
    } else if (source === "buynow") {
      const item = localStorage.getItem("buyNowItem");
      arr = item ? [JSON.parse(item)] : [];
    } else {
      // fallback: try checkoutCartItems or buyNowItem directly
      const cart = localStorage.getItem("checkoutCartItems");
      if (cart) {
        arr = JSON.parse(cart);
      } else {
        const item = localStorage.getItem("buyNowItem");
        arr = item ? [JSON.parse(item)] : [];
      }
    }

    // ensure we keep any selectedColorImage but fallback to image_url
    setItems(arr);
    const s = (arr || []).reduce((sum: number, it: any) => sum + it.price * it.quantity, 0);
    setSubtotal(s);
    setTotal(s);
  }, []);

  const validateAndConfirm = () => {
    setErrors(null);

    if (!paymentMethod) {
      setErrors("No payment method selected.");
      return;
    }

    // Basic billing checks
    if (!billing || !billing.firstName || !billing.address || !billing.phone || !billing.email) {
      setErrors("Missing required billing information. Please return to checkout.");
      return;
    }

    // method-specific validation
    if (paymentMethod === "eSewa" || paymentMethod === "Khalti") {
      if (!walletPhone) {
        setErrors("Enter the phone number registered with the wallet.");
        return;
      }
      if (!transactionId) {
        setErrors("Enter transaction/merchant ID shown by the wallet.");
        return;
      }
    } else if (paymentMethod === "Bank Transfer") {
      if (!bankRef) {
        setErrors("Enter bank reference/txn id for your transfer.");
        return;
      }
    } else if (paymentMethod === "Cash on Delivery") {
      // no required extra fields for COD
    }

    // show on-screen success modal styled like wallet confirmation
    setShowSuccess(true);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  // when user clicks "Done" -> clear checkout/buynow keys and redirect to ecommerce main page
  const handleDone = () => {
    try {
      localStorage.removeItem("checkoutCartItems");
      localStorage.removeItem("buyNowItem");
      localStorage.removeItem("checkoutSource");
      localStorage.removeItem("selectedPaymentMethod");
      localStorage.removeItem("checkoutBilling");
      localStorage.removeItem("cartItems");
    } catch (e) {
      // ignore storage errors
    }

    setShowSuccess(false);
    router.push("/ecommerce");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Top header with progress */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Complete your payment</h1>
            <p className="text-sm text-slate-300 mt-1">Secure checkout — fast delivery & easy returns</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/6 border border-white/8 rounded-lg px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="text-sm">
                <div className="text-xs text-slate-400">Selected</div>
                <div className="font-medium">{paymentMethod ?? "No method selected"}</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center text-black shadow-sm">1</div>
                <div>Checkout</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">2</div>
                <div className="text-slate-300">Payment</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">3</div>
                <div className="text-slate-300">Done</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-gradient-to-br from-white/3 to-white/2 rounded-3xl p-6 lg:p-8 border border-white/8 backdrop-blur-md shadow-xl">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column: Payment options / hero */}
            <div className="lg:col-span-2 bg-[linear-gradient(135deg,rgba(0,0,0,0.35),rgba(255,255,255,0.02))] rounded-2xl p-6 border border-white/6">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-xl font-bold">Pay with {paymentMethod ?? "your chosen method"}</h2>
                  <p className="text-sm text-slate-300 mt-1">Follow a few quick steps to confirm your payment.</p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Visual payment badge */}
                  <div className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-black font-semibold flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm">Secure</span>
                  </div>
                </div>
              </div>

              {/* Payment method specific panels */}
              <div className="space-y-5">
                {/* eSewa */}
                {paymentMethod === "eSewa" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Wallet className="w-5 h-5 text-emerald-400" />
                      <div className="text-sm">Use the eSewa app to pay — then enter the transaction ID below.</div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <label className="block">
                        <div className="text-xs text-slate-400 mb-1">Wallet phone</div>
                        <input value={walletPhone} onChange={(e)=>setWalletPhone(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-emerald-400 outline-none transition" placeholder="e.g. 98XXXXXXXX" />
                      </label>
                      <label className="block">
                        <div className="text-xs text-slate-400 mb-1">eSewa Transaction ID</div>
                        <input value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-emerald-400 outline-none transition" placeholder="Enter txn id from eSewa" />
                      </label>
                    </div>

                    <div className="rounded-md p-3 bg-black/6 border border-white/6 flex items-center justify-between">
                      <div className="text-sm text-slate-300">Amount to pay</div>
                      <div className="text-lg font-bold">${total.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                {/* Khalti */}
                {paymentMethod === "Khalti" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Wallet className="w-5 h-5 text-emerald-400" />
                      <div className="text-sm">Open Khalti and complete the payment — paste the txn id below.</div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <label className="block">
                        <div className="text-xs text-slate-400 mb-1">Khalti phone</div>
                        <input value={walletPhone} onChange={(e)=>setWalletPhone(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-cyan-400 outline-none transition" placeholder="Khalti registered phone" />
                      </label>
                      <label className="block">
                        <div className="text-xs text-slate-400 mb-1">Khalti Transaction ID</div>
                        <input value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-cyan-400 outline-none transition" placeholder="Enter txn id from Khalti" />
                      </label>
                    </div>

                    <div className="rounded-md p-3 bg-black/6 border border-white/6 flex items-center justify-between">
                      <div className="text-sm text-slate-300">Amount to pay</div>
                      <div className="text-lg font-bold">${total.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer */}
                {paymentMethod === "Bank Transfer" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Landmark className="w-5 h-5 text-emerald-400" />
                      <div className="text-sm">Transfer to the bank account below and add the reference here.</div>
                    </div>

                    <div className="p-3 rounded-lg bg-black/8 border border-white/6">
                      <div className="text-xs text-slate-400">Bank</div>
                      <div className="font-semibold">Example Bank Ltd.</div>
                      <div className="text-xs text-slate-400 mt-2">Account No.</div>
                      <div className="font-semibold">123-456-789</div>
                      <div className="text-xs text-slate-400 mt-2">A/C Name</div>
                      <div className="font-semibold">ACME Online</div>
                    </div>

                    <label className="block">
                      <div className="text-xs text-slate-400 mb-1">Your transfer reference / transaction id</div>
                      <input value={bankRef} onChange={(e)=>setBankRef(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-emerald-400 outline-none transition" placeholder="Bank reference or screenshot id" />
                    </label>
                  </div>
                )}

                {/* Cash on Delivery */}
                {paymentMethod === "Cash on Delivery" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Truck className="w-5 h-5 text-emerald-400" />
                      <div className="text-sm">Pay the courier on delivery. Optionally add delivery notes.</div>
                    </div>

                    <label className="block">
                      <div className="text-xs text-slate-400 mb-1">Notes for delivery (optional)</div>
                      <input value={codNotes} onChange={(e)=>setCodNotes(e.target.value)} className="w-full p-3 rounded-xl bg-black/10 border border-white/6 focus:border-emerald-400 outline-none transition" placeholder="Leave notes for the courier" />
                    </label>

                    <div className="rounded-md p-3 bg-black/6 border border-white/6 flex items-center justify-between">
                      <div className="text-sm text-slate-300">Payable on delivery</div>
                      <div className="text-lg font-bold">${total.toFixed(2)}</div>
                    </div>
                  </div>
                )}

                {!paymentMethod && (
                  <div className="p-4 rounded-lg border border-white/6 bg-black/6 text-slate-300 flex items-center gap-3">
                    <Info className="w-5 h-5 text-slate-400" />
                    <div>No payment method selected. Return to checkout to choose one.</div>
                  </div>
                )}

                {errors && <div className="mt-1 text-sm text-red-400 font-medium">{errors}</div>}
              </div>

              {/* subtle footer note */}
              <div className="mt-6 text-xs text-slate-400">
                Orders are protected — we only release funds to the seller after confirmation of shipment.
              </div>
            </div>

            {/* Right column: Order summary & confirm */}
            <div className="sticky top-6 self-start rounded-2xl p-5 bg-white/3 border border-white/6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

              <div className="space-y-3 max-h-60 overflow-auto pr-2">
                {items.length === 0 ? (
                  <div className="text-slate-400">No items found.</div>
                ) : (
                  items.map((it, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <img
                        src={it.selectedColorImage || it.image_url}
                        className="w-16 h-16 object-cover rounded-lg border border-white/8"
                        alt={it.name}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">{it.name}</div>
                          <div className="text-sm">{it.currency}{(it.price * it.quantity).toFixed(2)}</div>
                        </div>
                        <div className="text-xs text-slate-400 mt-1">Color: {it.selectedColor} • Size: {it.selectedSize} • Qty: {it.quantity}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 border-t border-white/6 pt-4 text-sm text-slate-300">
                <div className="flex items-center justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Shipping</span>
                  <span className="font-medium text-emerald-300">Free</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/6">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-extrabold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-sm font-semibold">Billing</h4>
                {billing ? (
                  <div className="text-sm text-slate-300 mt-2 space-y-1">
                    <div>{billing.firstName} {billing.lastName}</div>
                    {billing.company && <div>{billing.company}</div>}
                    <div>{billing.address}{billing.apartment ? ", " + billing.apartment : ""}</div>
                    <div>{billing.city}</div>
                    <div>{billing.phone}</div>
                    <div>{billing.email}</div>
                  </div>
                ) : (
                  <div className="text-sm text-red-400 mt-2">No billing details found.</div>
                )}
              </div>

              <div className="mt-6">
                {/* Single Confirm & Pay button (right-side). This triggers validation and shows an on-screen "wallet-like" success view */}
                <button onClick={validateAndConfirm} className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold shadow-lg transform hover:scale-[1.01] transition">
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Confirm & Pay</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet-like Success overlay (on-screen, not alert) */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center px-4 pb-6 lg:pb-0">
          {/* dim background */}
          <div className="absolute inset-0 bg-black/70" onClick={closeSuccess}></div>

          {/* wallet-style card that slides up */}
          <div
            className="relative w-full max-w-lg transform rounded-3xl bg-gradient-to-b from-white/6 to-white/3 border border-white/8 p-6 text-center backdrop-blur-md shadow-2xl animate-[fadeIn_250ms_ease]"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center bg-emerald-500 text-white text-3xl shadow-md -mt-12">
              ✓
            </div>

            <h3 className="mt-4 text-2xl font-bold">Payment Successful</h3>
            <p className="mt-2 text-sm text-slate-300">
              Your {paymentMethod} payment of <span className="font-semibold">${total.toFixed(2)}</span> was completed.
            </p>

            <div className="mt-4 bg-black/10 p-4 rounded-md border border-white/6 text-sm text-left">
              <div className="flex justify-between"><span>Method</span><span className="font-medium">{paymentMethod}</span></div>
              <div className="flex justify-between"><span>Amount</span><span className="font-medium">${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Recipient</span><span className="font-medium">ACME Online</span></div>
              {paymentMethod === "eSewa" || paymentMethod === "Khalti" ? (
                <div className="mt-2 text-xs text-slate-400">Txn: {transactionId || "—"}</div>
              ) : null}
              {paymentMethod === "Bank Transfer" ? (
                <div className="mt-2 text-xs text-slate-400">Bank ref: {bankRef || "—"}</div>
              ) : null}
              {paymentMethod === "Cash on Delivery" && codNotes ? (
                <div className="mt-2 text-xs text-slate-400">COD notes: {codNotes}</div>
              ) : null}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleDone}
                className="flex-1 py-2 rounded-xl bg-emerald-500 text-black font-bold shadow"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}