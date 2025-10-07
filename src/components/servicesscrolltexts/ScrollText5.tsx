"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollText5 = () => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Desktop scroll animation
  const { scrollYProgress: scrollDesktop } = useScroll({
    target: desktopRef,
    offset: ["start 60%", "end 40%"],
  });
  const desktopFill = useTransform(scrollDesktop, [0, 1], [100, 0]);
  const desktopClip = useTransform(desktopFill, (h) => `inset(${100 - h}% 0 0 0)`);

  // Mobile scroll animation
  const { scrollYProgress: scrollMobile } = useScroll({
    target: mobileRef,
    offset: ["start 60%", "end 40%"],
  });
  const mobileFill = useTransform(scrollMobile, [0, 1], [100, 0]);
  const mobileClip = useTransform(mobileFill, (h) => `inset(${100 - h}% 0 0 0)`);

  return (
    <div className="w-full px-5 sm:max-w-[1300px] mx-auto mt-0 sm:mt-10 mb-10">
      <p className="font-bold text-[30px] sm:text-[70px] leading-[40px] sm:leading-[100px] text-black mb-0 sm:mb-3">
        Search Visibility<br />
        Made Simple
      </p>

      {/* === Desktop Version (with <br /> tags) === */}
      <div ref={desktopRef} className="relative z-20 text-left hidden sm:block">
        <div className="relative overflow-hidden text-xl md:text-4xl font-medium leading-[50px]">
          {/* Base text (orange) */}
          <div className="text-[25px] md:text-[54px] text-[#F38400] space-y-3 leading-[30px] md:leading-[63px]">
            <p className="capitalize">
              SEO isn’t just about rankings  it’s <br /> about building trust, driving traffic,<br /> and creating long-term success.<br /> With us, your brand won’t just be<br /> seen, it will be remembered.
            </p>
          </div>

          {/* Overlay (gray, revealed with scroll) */}
          <motion.div
            className="text-[25px] md:text-[54px] font-medium absolute top-0 left-0 w-full text-[#8D8986] space-y-3 leading-[30px] md:leading-[63px]"
            style={{ clipPath: desktopClip }}
          >
            <p className="capitalize">
              SEO isn’t just about rankings  it’s <br /> about building trust, driving traffic,<br /> and creating long-term success.<br /> With us, your brand won’t just be<br /> seen, it will be remembered.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === Mobile Version (no <br /> tags) === */}
      <div ref={mobileRef} className="relative z-20 text-left sm:hidden block">
        <div className="relative overflow-hidden text-xl font-medium leading-[38px]">
          {/* Base text (orange) */}
          <div className="text-[25px] text-[#F38400] leading-[38px]">
            <p className="capitalize">
              SEO isn’t just about rankings  it’s about building trust, driving traffic, and creating long-term success. With us, your brand won’t just be seen, it will be remembered.
            </p>
          </div>

          {/* Overlay (gray, revealed with scroll) */}
          <motion.div
            className="text-[25px] font-medium absolute top-0 left-0 w-full text-[#8D8986] leading-[38px]"
            style={{ clipPath: mobileClip }}
          >
            <p className="capitalize">
              SEO isn’t just about rankings  it’s about building trust, driving traffic, and creating long-term success. With us, your brand won’t just be seen, it will be remembered.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollText5;
