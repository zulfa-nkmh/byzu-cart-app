"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

export default function CartPage() {
  const cart = useCartStore((s) => s.cart);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Your cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 text-black">
          <p className="text-lg">🛒 Your cart is empty</p>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kiri: Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>

          {/* Kanan: Ringkasan */}
          <CartSummary />
        </div>
      )}
    </div>
  );
}
