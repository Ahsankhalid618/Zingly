import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zingly - Magical AI Tools for Startups",
  description:
    "Transform your startup with Zingly's magical AI-powered tools. Generate compelling ad copy, understand your users, and create visual inspiration. Launch your MVP faster with our enchanted toolkit.",
  keywords:
    "Zingly, startup, MVP, AI tools, ad copy, user personas, mood board, marketing, founders, magical AI",
  authors: [{ name: "Zingly" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Zingly - Magical AI Tools for Startups",
    description:
      "Transform your startup with Zingly's magical AI-powered tools. Generate compelling ad copy, understand your users, and create visual inspiration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" >
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
