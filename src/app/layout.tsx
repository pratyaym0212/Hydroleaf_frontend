'use client';

import '@/styles/globals.css';
import '@/styles/styles.css';

import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const RootLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname(); // ✅ Now it's safe in a client component

  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={cn(
            'page-transition flex min-h-screen flex-col font-sans',
            fonts
          )}
        >
          <ThemeProvider attribute="class">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex-1"
              >
                {children}
              </motion.main>
            </AnimatePresence>
            <Footer />
            <ThemeSwitcher className="fixed bottom-5 right-5 z-10" />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
