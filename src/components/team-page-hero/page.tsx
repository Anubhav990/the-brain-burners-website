// "use client";
// import React from "react";
// import AnimatedDots from "../animateddots/page";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 px-3 py-6 sm:px-10 sm:py-10 lg:px-20">
//       <AnimatedDots />

//       <div className="z-10 ">
//         <h1 className="text-[#F38400] mb-2 uppercase text-4xl lg:text-[64px] font-black">
//           Meet the Crew
//         </h1>
//         <p className="text-[#111111] captalize text-md sm:text-lg lg:text-[32px] font-medium">
//           The explorers behind Brain Burners. Each member brings unique skills,
//           fueling our mission to push ideas beyond Earth’s limits.
//         </p>
//       </div>
//       <div className="w-full h-full md:w-[1400px] md:h-[450px]">
//         <Image priority alt="team" width={600} height={400}
//         style={{zIndex: 999}}
//         className="w-full h-full" src="/team.svg" />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


"use client";
import React from "react";
import AnimatedDots from "../animateddots/page";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 px-3 py-6 sm:px-10 sm:py-10 lg:px-20 overflow-hidden">
      {/* Animated Dots Background */}
      <AnimatedDots />

      <div className="z-10 text-center md:text-left max-w-3xl">
        <h1 className="text-[#F38400] mb-2 uppercase text-4xl lg:text-[64px] font-black">
          Meet the Crew
        </h1>
        <p className="text-[#111111] capitalize text-md sm:text-lg lg:text-[32px] font-medium">
          The explorers behind Brain Burners. Each member brings unique skills,
          fueling our mission to push ideas beyond Earth’s limits.
        </p>
      </div>

      <div className="relative z-20 w-full h-full md:w-[1400px] md:h-[450px]">
        <Image
          priority
          alt="team"
          width={600}
          height={400}
          src="/team.svg"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
