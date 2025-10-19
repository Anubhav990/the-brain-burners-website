"use client"

import React from 'react';

const logos = [
  { name: 'Panasonic', src: '/marquee/panasonic.png', alt: 'Panasonic' },
  { name: 'Edulinks', src: '/marquee/edulinks.png', alt: 'Edulinks' },
  { name: 'Dine First', src: '/marquee/dinefirst.png', alt: 'Dine First' },
  { name: 'Jobjaro', src: '/marquee/jobjaro.png', alt: 'Jobjaro' },
  { name: 'Leverage Edu', src: '/marquee/leverage.png', alt: 'leverage' },
  { name: 'Skillzy', src: '/marquee/skillzy.png', alt: 'Skillzy' },
  { name: 'Rimt uni', src: '/marquee/rimtuni.png', alt: 'rimtuni' },
  { name: 'Tiny', src: '/marquee/tiny.png', alt: 'tiny' },
  { name: 'Core Immigration', src: '/marquee/core.png', alt: 'core-immigration' },
  { name: 'Finn', src: '/marquee/finn.png', alt: 'Finn' },
  { name: 'Queens Drive', src: '/marquee/queens.png', alt: 'Queens Drive' },
  { name: 'Roop Veda', src: '/marquee/roopveda.png', alt: 'Roop Veda' },
  { name: 'Visa Box', src: '/marquee/visabox.png', alt: 'Visa Box' },
  { name: 'PizzaDelight', src: '/marquee/pizzadelight.png', alt: 'pizzadelight' },
  { name: 'Themud', src: '/marquee/themud.png', alt: 'Themud' },
  { name: 'Posterized', src: '/marquee/posterized.png', alt: 'posterized' },
  { name: 'AccountingExperts', src: '/marquee/accounting.png', alt: 'AccountingExperts' },
  { name: 'Slavery', src: '/marquee/slaveryfootprint.png', alt: 'Slavery' },
  { name: 'Aeis', src: '/marquee/aeis.png', alt: 'Aeis' },
  { name: 'Nownforever', src: '/marquee/nownforever.png', alt: 'Nownforever' },
  { name: 'Zarl', src: '/marquee/zarl.png', alt: 'Zarl' },
  { name: 'SkinInspired', src: '/marquee/skininspired.png', alt: 'SkinInspired' },
  { name: 'InstitueBanking', src: '/marquee/instituebanking.png', alt: 'InstitueBanking' },
  { name: 'Hoopsie', src: '/marquee/hoopsie.png', alt: 'Hoopsie' },
  { name: 'Infutrix', src: '/marquee/infutrix.png', alt: 'Infutrix' },
  { name: 'Zaucto', src: '/marquee/zaucto.png', alt: 'Zaucto' },
  { name: 'Primedepth', src: '/marquee/primedepth.png', alt: 'Primedepth' },
  { name: 'Propertypro', src: '/marquee/propertypro.png', alt: 'Propertypro' },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-[4px] relative z-10">
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
                className="max-w-full max-h-full w-auto h-auto object-contain opacity-70 transition-all duration-300"
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
                className="max-w-full max-h-full w-auto h-auto object-contain opacity-70 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
