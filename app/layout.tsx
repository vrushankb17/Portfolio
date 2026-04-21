'use client';

import '@/app/globals.css';
import { inter, jetBrainsMono } from '@/app/fonts/fonts';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#000000] text-[#f5f5f5] font-mono selection:bg-[#00F0FF]/30 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}

          <Script src="/oneko.js" strategy="lazyOnload" />

          {/* Theme Toggle */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
