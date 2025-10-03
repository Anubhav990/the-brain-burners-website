import React, { useEffect, useState } from "react";

const CEOSection = () => {
  const [activeCircle, setActiveCircle] = useState(0);

  const content = [
    {
      title: "Dr. Robin Gupta",
      subtitle: "Founder & CEO",
      description:
        "Robin founded The Brain Burners after over a decade of hands-on experience in both website design and digital marketing. Through his journey, he noticed a critical gap—beautifully built websites often lacked the strategic backbone needed to convert. This disconnect inspired him to build a team and a process that blends creative design with deep marketing intelligence.",
      image: "ceo3.png",
    },
    {
      title: "Dr. Robin Gupta",
      subtitle: "Founder & CEO",
      desc: "Today, Robin leads every project with one goal:",
      quote:
        "“To build websites that don’t just look good but sell, scale, and grow with your business.”",
      image: "ceo1.png",
    },
    {
      title: "Dr. Robin Gupta",
      subtitle: "Founder & CEO",
      description:
        "By mapping out a complete marketing architecture for each client, he ensures every site is built with conversion, growth, and long-term success in mind.",
      image: "ceo2.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCircle((prev) => (prev + 1) % content.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-5 sm:px-10 md:px-10 py-0 sm:py-10 max-w-7xl mx-auto mt-12">
      <div className="relative w-full sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] flex-shrink-0">
        {/* Left Circle */}
        <div
          className={`circle circle-left
            ${
              activeCircle === 1
                ? "border-[12px] border-[#FFABAB] scale-115 sm:scale-125 lg:scale-145 z-10"
                : "border-[12px] border-transparent scale-90 sm:scale-95 lg:scale-100 hover:border-[#FFABAB] hover:scale-110"
            }`}
          onMouseEnter={() => setActiveCircle(1)}
        >
          <img
            className="w-full h-full object-cover"
            src="ceo1.png"
            alt="CEO 1"
          />
        </div>

        {/* Top Right Circle */}
        <div
          className={`circle circle-top-right
            ${
              activeCircle === 0
                ? "border-[12px] border-[#FFDCB2] scale-115 sm:scale-125 lg:scale-145 z-10"
                : "border-[12px] border-transparent scale-90 sm:scale-95 lg:scale-100 hover:border-[#FFDCB2] hover:scale-110"
            }`}
          onMouseEnter={() => setActiveCircle(0)}
        >
          <img
            className="w-full h-full object-cover"
            src="ceo3.png"
            alt="CEO 3"
          />
        </div>

        {/* Bottom Center Circle */}
        <div
          className={`circle circle-bottom
            ${
              activeCircle === 2
                ? "border-[12px] border-[#A69EFF] scale-115 sm:scale-125 lg:scale-145 z-10"
                : "border-[12px] border-transparent scale-90 sm:scale-95 lg:scale-100 hover:border-[#A69EFF] hover:scale-110"
            }`}
          onMouseEnter={() => setActiveCircle(2)}
        >
          <img
            className="w-full h-full object-cover"
            src="ceo2.png"
            alt="CEO 2"
          />
        </div>
      </div>

      {/* Right side text */}
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 flex-1 transition-all duration-500 text-left">
        <h1 className="text-[#000000] text-[28px] sm:text-[36px] lg:text-[45px] font-black">
          {content[activeCircle].title}
        </h1>
        <p className="text-[#000000] text-[20px] sm:text-[24px] lg:text-[28px] font-black">
          {content[activeCircle].subtitle}
        </p>
        {content[activeCircle].description ? (
          <p className="text-[#111111] text-[16px] sm:text-[20px] lg:text-[25px] font-medium leading-relaxed">
            {content[activeCircle].description}
          </p>
        ) : (
          <p className="text-[#F38400] text-[16px] sm:text-[20px] lg:text-[25px] font-semibold leading-relaxed">
            {content[activeCircle].desc}
          </p>
        )}
        {content[activeCircle].quote && (
          <div className="bg-[#FFFAF4] p-3 rounded-xl text-[#000000] text-[16px] sm:text-[20px] lg:text-[25px] font-medium leading-relaxed">
            {content[activeCircle].quote}
          </div>
        )}
      </div>
    </div>
  );
};

export default CEOSection;
