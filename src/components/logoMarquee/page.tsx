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
    <div className="w-full overflow-hidden bg-gray-100 py-4 relative z-10">
      <div className="flex animate-marquee">

        {/* First set */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12 pr-6 sm:pr-8 md:pr-12">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 
                         h-14 sm:h-16 md:h-18 lg:h-20 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain 
                          grayscale opacity-70 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12 pr-6 sm:pr-8 md:pr-12">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 
                         h-14 sm:h-16 md:h-18 lg:h-20 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain 
                          grayscale opacity-70 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
