'use client';

// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>SpotRank - Boost Your AI Readiness</title>
        <meta name="description" content="Boost your AI Visibility" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXSYXM3R6P"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXSYXM3R6P');
          `}
        </Script>
      </head>
      <body>
        {children}

        {/* Tailwind CDN */}
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />

        {/* Tailwind custom config */}
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="afterInteractive"
          onLoad={() => {
            (window as any).tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    primary: "#25aff4",
                    "background-light": "#f5f7f8",
                    "foreground-light": "#111618",
                    "subtle-light": "#607c8a",
                    "border-light": "#dbe2e6",
                  },
                  fontFamily: {
                    display: ["Manrope", "sans-serif"],
                    playfair: ['"Playfair Display"', "serif"],
                  },
                  borderRadius: {
                    DEFAULT: "0.5rem",
                    lg: "1rem",
                    xl: "1.5rem",
                    full: "9999px",
                  },
                },
              },
            };
          }}
        />

      </body>
    </html>
  );
}
