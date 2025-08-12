// app/components/Essaymain.js
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Essaymain() {
  const essays = [
    {
      id: "the-key-of-evils",
      title: "தீமைகளின் திறவுகோல்",
      description:
        "சமூகத்தில் அன்றாடம் குற்றங்களின், பிரச்சனைகளின் எண்ணிக்கை அதிகரிப்பதும், குடும்பங்கள் விவாகரத்துகளால் சீரழிவதும், வேலையிழப்புகள், இறப்புகள் பெருகிவருவதற்கும் முதற்காரணமாக மது மற்றும் போதை மருந்து உபயோகம்தான் காரணம் என ஆய்வறிக்கைகள் கூறுகின்றன.",
      coverImage: "/essays/the-key-of-evils/cover.jpg",
      imageCount: 20,
    },
    {
      id: "wahhn",
      title: "வஹ்ன் எனும் கொடிய நோய்",
      description:
        "சமூகத்தில் அன்றாடம் குற்றங்களின், பிரச்சனைகளின் எண்ணிக்கை அதிகரிப்பதும், குடும்பங்கள் விவாகரத்துகளால் சீரழிவதும், வேலையிழப்புகள், இறப்புகள் பெருகிவருவதற்கும் முதற்காரணமாக மது மற்றும் போதை மருந்து உபயோகம்தான் காரணம் என ஆயவறிக்கைகள் கூறுகின்றன.",
      coverImage: "/essays/wahhn/cover.jpg",
      imageCount: 20,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 tracking-tight">
        📚 ஆய்வு கட்டுரைகள்
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        உண்மையான அறிவையும், ஆழ்ந்த புரிதலையும் நாடுபவர்களுக்கு பயனளிக்கும் வகையில்
        பல்வேறு இஸ்லாமிய தலைப்புகளை ஆழமாக ஆய்வு செய்து எழுதப்பட்ட கட்டுரைகளின்
        தொகுப்பு.
      </p>

      {/* Essay List */}
      {essays.map((essay, index) => (
        <div
          key={essay.id}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="flex justify-center">
            <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
              <Image
                src={essay.coverImage}
                alt={`${essay.title} cover image`}
                className="rounded-xl shadow-lg object-cover hover:scale-[1.03] transition-transform duration-300"
                width={350}
                height={450}
                priority={index === 0} // Optimize loading for the first essay
              />
            </Link>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-yellow-600 transition-colors duration-200">
                {essay.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-base leading-relaxed italic">
              {essay.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}