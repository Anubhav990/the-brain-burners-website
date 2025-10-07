"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
};

// ✅ Steps (same as before)
const steps: Step[] = [
  {
    id: 1,
    icon: "/steps/stepicon1.svg",
    title: "Discovery & Consultation",
    description:
      "We start by understanding your vision, goals, and challenges to align with your business needs.",
    bullets: ["The plan for the subsequent phases of our work."],
  },
  {
    id: 2,
    icon: "/steps/stepicon2.svg",
    title: "Deep Requirement Gathering",
    description:
      "Our team works closely with you to define clear requirements that ensure we solve the right problems.",
    bullets: [
      "BRD (Business Requirement Document)",
      "Functional requirements",
      "User Flow Diagram",
    ],
  },
  {
    id: 3,
    icon: "/steps/stepicon3.svg",
    title: "Strategic Planning & Estimation",
    description:
      "We provide a transparent project plan, timelines, and investment overview so you know exactly what to expect.",
    bullets: ["High-level project scope document."],
  },
  {
    id: 4,
    icon: "/steps/stepicon4.svg",
    title: "UX/UI Design Excellence",
    description:
      "Our design experts craft intuitive, user-friendly, and visually engaging interfaces that put your users first.",
    bullets: ["UX/UI design prototype."],
  },
  {
    id: 5,
    icon: "/steps/stepicon5.svg",
    title: "Technical Architecture & Development",
    description:
      "From apps to websites, we build scalable, high-performing solutions backed by modern technology.",
    bullets: ["Entity Relation Diagram", "Architecture documentation."],
  },
  {
    id: 6,
    icon: "/steps/stepicon6.svg",
    title: "Performance Marketing Setup",
    description:
      "Led by Robin, our performance marketing ensures your product not only launches but reaches the right audience.",
    bullets: [
      "Accurate project scope document.",
      "Required team capacity definition.",
    ],
  },
  {
    id: 7,
    icon: "/steps/stepicon7.svg",
    title: "Social Media & Brand Presence",
    description:
      "We help you establish a strong digital presence across social channels to keep your users engaged and loyal.",
    bullets: ["Milestone plan", "Project roadmap"],
  },
  {
    id: 8,
    icon: "/steps/stepicon8.svg",
    title: "Testing & Quality Assurance",
    description:
      "Every solution goes through rigorous testing to guarantee functionality, security, and a seamless experience.",
    bullets: ["Test reports document", "Test cases document"],
  },
  {
    id: 9,
    icon: "/steps/stepicon9.svg",
    title: "Continuous Growth Partnership",
    description:
      "We don’t stop at launch. With ongoing support, analytics, and optimization, we grow with you every step of the way.",
    bullets: ["Test reports document", "Test cases document"],
  },
];

export default function RoadMapMobile() {
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

      // base starting Y (40) + dynamic height
      const totalLength = sectionHeight - 80; // leave padding bottom
      const newHeight = 40 + totalLength * progress;

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
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2.5 h-2.5 bg-[#F38400] rounded-full"></span>
          <h2 className="text-sm font-medium tracking-wider text-gray-700 uppercase">
            The Brain Burners Roadmap
          </h2>
        </div>
        <h1 className="text-2xl font-bold leading-tight text-gray-900">
          "Designing intuitive, human-centered experiences that grow with
          innovation and user needs."
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* SVG Line connecting dots */}
        <svg
          className="absolute left-[-15px] top-0 pointer-events-none z-10"
          style={{
            width: "48px",
            height: "100%",
            overflow: "visible",
          }}
        >
          {/* Animated orange dashed line */}
          <line
            x1="24"
            y1="40"
            x2="24"
            y2={lineHeight}
            stroke="#F38400"
            strokeWidth="3"
            strokeDasharray="6,6"
            style={{
              transition: "y2 0.6s ease-out",
            }}
          />
        </svg>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative mb-8 last:mb-0"
            ref={(el) => {
              stepsRefs.current[index] = el;
            }}
          >
            {/* Dot */}
            <div className="absolute left-2 top-8 z-20 -translate-x-1/2 timeline-dot">
              <div className="w-4 h-4 bg-[#F38400] rounded-full  flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Content Card */}
            <div className="ml-4 bg-white rounded-2xl p-5">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                <span className="text-[#F38400]">
                  {String(step.id).padStart(2, "0")}
                </span>{" "}
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#555555] mb-3">{step.description}</p>

              {/* Bullets */}
              {step.bullets.length > 0 && (
                <ul className="space-y-1">
                  {step.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#F38400] font-medium flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
