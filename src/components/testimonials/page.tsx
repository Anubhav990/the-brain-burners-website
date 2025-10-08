import Image from "next/image";
import React, { useEffect, useRef } from "react";

const TestimonialsSlider = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      id: 1,
      company: "/sliders/fulllogos/posterizedfull.svg", // company logo image
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "We needed something bold and scroll-stopping. The Brain Burners delivered a site that truly reflects our creative energy. Sales spiked, engagement soared couldn’t ask for more.",
    },
    {
      id: 2,
      company: "/sliders/fulllogos/finnfull.svg",
      logo: "/sliders/toprightlogos/finnhalf.svg",
      text: "A clean, friendly site with great flow. They captured our brand tone beautifully.",
    },
    {
      id: 3,
      company: "/sliders/fulllogos/skininspiredfull.svg",
      logo: "/sliders/toprightlogos/skininspiredhalf.svg",
      text: "From wireframes to the final layout, the entire process felt seamless. The design now educates, sells, and builds trust.",
    },
    {
      id: 4,
      company: "/sliders/fulllogos/nownforeverfull.svg",
      logo: "/sliders/toprightlogos/nownforeverhalf.svg",
      text: "Our website now feels like a luxury showroom. It's elegant, high converting, and exactly what our premium gifting audience expects.",
    },
     {
      id: 5,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "Minimal yet expressive the design captured our identity down to the detail. Their design team gets fashion!",
    },
     {
      id: 6,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "We wanted vibrant, bold, and festive and they absolutely nailed it. Customers love how easy it is to browse now.",
    },
     {
      id: 7,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "This site races literally. Fast load speeds, sharp UI, and a luxurious look. Couldn’t be more aligned with our brand.",
    },

    {
      id: 8,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "The new design is warm and welcoming. It makes our product offerings clearer and improves navigation for parents. Fantastic work!",
    },
    {
      id: 9,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "It’s rare to find a team that combines technical skill with empathy. They helped us deliver a powerful, meaningful message through design.",
    },
    {
      id: 10,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "Their design brought clarity to our message and gave us a polished, professional online presence.",
    },

    {
      id: 11,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "Scalable, secure, and beautifully designed our global users now have an experience worth remembering.",
    },

    {
      id: 12,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "The structure now guides users perfectly. We’ve seen a significant increase in form submissions since launch.",
    },

    {
      id: 13,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "They brought our AI-driven vision to life with clarity and style. The UX is top-tier.",
    },

    {
      id: 14,
      company: "/sliders/fulllogos/posterizedfull.svg",
      logo: "/sliders/toprightlogos/posterizedhalf.svg",
      text: "We offer complex services now explained with ease. The redesign helped us earn more trust and more leads.",
    },


  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed (pixels per frame)
    const cardWidth = 320; // Width of each card plus gap
    const totalWidth = testimonials.length * cardWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [testimonials.length]);

  return (
    <div className="bg-[#111111] text-white py-8 sm:py-16 px-8 rounded-3xl mx-w-[500px] sm:max-w-[1300px] mx-4 sm:mx-auto mb-10 relative z-20 mt-10 sm:mt-[110px]">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content - 50% */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-500 text-sm font-medium">
              Testimonials
            </span>
          </div>

          <div>
            <h2 className="hidden sm:block text-4xl lg:text-5xl font-bold mb-6">
              What Our
              <br />
              Clients Say About
              <br />
              The Brain Burners
            </h2>

             <h2 className="block sm:hidden text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say About The Brain Burners
            </h2>

            <p className="text-gray-300 text-[14px] sm:text-lg leading-relaxed">
              Brands trust us to deliver digital solutions that actually move
              the needle. From smarter systems to scalable growth, everything we
              build is designed to perform and built to last.
            </p>
          </div>
        </div>

        {/* Right Slider - 50% */}
        <div className="w-full lg:w-1/2 relative">
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-6">
              {duplicatedTestimonials.map((testimonial, index) => ( 
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-80 h-[400px] flex-shrink-0"
                >
                  <div
                    className="relative bg-white  text-[#333333] rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col justify-between bg-[length:150px_150px] bg-no-repeat bg-center h-full"
                    style={{ backgroundImage: "url('sliders/box-bg.png')" }}
                  >
                    
                    {/* Top Section with Images */}
                    <div className="flex justify-between items-start mb-35 ">
                      {/* Top Left - Company Logo */}
                      <div className="absolute -top-5 left-3 w-[130px] h-24">
                        <img
                          src={testimonial.company}
                          alt="company logo"
                          className="w-[130px] h-36 object-contain"
                        />
                      </div>

                      {/* Top Right - Unique Icon */}
                      <div className="absolute top-0 right-0 w-24 h-24">
                        <img
                          src={testimonial.logo}
                          alt="icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed flex-grow text-base py-12">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
