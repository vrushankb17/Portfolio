'use client';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
