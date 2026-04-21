'use client';

import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#000000] text-zinc-300 font-mono selection:bg-[#00F0FF]/30 selection:text-white">
      
      {/* Subtle Background Glows matching the cyan/purple aesthetic */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
        <div className="absolute -top-[10%] w-[800px] h-[600px] bg-[#7000FF]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] -left-[20%] w-[600px] h-[600px] bg-[#00F0FF]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <NavBar />
      
      {/* Increased max-width and adjusted padding for the minimalist aesthetic */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col space-y-24 sm:space-y-48 pt-24 pb-48">
        <Hero />
        <Contact />
      </div>
    </main>
  );
}
