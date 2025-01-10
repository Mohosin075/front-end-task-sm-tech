import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Providers from "@/lib/Providers";
import Navbar from "@/components/shared/Navbar";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Harvest",
  description:
    "Fresh Harvest - Your trusted online marketplace for farm-fresh produce, organic groceries, and sustainable food products, delivered straight to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className={rubik.className}>
          <Navbar />
          <div className="min-h-screen max-w-[1440px] mx-auto">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
