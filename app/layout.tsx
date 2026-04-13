'use client';

import '@/app/globals.css';
import { inter } from '@/app/fonts/fonts';
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
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#f9fafb] text-gray-800 dark:bg-[#0a0a0a] dark:text-gray-300 selection:bg-gray-200 dark:selection:bg-gray-800 selection:text-black dark:selection:text-white transition-colors duration-300">
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
