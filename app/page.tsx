'use client';

import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Quote from './sections/Quote';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-center">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Quote />
      <Footer />
    </main>
  );
}
