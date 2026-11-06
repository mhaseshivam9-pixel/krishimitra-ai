import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KrishiMitra AI – Smart Farming. Simple Advice.",
  description:
    "KrishiMitra AI is an intelligent agricultural advisory platform that provides voice-first, multilingual farming guidance to Indian farmers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
