"use client";
import { useCartStore } from "@/store/cartStore";

export default function ProductModal({ product, onClose }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const quantity = useCartStore(
    (s) => s.cart.find((i) => i.id === product.id)?.quantity ?? 0
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg sm:max-w-xl lg:max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Gambar Produk */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 sm:h-64 object-contain mx-auto"
        />

        {/* Detail Produk */}
        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-teal-600 font-bold text-lg mt-3">${product.price}</p>

        {/* Kontrol Quantity */}
        <div className="flex items-center space-x-3 mt-4">
          <button
            onClick={() => decreaseQty(product.id)}
            disabled={quantity === 0}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            -
          </button>

          <span className="min-w-[24px] text-center font-semibold">
            {quantity}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
