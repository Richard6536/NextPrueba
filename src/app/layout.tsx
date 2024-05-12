import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Providers } from "@/store/Providers";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        <Providers>
          <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
