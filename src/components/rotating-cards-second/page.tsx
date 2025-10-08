"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RotatingCardsSecond = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const cards = [
    { text: "Let's Discuss Your Project", width: "w-75", rotation: "-rotate-0", zIndex: "z-40", link: "/contact" },
    { text: "Get Quote", width: "w-75", rotation: "-rotate-15", zIndex: "z-30", link: "/contact" },
    { text: "Book A Call", width: "w-75", rotation: "-rotate-30", zIndex: "z-20", link: "/contact" },
    { text: "WhatsApp", width: "w-75", rotation: "-rotate-45", zIndex: "z-10", link: "/contact" }
  ];

  return (
    <div 
      className="top-8 right-60 relative hidden sm:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.width} ${card.zIndex} h-16 bg-gradient-to-r from-orange-500 to-orange-400 
                     rounded-full flex items-center px-6 text-white font-bold text-xl
                     cursor-pointer transition-transform duration-300 ease-out
                     transform-gpu origin-right shadow-lg absolute top-0 right-0 ${
                       isHovered ? card.rotation : 'rotate-0'
                     } hover:scale-105 hover:shadow-2xl`}
          onClick={() => router.push(card.link)}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export default RotatingCardsSecond;
