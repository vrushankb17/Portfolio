'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'contact', label: 'Terminal' },
];

export default function NavBar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 hidden md:block"
    >
      <nav className="flex flex-col items-start gap-4 px-3 py-6 rounded-2xl bg-[#0a0a0a]/50 border border-white/5 backdrop-blur-xl shadow-2xl font-mono">
        {navItems.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors text-left w-full ${
                isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator-sidebar"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-cyan-400 rounded-r-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 pl-2">{label}</span>
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}
