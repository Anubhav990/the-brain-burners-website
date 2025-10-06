"use client";

import React, { useEffect, useRef } from "react";

const ThirdSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight / 1.5);

    const starsCount = 200;
    const stars: { x: number; y: number; size: number; speed: number }[] = [];

    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#fff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight / 1.5;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex relative z-20 py-12 px-8 rounded-4xl bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Left Side */}
      <div className="flex w-[35%] items-center">
        <div className="text-left">
          {/* The Crew with Growing/Shrinking Line */}
          <div className="flex items-center mb-4">
            <span className="relative h-[3px] w-50 bg-transparent">
              <span className="absolute left-0 top-0 h-[3px] bg-[#F38400] animate-lineGrow"></span>
            </span>
            <span className="text-white text-2xl font-medium">
              The Crew
            </span>
          </div>

          {/* Our Journey */}
          <h2 className="font-[700] text-white text-[60px] leading-[70px]">
            Our Journey
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[65%]">
        <div className="pt-[60px] flex flex-col gap-4">
          <p className="text-white text-2xl">
            Every great mission starts with a spark—and ours ignited with a
            vision to blend creativity and technology into something out of this
            world. From our early launch as a small crew of passionate
            explorers, we’ve expanded into a full-fledged digital mission
            control, guiding brands through design, development, marketing, and
            beyond.
          </p>
          <p className="text-white text-2xl">
            Like astronauts navigating uncharted galaxies, we take each
            challenge as a new frontier—pushing boundaries, innovating, and
            ensuring our partners don’t just reach orbit but shine among the
            stars.
          </p>

            <button className="bg-[#F38400] py-4 px-8 text-white font-bold capitalize rounded-full mt-6 shadow-[2px_5px_0_#000000] self-start">
        <p className="text-[20px]">Meet The Crew ↗</p>
      </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes lineGrow {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
        .animate-lineGrow {
          animation: lineGrow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ThirdSection;
