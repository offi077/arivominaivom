import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#fdf8f3] to-[#f5e7d0] text-gray-800 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Logo / Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-[#bfa14a] drop-shadow-sm">
            அறிவோம் இணைவோம்
          </h2>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm md:text-base">
          
          {/* About Section */}
          <div>
            <h3 className="font-bold text-[#bfa14a] mb-4 uppercase tracking-wide">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-author"
                  className="hover:text-[#bfa14a] hover:pl-1 transition-all duration-200"
                >
                  About the Author
                </Link>
              </li>
              <li>
                <Link
                  href="/about-team"
                  className="hover:text-[#bfa14a] hover:pl-1 transition-all duration-200"
                >
                  About Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#bfa14a] mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#bfa14a] hover:pl-1 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/letters"
                  className="hover:text-[#bfa14a] hover:pl-1 transition-all duration-200"
                >
                  கடிதங்கள் ~
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="hover:text-[#bfa14a] hover:pl-1 transition-all duration-200"
                >
                  Books ~
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-[#bfa14a] mb-4 uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com" },
                { icon: <FaInstagram />, link: "https://instagram.com" },
                { icon: <FaXTwitter />, link: "https://x.com" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#bfa14a] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-white transition-all duration-300 shadow-md"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-xs text-gray-600 border-t border-[#e5d3a5] pt-4">
          © {new Date().getFullYear()} அறிவோம் இணைவோம். All rights reserved.
        </div>
      </div>
    </footer>
  );
}
