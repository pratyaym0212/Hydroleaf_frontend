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
import { siteConfig } from '@/lib/constant'; // Import site metadata
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const RootLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname(); // ✅ Safe in a client component

  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* SEO Metadata */}
          <title>{siteConfig.title()}</title>
          <meta name="description" content={siteConfig.description()} />
          <meta name="keywords" content={siteConfig.keywords().join(', ')} />
          <meta name="robots" content="index, follow" />
          {/* <meta name="google-site-verification" content={siteConfig.googleSiteVerificationId()} /> */}

          {/* OpenGraph Metadata */}
          <meta property="og:title" content={siteConfig.title()} />
          <meta property="og:description" content={siteConfig.description()} />
          {/* <meta property="og:url" content={siteConfig.url()} /> */}
          <meta property="og:site_name" content={siteConfig.title()} />
          <meta property="og:image" content="/opengraph-image.png" />
          <meta property="og:type" content="website" />

          {/* Twitter Metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={siteConfig.title()} />
          <meta name="twitter:description" content={siteConfig.description()} />
          <meta name="twitter:image" content="/opengraph-image.png" />

          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            type="image/png"
            href="/images/logo_transparent.png"
          />
          <link rel="apple-touch-icon" href="/images/logo_transparent.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/logo_transparent.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/logo_transparent.png"
          />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
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
