"use client";
import PropTypes from "prop-types";
import { useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function CartItem({ product }) {
  const { toast } = useToast();
  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const getQuantity = useCartStore((s) => s.getQuantity);

  const quantity = getQuantity(product.id);

  return (
    <div className="bg-white p-4 rounded-2xl shadow grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Gambar */}
      <img
        src={product.image || product.thumbnail || product.images?.[0] || "/fallback.png"}
        alt={product.title || "No title"}
        className="w-full h-28 object-contain rounded-lg sm:col-span-1"
      />

      {/* Detail + Actions */}
      <div className="flex flex-col justify-between sm:col-span-2">
        <div>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <p className="text-teal-600 font-bold mt-1">${product.price}</p>
        </div>

        <div className="flex justify-between items-center mt-3">
          {/* Tombol Remove */}
          <button
            onClick={() => {
              removeFromCart(product.id);
              toast({ title: "Removed from cart", description: product.title, type: "error" });
            }}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </button>

          {/* Qty Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                decreaseQty(product.id);
                toast({ title: "Decreased", description: product.title });
              }}
              className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold hover:bg-gray-500"
            >
              –
            </button>

            <span className="text-md font-semibold">{quantity}</span>

            <button
              onClick={() => {
                addToCart(product);
                toast({ title: "Added to cart", description: product.title, type: "success" });
              }}
              className="px-3 py-1 bg-teal-600 text-white rounded-lg text-lg font-bold hover:bg-teal-500"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
