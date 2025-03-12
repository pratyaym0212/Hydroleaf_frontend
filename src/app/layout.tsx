import '@/styles/globals.css';
import '@/styles/styles.css';

import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title()}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo_transparent.png',
    shortcut: '/images/logo_transparent.png',
    apple: '/images/logo_transparent.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: '/opengraph-image.png',
    type: 'website',
    locale: languageTag(),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: '/opengraph-image.png',
  },
});

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <head>
          {/* Add Google Font Link */}
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
            <main className="grow">{children}</main>
            <Footer />
            <ThemeSwitcher className="fixed bottom-5 right-5 z-10" />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;
