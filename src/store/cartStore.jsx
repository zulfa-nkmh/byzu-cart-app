"use client"
import { create } from "zustand"

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const { cart } = get()
    const itemExist = cart.find((item) => item.id === product.id)
    if (itemExist) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      })
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] })
    }
  },

  removeFromCart: (id) => {
    set({ cart: get().cart.filter((item) => item.id !== id) })
  },

  decreaseQty: (id) => {
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }))
  },

  getQuantity: (productId) => {
    const item = get().cart.find((i) => i.id === productId)
    return item ? item.quantity : 0
  },

  clearCart: () => set({ cart: [] }),

  totalItems: () =>
    get().cart.reduce((acc, item) => acc + item.quantity, 0),

  totalPrice: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
}))
