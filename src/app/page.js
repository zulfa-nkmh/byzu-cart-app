"use client";
import Hero from "@/components/Hero";
import CartList from "@/components/cartList";
import AnimatedText from "@/components/AnimatedText";
import SubscribeForm from '../components/SubscribeForm'; 


export default function Home() {
  return (
    <div>
      <Hero />
     
      <div
        style={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",    
          justifyContent: "center",
          textAlign: "center",
          margin: "2rem 0",
          color: "green",          
          fontSize: "2rem",
          fontWeight: "bold",
          gap: "1rem",
        }}
      >

        <AnimatedText text="CHOOSE YOUR APPAREL" />
        <AnimatedText text="GET YOUR STYLE" />
        <AnimatedText text="DISCOUNT UP-TO 10%" />
      </div>
      <CartList limit={8} />
      <SubscribeForm /> 
    </div>
  );
}
