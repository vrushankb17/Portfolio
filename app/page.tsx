'use client';

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-16 pb-24 text-left">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
