// "use client";


// import React, { useEffect, useRef, useState } from "react";
// import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

// const faqs = [
//   {
//     question: "What services does The Brain Burners (TBB) provide?",
//     answer:
//       "TBB is a full-stack IT company specializing in custom UI/UX design, app and website development, Performance Marketing, SEO, Branding, Social Media Management and Artificial Intelligence Modernization. We create tailored digital solutions that combine technology, creativity, and strategy ensuring every brand we work with stands out online.",
//   },
//   {
//     question: "What makes TBB different from other IT companies?",
//     answer:
//       "Unlike agencies that recycle templates, TBB designs every UI/UX from scratch, giving your brand a unique visual identity. We focus on functionality, speed, and design psychology — not just looks — ensuring your website or app actually converts visitors into customers.",
//   },
//   {
//     question: "How does TBB work with clients?",
//     answer:
//       "We start with a discovery call to understand your goals, audience, and brand tone. Then, we share a custom project roadmap with design mockups, timelines, and development phases. You’re kept in the loop through every milestone from concept to deployment..",
//   },
//   {
//     question: "Can TBB handle everything from design to marketing?",
//     answer:
//       "Yes. TBB offers a complete digital ecosystem — UI/UX, web & app development, branding, SEO, and social media management. You don’t need multiple vendors; we build and grow your brand under one roof.",
//   },
//   {
//     question: "How long does it take to develop a website or app?",
//     answer: `It depends on project size:
// Landing Page: 5–7 days

// Corporate Website: 2–4 weeks

// Custom Web/App Project: 6–10 weeks
// We deliver sample designs early so you can visualize direction before full development.`,
//   },
//   {
//     question: "What do I receive at the end of the project?",
//     answer:
//       `You’ll get:

// Complete source files (Figma, XD, codebase)

// Deployment on your server or app store

// Brand assets (icons, fonts, color codes)

// Documentation & optional post-launch support`
//   },
//   {
//     question: "Do you provide hosting and domain services too?",
//     answer:
//       "We can assist with domain registration, server setup, SSL integration, and website hosting — or work with your existing infrastructure if you already have one.",
//   },
// ];

// export default function FAQS() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);
//   const toggleFAQ = (index: number) =>
//     setOpenIndex(openIndex === index ? null : index);

//   const containerRef = useRef<HTMLElement | null>(null);
//   const leftRef = useRef<HTMLDivElement | null>(null);
//   const [style, setStyle] = useState<React.CSSProperties>({});
//   const [placeholderHeight, setPlaceholderHeight] = useState(0);

//   const TOP_OFFSET = 95;
//   const STOP_OFFSET = 105;

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = containerRef.current;
//       const left = leftRef.current;
//       if (!container || !left) return;

//       // Only apply sticky on desktop screens
//       if (window.innerWidth < 768) {
//         setStyle({ position: "static", width: "auto" });
//         return;
//       }

//       const scrollY = window.scrollY;
//       const containerTop = container.offsetTop;
//       const containerHeight = container.offsetHeight;
//       const leftHeight = left.offsetHeight;

//       const columnWidth = left.offsetWidth;
//       const columnLeft = left.getBoundingClientRect().left + window.scrollX;

//       const start = containerTop - TOP_OFFSET;
//       const end = containerTop + containerHeight - leftHeight - STOP_OFFSET;

//       setPlaceholderHeight(leftHeight);

//       if (scrollY < start) {
//         setStyle({ position: "static", width: "auto" });
//       } else if (scrollY >= start && scrollY <= end) {
//         setStyle({
//           position: "fixed",
//           top: `${TOP_OFFSET}px`,
//           left: `${columnLeft}px`,
//           width: `${columnWidth}px`,
//         });
//       } else {
//         setStyle({
//           position: "absolute",
//           top: `${containerHeight - leftHeight - STOP_OFFSET}px`,
//           left: "0px",
//           width: `${columnWidth}px`,
//         });
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="z-20 relative max-w-[1300px] mx-auto py-13 grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-10 items-start"
//     >
//       {/* LEFT COLUMN */}
//       <div className="relative left-0 sm:left-16 ">
//         {style.position !== "static" && (
//           <div aria-hidden style={{ height: placeholderHeight }} />
//         )}

//         <div ref={leftRef} style={style}>
//           <h2
//             style={{
//               borderTopLeftRadius: "20px",
//             }}
//             className="text-2xl leading-snug sm:text-3xl md:text-4xl bg-[#FFFAF4]  px-8 py-5 font-bold text-gray-900"
//           >
//             Frequently asked <br />{" "}
//             <span className="text-[#F38400] font-bold">Questions</span>
//           </h2>
//           <p
//             style={{
//               borderBottomLeftRadius: "20px",
//             }}
//             className="text-[#000000] font-medium sm:text-md md:text-lg bg-[#FFFAF4] px-8 pb-5 leading-relaxed"
//           >
//             Whether you’re seeking clarification on our services, understanding specific processes, or looking for guidance on next steps, you’ll find essential information here.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-5 bg-[#FFFAF4] px-8 py-6 rounded-3xl">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-[#FFFFFF] rounded-2xl py-6 sm:py-6 cursor-pointer transition"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="font-medium px-4 text-lg sm:text-xl md:text-xl text-gray-900 flex-1 break-words">
//                 {faq.question}
//               </h3>
//               {openIndex === index ? (
//                 <FaChevronCircleUp className="text-[#F38400] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
//               ) : (
//                 <FaChevronCircleDown className="text-[#F38400] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
//               )}
//             </div>

//             <div
//               className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-96 mt-2" : "max-h-0"
//                 }`}
//             >
//               <p className="text-gray-700 px-4 text-sm sm:text-base">
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

// ✅ Step 1: Accept faqs as props instead of defining inside
type FAQ = {
  question: string;
  answer: string;
};

export default function FAQS({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const containerRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  const TOP_OFFSET = 95;
  const STOP_OFFSET = 105;

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const left = leftRef.current;
      if (!container || !left) return;

      // Only apply sticky on desktop
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
            style={{ borderTopLeftRadius: "20px" }}
            className="text-2xl leading-snug sm:text-3xl md:text-4xl bg-[#FFFAF4] px-8 py-5 font-bold text-gray-900"
          >
            Frequently asked <br />
            <span className="text-[#F38400] font-bold">Questions</span>
          </h2>
          <p
            style={{ borderBottomLeftRadius: "20px" }}
            className="text-[#000000] font-medium sm:text-md md:text-lg bg-[#FFFAF4] px-8 pb-5 leading-relaxed"
          >
            Whether you’re seeking clarification on our services, understanding
            specific processes, or looking for guidance on next steps, you’ll
            find essential information here.
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
