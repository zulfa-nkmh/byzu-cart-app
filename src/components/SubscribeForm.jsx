// components/SubscribeSection.jsx
import React from 'react';
import { Mail } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 
import Image from 'next/image'; // <-- WAJIB: Impor komponen Image dari Next.js

const SubscribeSection = () => {
  // Ambil variabel warna dari HeroSection untuk konsistensi
  const primaryGreen = 'hsl(140, 20%, 30%)';
  const softGreen = 'hsl(140, 30%, 60%)';   
  const buttonBg = '#5c8c6c'; 
  
  // Latar belakang kontainer luar
  const containerBg = 'bg-gray-50'; 
  
  // Asumsi: Gambar diletakkan di public/subscribe-image.jpg
  const imagePath = '/placeholder.jpg';
  
  return (
    
    <div className={`w-full ${containerBg} py-20 border-t border-b border-gray-100 relative overflow-hidden`}>
      <div 
        // Mengubah 'bottom-0' menjadi 'top-0'
        className="absolute top-0 w-full overflow-hidden whitespace-nowrap z-20 bg-gray-50/80 border-b border-gray-100 py-3"
      >
        <div className="flex animate-marquee-right">
          
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex space-x-4 pr-4"> 
              {Array.from({ length: 23 }).map((_, i) => (
                <span key={`${set}-${i}`} className="font-medium flex items-center text-gray-500/80 uppercase" style={{ color: softGreen }}>
                  <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: softGreen }}></span>
                  BYZU
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* ======================================================= */}
      {/* GAMBAR/PLACEHOLDER LATAR BELAKANG DENGAN ROTASI (W: Full, H: 2/3) */}
      <div 
        className="hidden lg:block absolute inset-0 w-full h-2/3 m-auto" 
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(35deg)', // Rotasi 35 derajat
          opacity: 0.15, // Opacity sedikit dinaikkan agar gambar lebih terlihat
          zIndex: 0,
        }}
      >
        {/* HAPUS KODE PLACEHOLDER SEBELUMNYA, GANTI DENGAN KODE INI: */}
        <div className="relative w-full h-full">
            <Image 
                src={imagePath} 
                alt="Decorative background image" 
                fill // Mengisi seluruh div parent (w-full h-full)
                className="object-cover rounded-lg" // Tambahkan styling yang diperlukan
                // Properti untuk Next/Image
                priority
            />
        </div>
        {/* ========================================================= */}
      </div>
      
      {/* Kontainer Isi: Lebar Max (max-w-6xl) dan Margin Otomatis (mx-auto) */}
      <section 
        className={`max-w-6xl mx-auto p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 relative z-10`} 
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="absolute top-[-10px] right-4 flex space-x-1 z-20">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: softGreen }}></span>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: softGreen }}></span>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: softGreen }}></span>
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 
              className="text-4xl md:text-5xl font-serif font-semibold leading-tight tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: primaryGreen }}
            >
              Curated Insights, <br/>
              Delivered.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              Subscribe to our weekly newsletter for exclusive access to new launches and designer spotlights.
            </p>
          </div>
  
          <div className="w-full lg:w-5/12">
            <form className="flex flex-col gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full p-4 pl-10 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition-shadow"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full px-6 py-3 shadow-md hover:shadow-lg transition-all text-base font-medium"
                style={{ backgroundColor: buttonBg, color: 'white' }}
              >
                Subscribe Now
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribeSection;