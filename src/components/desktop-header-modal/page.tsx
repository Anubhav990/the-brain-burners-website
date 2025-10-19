"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HeaderModalProps = {
  onClose: () => void;
};

export default function HeaderModal({ onClose }: HeaderModalProps) {

  const router = useRouter();

  // ✅ Generate random dot positions only once (prevents shifting)
  const dots = React.useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${10 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`,
        opacity: 0.4 + Math.random() * 0.6,
        size: 2 + Math.random() * 3, // random size for depth
      })),
    []
  );

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto overflow-hidden text-white font-sans">
      {/* ===== Animated Background Dots ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="absolute rounded-full animate-float shadow-[0_0_8px_2px_rgba(243,132,0,0.6)]"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: "#ffffffff",
              animationDuration: dot.duration,
              animationDelay: dot.delay,
              opacity: dot.opacity,
              // ✅ Random movement distance for each dot
              ["--tx" as any]: `${40 + Math.random() * 100}px`,
              ["--ty" as any]: `${40 + Math.random() * 100}px`,
            }}
          />
        ))}
      </div>

      {/* ===== Vertical Text ===== */}
      <div className="fixed left-10 sm:left-[-340px] top-30 sm:top-1/2 -translate-y-1/2 sm:-rotate-90 origin-center">
        <h2 className="text-transparent bg-clip-text bg-[linear-gradient(270deg,rgba(18,18,18,0.4)_0%,rgba(255,255,255,0.4)_50%,rgba(18,18,18,0.4)_100%)] text-2xl sm:text-[80px] font-extrabold tracking-wider whitespace-nowrap leading-none">
          THE BRAIN BURNERS
        </h2>
      </div>

      {/* ===== Close Button ===== */}
      <button
        onClick={onClose}
        className="fixed cursor-pointer top-8 right-8 text-[#F38400] hover:scale-110 transition-transform duration-200 z-[60]"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="10" y1="10" x2="30" y2="30" />
          <line x1="30" y1="10" x2="10" y2="30" />
        </svg>
      </button>

      {/* ===== Main Layout ===== */}
      <div className="mt-20 sm:mt-0 h-auto sm:h-full gap-10 flex flex-col justify-between relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start mt-25 sm:mt-50 md:mt-25 px-6 sm:px-15 lg:px-24">
          {/* ==== Left Section ==== */}
          <div className="flex flex-col sm:items-start items-center justify-between gap-10 sm:gap-40 mx-auto sm:ml-20 lg:ml-30">
            <div>
              <h1 className="whitespace-normal text-center sm:text-left sm:whitespace-nowrap text-3xl sm:text-6xl font-extrabold mb-6 leading-snug">
                HAVE QUESTIONS?
              </h1>
              <p className="text-sm sm:text-2xl text-center sm:text-left font-light">
                Email us to:{" "}
                <a href="mailto:info@thebrainburners.io" className="underline">
                  info@thebrainburners.io
                </a>
              </p>
            </div>

            <button
              onClick={() => router.push('/contact')}
              className="bg-[#F38400] text-white font-semibold px-12 py-3 rounded-full text-sm sm:text-lg shadow-[3px_4px_0px_0px_#FFFFFFCC] hover:shadow-[4px_5px_0px_0px_#FFFFFF99] transition-shadow duration-200 w-fit">
              Book A Call
            </button>
          </div>

          {/* ==== Astronaut Image ==== */}
          <div
            className="relative w-[300px] h-[200px] sm:h-[300px] mr-0 lg:mr-12 ml-10 sm:ml-[-350px] lg:ml-0  mt-[50px] sm:mt-[180px] lg:mt-[120px]"
            style={{ animation: "floating 3s ease-in-out infinite" }}
          >
            <Image
              src="svgs/astro.svg"
              alt="Astronaut"
              fill
              className="object-contain"
            />
          </div>

          {/* ==== Right Section - Navigation ==== */}
          <nav className="border-l pl-0 sm:pl-12  flex flex-row flex-wrap justify-center sm:flex-col gap-6 text-left [border-image:linear-gradient(180deg,rgba(18,18,18,0.3)_0%,rgba(255,255,255,0.3)_50%,rgba(18,18,18,0.3)_100%)_1]">
            {[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us" },
              { label: "Our Team", href: "our-team" },
              { label: "Services", href: "/services" },
              { label: "Our Work", href: "/portfolio" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className="text-sm sm:text-2xl border-b [border-b-width:4px] font-semibold border-white pb-2 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ===== Divider Line ===== */}
        <div className="w-full sm:max-w-[1500px] mx-auto h-[1.36px] [background:linear-gradient(90deg,rgba(18,18,18,0.3)_10%,rgba(255,255,255,0.3)_40%,rgba(18,18,18,0.3)_100%)] text-black">""</div>

        {/* ===== Footer Section ===== */}
        <div className="">
          {/* Add gray gradient border ABOVE footer content */}
          {/* <div className="hidden sm:block w-full sm:max-w-[1300px] ml-auto h-[1px] [background:linear-gradient(90deg,rgba(18,18,18,0.3)_0%,rgba(255,255,255,0.3)_50%,rgba(18,18,18,0.3)_100%)]"></div> */}
          <div className="flex flex-row items-center justify-start sm:justify-end gap-4 sm:gap-28 px-4 sm:px-8 pb-8">
            {/* Logo */}
            <div className="pr-4 sm:pr-12 border-r [border-image:linear-gradient(180deg,rgba(18,18,18,0.3)_0%,rgba(255,255,255,0.3)_50%,rgba(18,18,18,0.3)_100%)_1]">
              <Image
                src="svgs/tbblogo.svg"
                alt="The Brain Burners Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Social Links */}
            <div className="flex  items-center gap-4 sm:gap-25">
              {[
                { name: "Instagram", icon: "svgs/insta.svg", path: "https://www.instagram.com/_tbbmedia_?igsh=MXZubnM4b3pqcGhiMw==" },
                { name: "LinkedIn", icon: "svgs/linkedin.svg", path: "https://www.linkedin.com/company/thebrainburners/" },
                { name: "Facebook", icon: "svgs/fb.svg", path: "https://www.facebook.com/profile.php?id=61561826016009" },
              ].map((social, i, arr) => (
                <React.Fragment key={social.name}>
                  <a href={social.path} className="flex items-center gap-3 " target="_blank">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={30}
                      height={30}
                      className="object-contain w-8 h-8"
                    />
                    <span className="hidden sm:block text-2xl mt-[5px]">
                      {social.name}
                    </span>
                  </a>
                  {i !== arr.length - 1 && (
                    <div className="h-25 w-[1px] [background:linear-gradient(180deg,rgba(18,18,18,0.3)_0%,rgba(255,255,255,0.3)_50%,rgba(18,18,18,0.3)_100%)]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Animation Styles ===== */}
      <style jsx>{`
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          /* use custom offsets per dot */
          --tx: 100px;
          --ty: 80px;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(var(--tx), calc(var(--ty) * -1)) scale(1.05);
            opacity: 1;
          }
          50% {
            transform: translate(calc(var(--tx) * -1), var(--ty)) scale(0.95);
            opacity: 0.9;
          }
          75% {
            transform: translate(var(--tx), var(--ty)) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
