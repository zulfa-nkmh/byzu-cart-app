"use client";
import Hero from "@/components/Hero";
import CartList from "@/components/cartList";

export default function Home() {
  return (
    <div>
      <Hero />
      <CartList limit={8} />
    </div>
  );
}
