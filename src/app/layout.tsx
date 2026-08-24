import type { Metadata } from "next";
import { Fredoka, Geist, Geist_Mono, Roboto } from "next/font/google";
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
  title: "IX - D",
  description: "Generate By NEXT.JS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${fredoka.variable}
        overflow-x-hidden
        scroll-smooth
        h-full
        antialiased
        
        selection:bg-slate-100 selection:text-slate-950`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
