'use client';

// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import Head from 'next/head';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>SpotRank - Boost Your AI Visibility</title>
        <meta name="description" content="Boost your AI Visibility" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
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
                    "background-dark": "#101c22",
                    "foreground-light": "#111618",
                    "foreground-dark": "#f5f7f8",
                    "subtle-light": "#607c8a",
                    "subtle-dark": "#a0b1bb",
                    "border-light": "#dbe2e6",
                    "border-dark": "#344550",
                  },
                  fontFamily: {
                    display: ["Manrope", "sans-serif"],
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
