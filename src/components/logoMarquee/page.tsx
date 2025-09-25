// import React from 'react';
// import Image from 'next/image';

// const logos = [
//   { name: 'Panasonic', src: '/panasonic.png', alt: 'Panasonic' },
//   { name: 'Dine First', src: '/dine-first.png', alt: 'dinefirst' },
//   { name: 'Rim Tuni', src: '/rimtuni.png', alt: 'rimtuni' },
//   { name: 'Jobjaro', src: '/jobjaro.png', alt: 'Jobjaro' },
//   { name: 'Posterized', src: '/posterized.png', alt: 'posterized' },
//   { name: 'Tiny', src: '/tiny.png', alt: 'tiny' },
//   { name: 'Core Immigration', src: '/core-immigration.png', alt: 'core-immigration' },
//   { name: 'Rejuvcare', src: '/rejuv-care.png', alt: 'rejuvcare' },
//   { name: 'RoopVeda', src: '/roopveda.png', alt: 'roopveda' },
//   { name: 'VisaBox', src: '/visabox.png', alt: 'visabox' },
//   { name: 'PizzaDelight', src: '/pizzadelight.png', alt: 'pizzadelight' },
// ];

// const LogoMarquee: React.FC = () => {
//   return (
//     <div className="w-full overflow-hidden bg-gray-400 py-8">
//       <div className="flex animate-marquee hover:animate-marquee-pause">
//         {/* First set */}
//         <div className="flex items-center min-w-full">
//           {logos.map((logo, index) => (
//             <div 
//               key={`first-${index}`}
//               className="flex items-center justify-center min-w-[200px] h-20 flex-shrink-0"
//             >
//               <Image
//                 src={logo.src} 
//                 alt={logo.alt}
//                 width={120}
//                 height={60}
//                 className="  w-auto h-auto object-contain 
//                           grayscale opacity-70 transition-all duration-300 
//                           hover:grayscale-0 hover:opacity-100 hover:scale-105"
//                 priority={index < 3}
//               />
//             </div>
//           ))}
//         </div>
        
//         {/* Duplicate set for seamless loop */}
//         <div className="flex items-center min-w-full">
//           {logos.map((logo, index) => (
//             <div 
//               key={`second-${index}`}
//               className="flex items-center justify-center  min-w-[160px] h-20 flex-shrink-0"
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={120}
//                 height={60}
//                 className="w-auto h-auto object-contain 
//                           grayscale opacity-70 transition-all duration-300 
//                           hover:grayscale-0 hover:opacity-100 hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default LogoMarquee;

"use client"

import React from 'react';

const logos = [
  { name: 'Panasonic', src: '/panasonic.png', alt: 'Panasonic' },
  { name: 'Dine First', src: '/dine-first.png', alt: 'dinefirst' },
  { name: 'Rim Tuni', src: '/rimtuni.png', alt: 'rimtuni' },
  { name: 'Jobjaro', src: '/jobjaro.png', alt: 'Jobjaro' },
  { name: 'Posterized', src: '/posterized.png', alt: 'posterized' },
  { name: 'Tiny', src: '/tiny.png', alt: 'tiny' },
  { name: 'Core Immigration', src: '/core-immigration.png', alt: 'core-immigration' },
  { name: 'Rejuvcare', src: '/rejuv-care.png', alt: 'rejuvcare' },
  { name: 'RoopVeda', src: '/roopveda.png', alt: 'roopveda' },
  { name: 'VisaBox', src: '/visabox.png', alt: 'visabox' },
  { name: 'PizzaDelight', src: '/pizzadelight.png', alt: 'pizzadelight' },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4 relative z-20">
      <div className="flex animate-marquee">
        {/* First set */}
        <div className="flex items-center gap-12 pr-12">
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`}
              className="flex items-center justify-center w-32 h-20 flex-shrink-0"
            >
              <img
                src={logo.src} 
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain 
                          grayscale opacity-70 transition-all duration-300 
                          hover:grayscale-0 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 pr-12">
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`}
              className="flex items-center justify-center w-32 h-20 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain 
                          grayscale opacity-70 transition-all duration-300 
                          hover:grayscale-0 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;