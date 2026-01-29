import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nadad - Онлайн Дэлгүүр | Монголын #1 E-Commerce",
  description: "Монголын хамгийн найдвартай онлайн дэлгүүр. Электроник, хувцас, гоо сайхан, спорт бүтээгдэхүүнүүд. Хурдан хүргэлт, баталгаат чанар.",
  keywords: ["онлайн дэлгүүр", "e-commerce", "mongolia", "shopping", "electronics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`} suppressHydrationWarning>
        <CartProvider>
          <WishlistProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
