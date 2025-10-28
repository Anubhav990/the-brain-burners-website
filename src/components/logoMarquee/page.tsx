"use client"

import Image from 'next/image';
import React from 'react';

const logos = [
  // done
  { name: 'Panasonic', src: '/marquee/panasonic.png', alt: 'Panasonic' },
  // done
  { name: 'Edulinks', src: '/marquee/edulinks.png', alt: 'Edulinks' },
  // done
  { name: 'Dine First', src: '/marquee/dinefirst.png', alt: 'Dine First' },
  // done
  { name: 'Jobjaro', src: '/marquee/jobjaro.png', alt: 'Jobjaro' },
  // done
  { name: 'Leverage Edu', src: '/marquee/leverage.png', alt: 'leverage' },
  // done
  { name: 'Skillzy', src: '/marquee/skillzy.png', alt: 'Skillzy' },
  // done
  { name: 'Rimt uni', src: '/marquee/rimtuni.png', alt: 'rimtuni' },
  // done
  { name: 'Tiny', src: '/marquee/tiny.png', alt: 'tiny' },
  // done
  { name: 'Core Immigration', src: '/marquee/core.png', alt: 'core-immigration' },
  // done
  { name: 'Finn', src: '/marquee/finn.png', alt: 'Finn' },
  // done
  { name: 'Queens Drive', src: '/marquee/queens.png', alt: 'Queens Drive' },
  // done
  { name: 'Roop Veda', src: '/marquee/roopveda.png', alt: 'Roop Veda' },
  // done
  { name: 'Visa Box', src: '/marquee/visabox.png', alt: 'Visa Box' },
  // done
  { name: 'PizzaDelight', src: '/marquee/pizzadelight.png', alt: 'pizzadelight' },
  // done
  { name: 'Themud', src: '/marquee/themud.png', alt: 'Themud' },
  // done
  { name: 'Posterized', src: '/marquee/posterized.png', alt: 'posterized' },
  // done
  { name: 'AccountingExperts', src: '/marquee/accounting.png', alt: 'AccountingExperts' },
  // done
  { name: 'Slavery', src: '/marquee/slaveryfootprint.png', alt: 'Slavery' },
  // done
  { name: 'Aeis', src: '/marquee/aeis.png', alt: 'Aeis' },
  { name: 'Nownforever', src: '/marquee/nownforever.png', alt: 'Nownforever' },
  // done
  { name: 'Zarl', src: '/marquee/zarl.png', alt: 'Zarl' },
  // done
  { name: 'SkinInspired', src: '/marquee/skininspired.png', alt: 'SkinInspired' },
  // done
  { name: 'InstitueBanking', src: '/marquee/instituebanking.png', alt: 'InstitueBanking' },
  // done
  { name: 'Hoopsie', src: '/marquee/hoopsie.png', alt: 'Hoopsie' },
  // done
  { name: 'Infutrix', src: '/marquee/infutrix.png', alt: 'Infutrix' },
  // done
  { name: 'Zaucto', src: '/marquee/zaucto.png', alt: 'Zaucto' },
  // done
  { name: 'Primedepth', src: '/marquee/primedepth.png', alt: 'Primedepth' },
  // done
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
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                unoptimized
                className="max-w-full max-h-full w-30 h-auto object-contain opacity-70 transition-all duration-300"
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
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                unoptimized
                className="max-w-full max-h-full w-30 h-auto object-contain opacity-70 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
