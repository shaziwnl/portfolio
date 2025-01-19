import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharang Goel's Portfolio",
  description: "Made using Next.js, Tailwind CSS, TypeScript and Aceternity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#01020f]`}>
        {children}
      </body>
    </html>
  );
}
