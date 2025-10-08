"use client";
import React, { useEffect, useRef, useState } from "react";

type Step = {
  image: string;
  title: string;
  description: string;
  side: "left" | "right";
  titlePosition?: string;
  descriptionPosition?: string;
};

const steps: Step[] = [
  {
    image: "aboutus/creativity.svg",
    title: "Creativity",
    description:
      "We push boundaries with fresh ideas and bold imagination to craft unique solutions.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "aboutus/collaboration.svg",
    title: "Collaboration",
    description:
      "We thrive on teamwork, co-creation, and building strong, lasting partnerships.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
  {
    image: "aboutus/exellence.svg",
    title: "Excellence",
    description:
      "We are committed to delivering high-quality outcomes with precision and passion.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "aboutus/adaptability.svg",
    title: "Adaptability",
    description:
      "We embrace change, stay agile, and evolve with every challenge.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
     {
    image: "aboutus/integrity.svg",
    title: "Integrity",
    description:
      "We act with honesty, fairness, and accountability in everything we do.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "aboutus/integrity.svg",
    title: "Impact",
    description:
      "We design with purpose, creating solutions that drive real and lasting change.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[50%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },

  
];

// 👇 control floating here
const FLOAT_START_OFFSET = 150;
const FLOAT_END_OFFSET = 50;

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [floatState, setFloatState] = useState<"top" | "float" | "bottom">("top");

  const updateLineHeight = () => {
    if (!sectionRef.current) return;
    const newHeight = Math.max(
      sectionRef.current.scrollHeight,
      sectionRef.current.clientHeight,
      300
    );
    setLineHeight(newHeight);
  };

  useEffect(() => {
    updateLineHeight();

    const onResize = () => {
      updateLineHeight();
    };
    window.addEventListener("resize", onResize);

    const imgs = sectionRef.current?.querySelectorAll("img") ?? [];
    const handleImgLoad = () => updateLineHeight();
    imgs.forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener("load", handleImgLoad);
      img.addEventListener("error", handleImgLoad);
    });

    let ro: ResizeObserver | null = null;
    if (sectionRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        updateLineHeight();
      });
      ro.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => {
        img.removeEventListener("load", handleImgLoad);
        img.removeEventListener("error", handleImgLoad);
      });
      if (ro && sectionRef.current) ro.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const scrollY = window.scrollY;

      if (scrollY < sectionTop + FLOAT_START_OFFSET) {
        setFloatState("top");
      } else if (scrollY > sectionBottom - FLOAT_END_OFFSET) {
        setFloatState("bottom");
      } else {
        setFloatState("float");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const tealBottomTop = Math.max(0, lineHeight - 300);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20 overflow-hidden hidden sm:block">
      {/* Heading */}
      <h2 className="text-6xl md:text-6xl font-bold text-center text-[#545454] mb-16">
        Our values
      </h2>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
        {/* Gray Line */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 border-r-3 border-gray-400"
          style={{ height: `${lineHeight}px`, transition: "height 220ms ease" }}
        />

        {/* Teal Line */}
        {floatState === "top" && (
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 0 }}>
            <TealLine />
          </div>
        )}
        {floatState === "float" && (
          <div className="fixed left-1/2 top-0 -translate-x-1/2 z-20">
            <TealLine />
          </div>
        )}
        {floatState === "bottom" && (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: tealBottomTop }}
          >
            <TealLine />
          </div>
        )}

        {/* Steps */}
        <div className="flex flex-col relative" style={{ gap: "5.5rem" }}>
          {steps.map((step, index) => (
            <div key={index} className="relative w-full min-h-[160px]">
              {/* Image */}
              <div
                className={`absolute z-20 top-15 ${
                  step.side === "left"
                    ? "left-[43%] -translate-x-1/2"
                    : "right-[43%] translate-x-1/2"
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  onLoad={() => {
                    setTimeout(() => {
                      if (sectionRef.current) {
                        setLineHeight(
                          Math.max(
                            sectionRef.current.scrollHeight,
                            sectionRef.current.clientHeight,
                            300
                          )
                        );
                      }
                    }, 30);
                  }}
                />
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-semibold text-gray-700 ${step.titlePosition}`}>
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={`text-lg md:text-2xl text-[#6F6F6F] leading-relaxed ${step.descriptionPosition}`}
              >
                {step.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ reusable teal line component
function TealLine({ height = 250 }: { height?: number }) {
  return (
    <div
      className="w-[6px] bg-[#F38400] rounded-full relative"
      style={{ height }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20px] h-36 bg-gradient-to-b from-white to-transparent" />
    </div>
  );
}
