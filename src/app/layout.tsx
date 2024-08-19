import { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import * as React from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { NavbarComponent } from '@/components/layout';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
  },
  authors: [
    {
      name: 'Enea Scaccabarozzi',
      url: 'https://eneascaccabarozzi.xyz',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider
          domain='eneascaccabarozzi.xyz'
          customDomain='plausible.eneascaccabarozzi.xyz'
        />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen bg-slate-900 font-sans antialiased'
        )}
      >
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
