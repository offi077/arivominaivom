import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
