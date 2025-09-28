"use client";
import { useCartStore } from "@/store/cartStore";

export default function Counter({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const quantity = useCartStore((s) => s.getQuantity(product.id));

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={() => decreaseQty(product.id)}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        –
      </button>

      <span>{quantity}</span>

      <button
        onClick={() => addToCart(product)}
        className="px-2 py-1 bg-teal-600 text-white rounded"
      >
        +
      </button>

      <span className="ml-2 font-medium">
        ${(product.price * quantity).toFixed(2)}
      </span>
    </div>
  );
}
