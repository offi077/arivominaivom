import { FaQuoteLeft } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md p-6 text-center animate-fadeIn">
      {/* Quote Icon */}
      <div className="flex justify-center mb-3 text-[#bfa14a]">
        <FaQuoteLeft size={28} />
      </div>

      {/* Main Text */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed max-w-3xl mx-auto">
        “அறிவோம் இணைவோம்” —  
        “நிச்சயமாக உங்கள் சமுதாயம் – (வேற்றுமை ஏதுமில்லா) ஒரே சமுதாயம் தான்; மேலும் நானே உங்கள் இறைவன். ஆகையால், என்னையே நீங்கள் வணங்குங்கள்..”
        <span className="block mt-2 text-sm font-medium text-[#bfa14a]">
          — ஸூரத்துல் அன்பியா 21:92
        </span>
      </h2>

      {/* Gold Accent Line */}
      <div className="mt-4 w-16 h-1 bg-[#bfa14a] mx-auto rounded-full"></div>
    </div>
  );
}
