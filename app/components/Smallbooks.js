// app/components/Smallbooks.js
"use client";

import Link from "next/link";
import {
  FaBookOpen,
  FaFeatherAlt,
  FaHistory,
  FaBalanceScale,
  FaCrown,
  FaLightbulb,
} from "react-icons/fa";

export default function Smallbooks() {
  const books = [
    {
      id: "1",
      title: "நபி (ஸல்) அவர்களின் இறுதி ஹஜ் பேருரைகளும் படிப்பினைகளும்",
      icon: <FaFeatherAlt />,
      imageCount: 2, // Number of pages (images) for this book
    },
    {
      id: "2",
      title: "முன்மாதிரி வணிகர் அப்துர் ரஹ்மான் இப்னு அவ்ஃப் (ரலி)",
      icon: <FaBookOpen />,
      imageCount: 20,
    },
    {
      id: "3",
      title: "நபித்தோழர்கள் வரலாறு – பாகம் 1",
      icon: <FaHistory />,
      imageCount: 20,
    },
    {
      id: "4",
      title: "மனித நேய நோக்கில் வட்டி",
      icon: <FaBalanceScale />,
      imageCount: 20,
    },
    {
      id: "5",
      title: "இறைத்தூதரின் தலைமைத்துவ முன்மாதிரி",
      icon: <FaCrown />,
      imageCount: 20,
    },
    {
      id: "6",
      title: "அந்த ஒளி! அந்த வழி!",
      icon: <FaLightbulb />,
      imageCount: 20,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6 ">
      <h2 className="text-3xl font-bold text-center text-gray-600">
        📚 சிறு புத்தகங்கள்
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/reader/${book.id}`}
            className="flex items-center gap-4 p-2 bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md p-6 text-center animate-fadeIn hover:shadow-2xl hover:scale-[1.02] transition transform duration-300 border border-gray-100"
          >
            <div className="text-yellow-500 text-3xl">{book.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500">Click to read more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}