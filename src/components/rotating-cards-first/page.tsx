"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RotatingCardsFirst = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Tailwind safelist hint
  // rotate-0 -rotate-15 -rotate-30 -rotate-45

  const cards = [
    { text: "Let's Discuss Your Project", rotation: "-rotate-0", zIndex: "z-40", link: "/contact" },
    { text: "Get Quote", rotation: "-rotate-15", zIndex: "z-30", link: "/contact" },
    { text: "Book A Call", rotation: "-rotate-30", zIndex: "z-20", link: "/contact" },
    { text: "WhatsApp", rotation: "-rotate-45", zIndex: "z-10", link: "/contact" },
  ];

  return (
    <div
      className="relative mt-6 hidden sm:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, index) => (
        <button
          key={index}
          className={`absolute top-0 left-0 w-[53%] h-[60px] flex items-center justify-center
            bg-[#F38400] text-white font-bold capitalize rounded-4xl shadow-[2px_5px_0_#000000]
            cursor-pointer transition-transform duration-300 ease-out transform-gpu origin-right
            ${card.zIndex} ${isHovered ? card.rotation : "rotate-0"}
            hover:scale-105`}
          onClick={() => router.push(card.link)}
        >
          <p className="text-[26px]">{card.text}</p>
        </button>
      ))}
    </div>
  );
};

export default RotatingCardsFirst;
