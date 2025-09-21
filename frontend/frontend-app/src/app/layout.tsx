import "./globals.css";
import Link from "next/link";
import { Poppins, Lato } from "next/font/google";

// Load Fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = { title: "Product Explorer" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body className="bg-neutral-50 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className={`${poppins.className} text-2xl font-bold text-gray-900`}>
              Product Explorer
            </Link>

            {/* Nav Links */}
            <nav className="flex gap-6 text-gray-700 font-medium">
              <Link href="/">Home</Link>
              <Link href="/categories/books">Books</Link>
              <Link href="/categories/electronics">Electronics</Link>
              <Link href="/categories/clothing">Clothing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Product Explorer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
