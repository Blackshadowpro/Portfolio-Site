import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Irtza Ahmad | AI Developer & Software Engineer",
  description: "Portfolio of Irtza Ahmad. Specializing in AI systems, automated trading bots, and full-stack software engineering.",
  keywords: ["Irtza Ahmad", "AI Developer", "Trading Bot Engineer", "Software Engineer", "Machine Learning", "Full Stack", "React", "Next.js"],
  authors: [{ name: "Irtza Ahmad" }],
  creator: "Irtza Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Blackshadowpro",
    title: "Irtza Ahmad | AI Developer",
    description: "I build intelligent systems, AI-powered trading bots, automation tools, and futuristic applications.",
    siteName: "Irtza Ahmad Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Irtza Ahmad | AI Developer",
    description: "I build intelligent systems, AI-powered trading bots, automation tools, and futuristic applications."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark antialiased`}>
      <body className="font-inter bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
