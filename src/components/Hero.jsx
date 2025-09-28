// components/HeroSection.jsx
import Image from 'next/image';
import React from 'react';
import { ChevronRight, Users, Package } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 

const HeroSection = () => {
  const primaryGreen = 'hsl(140, 20%, 30%)';
  const softGreen = 'hsl(140, 30%, 60%)';   
  const buttonBg = '#5c8c6c'; 

  return (
    <div className="relative w-full h-[66vh] bg-gray-50 overflow-hidden">
      {/* Background/Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-gray-100 to-green-100/30 z-0"></div>

      {/* Konten Utama */}
      <div className="relative w-full z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Kolom Kiri */}
        <div className="max-w-xl space-y-4 px-6 lg:px-16">
          <h1 
            className="text-6xl lg:text-7xl font-serif leading-tight tracking-tighter" 
            style={{ fontFamily: 'Playfair Display, serif', color: primaryGreen }}
          >
            Elevate your <br className="hidden sm:block"/>
            Everyday
          </h1>

          <p className="text-lg text-gray-600 max-w-sm">
            Discover curated collections of premium products designed to enhance your lifestyle.
          </p>

          <div className="flex space-x-4">
            <Button 
              size="lg" 
              className="px-6 py-3 shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: buttonBg, color: 'white' }}
            >
              Shop now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-100 shadow-md"
            >
              New Arrivals
            </Button>
          </div>

          <div className="flex space-x-12 pt-6">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2" style={{ color: primaryGreen }}/>
              <p className="text-4xl font-bold" style={{ color: primaryGreen }}>60k</p>
              <p className="text-sm text-gray-600">users</p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="w-8 h-8 mb-2" style={{ color: primaryGreen }}/>
              <p className="text-4xl font-bold" style={{ color: primaryGreen }}>1000+</p>
              <p className="text-sm text-gray-600">Products</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Full Width Gambar */}
        <div className="hidden lg:block relative h-[66vh] w-full">
          <Image 
            src="/flatlay-outfit-travel.jpg" 
            alt="Group of people modeling clothing" 
            fill
            className="object-cover"
          />
          <a 
            href="#" 
            className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-white flex items-center justify-center text-xs font-semibold uppercase tracking-wider shadow-xl border border-gray-100 hover:scale-105 transition-transform"
            style={{ color: primaryGreen }}
          >
            <span className="text-center leading-tight">
              Explore <br/> best offers
            </span>
            <ChevronRight className="w-4 h-4 ml-1 absolute transform translate-x-3 translate-y-2" />
          </a>
        </div>
      </div>

      {/* Footer "BYZU" */}
<div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap z-20 bg-gray-50/80 border-t border-gray-100">
  <div className="flex animate-marquee-right">
    
    {[...Array(2)].map((_, set) => (
      <div key={set} className="flex space-x-4">
        {Array.from({ length: 23 }).map((_, i) => (
          <span key={`${set}-${i}`} className="font-medium flex items-center text-gray-500/80" style={{ color: "hsl(140, 30%, 60%)" }}>
            <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: "hsl(140, 30%, 60%)" }}></span>
            BYZU
          </span>
        ))}
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default HeroSection;
