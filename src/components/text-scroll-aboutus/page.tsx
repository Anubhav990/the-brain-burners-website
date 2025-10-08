"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Textcrol() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"], // animate during section visibility
  });

  // Reverse mapping: 0 → 100, 1 → 0
  const fillHeight = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const clipPath = useTransform(fillHeight, (h) => `inset(${100 - h}% 0 0 0)`);

  return (
    <div ref={containerRef} className="relative z-20 text-left">
      {/* Paragraph container */}
      <div className="relative overflow-hidden font-medium my-5 leading-[40px] sm:leading-[63px] text-[30px] sm:text-[54px]  capitalize">
        {/* Base text (orange) */}
        <div className="text-[#F38400] space-y-3">
          <p>
            With us, you’ll find more than a service provider you’ll find a
            mission partner. Driven by creativity, strategy, and innovation, we
            fuel your vision and launch it to new heights.
          </p>
        </div>

        {/* Overlay (gray fill draining as you scroll down) */}
        <motion.div
          className="font-medium absolute top-0 left-0 w-full text-[#8D8986] space-y-3 leading-[40px] sm:leading-[63px] text-[30px] sm:text-[54px]  capitalize"
          style={{ clipPath }}
        >
          <p>
            With us, you’ll find more than a service provider you’ll find a
            mission partner. Driven by creativity, strategy, and innovation, we
            fuel your vision and launch it to new heights.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
