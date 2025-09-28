"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPaypal, FaCcMastercard } from "react-icons/fa";

// Komponen PaymentMethods modular
function PaymentMethods() {
  return (
    <div className="flex flex-col space-y-3 mt-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="payment" defaultChecked />
        <FaCcMastercard className="text-2xl text-gray-700" />
        <span>Credit Card</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="payment" />
        <FaPaypal className="text-2xl text-gray-700" />
        <span>PayPal</span>
      </label>
    </div>
  );
}

export default function CartSummary() {
  const totalItems = useCartStore((state) => state.totalItems());
  const totalPrice = useCartStore((state) => state.totalPrice());
  const clearCart = useCartStore((state) => state.clearCart);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const shippingCost = 6;
  const { toast } = useToast();

  // Fungsi apply coupon
  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      setError("Please enter a coupon code.");
      toast({
        title: "Coupon Error",
        description: "Please enter a coupon code.",
        type: "error",
      });
      return;
    }

    if (coupon.toLowerCase() === "byzu10") {
      setDiscount(totalPrice * 0.1);
      setError("");
      toast({
        title: "Coupon Applied 🎉",
        description: "BYZU10 applied - 10% off!",
        type: "success",
      });
    } else {
      setDiscount(0);
      setError("Invalid coupon code.");
      toast({
        title: "Invalid Coupon",
        description: `${coupon} is not valid.`,
        type: "error",
      });
    }
  };

  // Fungsi clear cart
  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed.",
      type: "error",
    });
  };

  return (
    <div className="border rounded-xl p-4 sm:p-6 bg-white shadow-sm w-full">
      <h3 className="font-medium mb-4 text-lg sm:text-xl">How you’ll pay</h3>

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Input Kupon */}
      <div className="flex gap-2 mt-6">
        <Input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1"
        />
        <Button
          onClick={handleApplyCoupon}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          Apply
        </Button>
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

      {/* Ringkasan Harga */}
      <div className="border-t mt-6 pt-4 text-sm sm:text-base space-y-2">
        <div className="flex justify-between">
          <span>Item(s) total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${(totalPrice - discount).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-base sm:text-lg mt-4">
        <span>Total ({totalItems} item)</span>
        <span>${(totalPrice - discount + shippingCost).toFixed(2)}</span>
      </div>

      {/* Tombol Checkout */}
      <Button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white">
        Process to Check Out
      </Button>

      {/* Tombol Clear Cart */}
      <Button
        onClick={handleClearCart}
        className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white"
      >
        Clear Cart
      </Button>
    </div>
  );
}
