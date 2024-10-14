import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import tailwindIntegration from "@astrojs/tailwind";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QHEV?",
  description: "Que Horas Elas Voltam?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
