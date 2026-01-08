'use client';

import '@/app/globals.css';
import { inter } from '@/app/fonts/fonts';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from 'next-themes';

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
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}

          {/* Theme Toggle */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
