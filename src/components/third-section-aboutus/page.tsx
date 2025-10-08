"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const ThirdSection = () => {

  const router = useRouter();

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
    <div className="w-full flex flex-col lg:flex-row relative z-20 py-12 px-5 sm:px-10 rounded-4xl bg-black overflow-hidden items-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center w-full lg:w-[35%] text-center lg:text-left mb-8 lg:mb-0">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="relative h-[3px] w-16 bg-transparent mr-2">
              <span className="absolute left-0 top-0 h-[3px] bg-[#F38400] animate-lineGrow"></span>
            </span>
            <span className="text-white text-2xl font-medium">The Crew</span>
          </div>

          <h2 className="font-[700] text-white text-[45px] sm:text-[60px] leading-[55px] sm:leading-[70px]">
            Our Journey
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[65%] flex flex-col justify-between text-left">
        <div className="flex flex-col gap-4">
          <p className="text-white text-[17px] sm:text-[20px] leading-relaxed">
            Every great mission starts with a spark—and ours ignited with a
            vision to blend creativity and technology into something out of this
            world. From our early launch as a small crew of passionate
            explorers, we’ve expanded into a full-fledged digital mission
            control, guiding brands through design, development, marketing, and
            beyond.
          </p>
          <p className="text-white text-[17px] sm:text-[20px] leading-relaxed">
            Like astronauts navigating uncharted galaxies, we take each
            challenge as a new frontier—pushing boundaries, innovating, and
            ensuring our partners don’t just reach orbit but shine among the
            stars.
          </p>

          <button onClick={() => router.push('/our-team')} className="bg-[#F38400] py-4 px-8 text-white font-bold capitalize rounded-full mt-6 shadow-[2px_5px_0_#000000] self-center lg:self-start">
            <p className="text-[18px] sm:text-[20px]">Meet The Crew ↗</p>
          </button>
        </div>
      </div>

      {/* Line Animation */}
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
