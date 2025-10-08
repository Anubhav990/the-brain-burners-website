"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  image: string;
  title: string;
  description: string;
};

// Updated steps from desktop component
const steps: Step[] = [
  {
    id: 1,
    image: "aboutus/creativity.svg",
    title: "Creativity",
    description:
      "We push boundaries with fresh ideas and bold imagination to craft unique solutions.",
  },
  {
    id: 2,
    image: "aboutus/collaboration.svg",
    title: "Collaboration",
    description:
      "We thrive on teamwork, co-creation, and building strong, lasting partnerships.",
  },
  {
    id: 3,
    image: "aboutus/exellence.svg",
    title: "Excellence",
    description:
      "We are committed to delivering high-quality outcomes with precision and passion.",
  },
  {
    id: 4,
    image: "aboutus/adaptability.svg",
    title: "Adaptability",
    description:
      "We embrace change, stay agile, and evolve with every challenge.",
  },
  {
    id: 5,
    image: "aboutus/integrity.svg",
    title: "Integrity",
    description:
      "We act with honesty, fairness, and accountability in everything we do.",
  },
  {
    id: 6,
    image: "aboutus/impact.svg",
    title: "Impact",
    description:
      "We design with purpose, creating solutions that drive real and lasting change.",
  },
];

export default function HowItWorksMob() {
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollStart = sectionTop - windowHeight * 0.2;
      const scrollEnd = sectionTop + sectionHeight - windowHeight * 0.3;
      const scrollRange = scrollEnd - scrollStart;

      const progress = Math.min(
        Math.max((scrollY - scrollStart) / scrollRange, 0),
        1
      );

      // Adjust START_POINT to change where the gradient line begins (in pixels)
      const START_POINT = 0; // Starts from the very top
      
      const totalLength = sectionHeight - 80; // leave padding bottom
      const newHeight = START_POINT + totalLength * progress;

      setLineHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12 px-6 overflow-hidden block sm:hidden"
    >
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold leading-tight text-[#545454] text-center mb-8">
          Our values
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Grey background line */}
        <div
          className="absolute left-[9px] top-0 pointer-events-none"
          style={{
            width: "6px",
            height: "100%",
            backgroundColor: "#D1D1D1",
          }}
        />

        {/* Gradient Line */}
        <div
          className="absolute left-[9px] pointer-events-none z-10"
          style={{
            top: "0px", // Starts from the top
            width: "6px",
            height: `${Math.max(0, lineHeight)}px`,
            background: "linear-gradient(180deg, #FFFFFF 0%, #F38400 49.52%)",
            transition: "height 0.6s ease-out",
          }}
        />

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative mb-8 last:mb-0"
            ref={(el) => {
              stepsRefs.current[index] = el;
            }}
          >
            {/* Content Card */}
            <div className="ml-4 bg-white rounded-2xl p-5">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6F6F6F] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}