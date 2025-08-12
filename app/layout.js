import Link from "next/link";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "அறிவோம் இணைவோம்",
  description: "A modern Tamil knowledge-sharing platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap"
        />
      </head>
      <body className="bg-[#fdf8f3] text-gray-900 font-[Noto Sans Tamil] antialiased">
        
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-[#bfa14a] via-[#d8b75d] to-[#bfa14a] shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-extrabold tracking-wide py-4">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                அறிவோம் இணைவோம்
              </Link>
            </div>

            {/* Menu */}
            <ul className="flex space-x-6 text-sm md:text-base font-medium py-4">
              <li>
                <Link href="/leaderboard" className="hover:text-yellow-200 transition">
                  கட்டுரை
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-200 transition">
                  பற்றி
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-200 transition">
                  தொடர்புக்கு
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
