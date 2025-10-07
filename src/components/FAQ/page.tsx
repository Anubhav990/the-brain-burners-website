"use client";


import React, { useEffect, useRef, useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is edulinks?",
    answer:
      "EduLinks is an AI-powered career guidance and learning platform that helps students discover the right career path, prepare for exams, and apply to top universities all in one place.",
  },
  {
    question: "Who can use edulinks?",
    answer:
      "EduLinks is designed for students, parents, and professionals seeking guidance in education, career, and skill development.",
  },
  {
    question: "What makes edulinks different from other edtech apps?",
    answer:
      "EduLinks combines personalized AI guidance, expert mentorship, and community support, making it unique compared to traditional edtech platforms.",
  },
  {
    question: "Is the career test accurate?",
    answer:
      "Yes, the career test is backed by scientific methods and AI insights, ensuring reliable recommendations for students.",
  },
  {
    question: "Is my data safe on edulinks?",
    answer:
      "Absolutely. EduLinks prioritizes user privacy with strict security measures and data protection standards.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const containerRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  const TOP_OFFSET = 95;
  const STOP_OFFSET = 130;

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const left = leftRef.current;
      if (!container || !left) return;

      // Only apply sticky on desktop screens
      if (window.innerWidth < 768) {
        setStyle({ position: "static", width: "auto" });
        return;
      }

      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const leftHeight = left.offsetHeight;

      const columnWidth = left.offsetWidth;
      const columnLeft = left.getBoundingClientRect().left + window.scrollX;

      const start = containerTop - TOP_OFFSET;
      const end = containerTop + containerHeight - leftHeight - STOP_OFFSET;

      setPlaceholderHeight(leftHeight);

      if (scrollY < start) {
        setStyle({ position: "static", width: "auto" });
      } else if (scrollY >= start && scrollY <= end) {
        setStyle({
          position: "fixed",
          top: `${TOP_OFFSET}px`,
          left: `${columnLeft}px`,
          width: `${columnWidth}px`,
        });
      } else {
        setStyle({
          position: "absolute",
          top: `${containerHeight - leftHeight - STOP_OFFSET}px`,
          left: "0px",
          width: `${columnWidth}px`,
        });
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

  return (
    <section
      ref={containerRef}
      className="z-20 relative max-w-[1300px] mx-auto py-13 grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-10 items-start"
    >
      {/* LEFT COLUMN */} 
      <div className="relative left-0 sm:left-16 ">
        {style.position !== "static" && (
          <div aria-hidden style={{ height: placeholderHeight }} />
        )}

        <div ref={leftRef} style={style}>
          <h2
            style={{
              borderTopLeftRadius: "20px",
            }}
            className="text-2xl leading-snug sm:text-3xl md:text-4xl bg-[#FFFAF4]  px-8 py-5 font-bold text-gray-900"
          >
            Frequently asked <br />{" "}
            <span className="text-[#F38400] font-bold">Questions</span>
          </h2>
          <p
            style={{
              borderBottomLeftRadius: "20px",
            }}
            className="text-[#000000] font-medium sm:text-md md:text-lg bg-[#FFFAF4] px-8 pb-5 leading-relaxed"
          >
            Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit <br />
            AmetLorem Ipsum Dolor Sit AmetLorem Ipsum
            <br /> Dolor Sit Amet
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-5 bg-[#FFFAF4] px-8 py-6 rounded-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-2xl py-6 sm:py-6 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium px-4 text-lg sm:text-xl md:text-xl text-gray-900 flex-1 break-words">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronCircleUp className="text-[#F38400] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              ) : (
                <FaChevronCircleDown className="text-[#F38400] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              )}
            </div>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 px-4 text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
