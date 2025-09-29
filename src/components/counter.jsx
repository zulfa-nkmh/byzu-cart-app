"use client";
import { useCartStore } from "@/store/cartStore";

export default function Counter({ product, compact = false, showSubtotal = false }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const quantity = useCartStore((s) => s.getQuantity(product.id));

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decreaseQty(product.id)}
        disabled={quantity === 0}
        className={`px-2 py-1 rounded ${compact ? "bg-gray-200" : "border"} disabled:opacity-50`}
      >
        –
      </button>

      <span className="min-w-[24px] text-center font-semibold">{quantity}</span>

      <button
        onClick={() => addToCart(product)}
        className={`px-2 py-1 bg-teal-600 text-white rounded hover:bg-teal-700`}
      >
        +
      </button>

      {showSubtotal && (
        <span className="ml-2 font-medium">
          ${(product.price * quantity).toFixed(2)}
        </span>
      )}
    </div>
  );
}
