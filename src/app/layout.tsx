import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BUCKEYE Web Solutions",
  description: "Innovative web solutions tailored for your business.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",

  icons: {
    icon: "/assets/svgs/logo2.svg", 
     // Path to your favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This includes the favicon */}
        <link rel="icon" href="/assets/svgs/logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
