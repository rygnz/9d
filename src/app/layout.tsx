import type { Metadata } from "next";
import { Fredoka, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable : "--font-fredoka",
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "IX - D | SMPN 13 MALANG",
  description: "Generate By NEXT.JS | Created by rygenzz",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${fredoka.variable}
        bg-black
        overflow-x-hidden
        scroll-smooth
        h-full
        antialiased
        
        selection:bg-white selection:text-black
        overflow-y-auto

        [&::-webkit-scrollbar]:h-1
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-black 
        [&::-webkit-scrollbar-thumb]:bg-white
        [&::-webkit-scrollbar-thumb]:rounded-md
        [&::-webkit-scrollbar-thumb]:drop-shadow-2xl
      `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
