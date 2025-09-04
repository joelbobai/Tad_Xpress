import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Nabar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tadxpres - Logistics Delivery Service",
  description: "Request riders to deliver your items quickly and safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
