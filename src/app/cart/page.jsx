"use client"

import { useEffect } from "react"
import { useCartStore } from "@/store/cartStore"
import CartItem from "@/components/CartItem"
import CartSummary from "@/components/CartSummary"

export default function CartPage() {
  const { cart } = useCartStore()

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Your cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>


        {/* Kanan: Ringkasan Pembayaran */}
        <CartSummary />
      </div>
    </div>
  )
}
