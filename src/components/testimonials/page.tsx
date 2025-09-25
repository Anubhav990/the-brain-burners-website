import React, { useEffect, useRef } from "react";

const TestimonialsSlider = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      company: "/post.png", // company logo image
      logo: "/postlogo.png",
      text: "We needed something bold and scroll-stopping. The Brain Burners delivered a site that truly reflects our creative energy. Sales spiked, engagement soared couldn't ask for more.",
    },
    {
      id: 2,
      company: "/finn.png",
      logo: "finn",
      text: "A clean, friendly site with personality. They captured our brand voice beautifully.",
    },
    {
      id: 3,
      company: "/techcorp.png",
      logo: "T",
      text: "Outstanding work from start to finish. The Brain Burners team understood our vision perfectly and delivered beyond expectations.",
    },
    {
      id: 4,
      company: "/digitalco.png",
      logo: "D",
      text: "Professional, creative, and results-driven. Our new website has transformed how customers interact with our brand.",
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
    <div className="bg-[#111111] text-white py-16 px-8 rounded-3xl max-w-[1300px] mx-auto mb-20 relative z-20">
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our
              <br />
              Clients Say About
              <br />
              The Brain Burners
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Brands trust us to deliver digital solutions that actually move
              the needle. From smarter systems to scalable growth, everything we
              build is designed to perform and built to last.
            </p>
          </div>
        </div>

        {/* Right Slider - 50% */}
        <div className="w-full lg:w-1/2 relative mt-10">
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-80 flex-shrink-0"
                >
                  <div
                    className="bg-white  text-gray-900 rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col bg-[length:150px_150px] bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('/box-bg.png')" }}
                  >
                    
                    {/* Top Section with Images */}
                    <div className="flex justify-between items-start mb-6">
                      {/* Top Left - Company Logo */}
                      <div className="flex items-center">
                        <img
                          src={testimonial.company}
                          alt="company logo"
                          className="w-24 h-24 object-contain"
                        />
                      </div>

                      {/* Top Right - Unique Icon */}
                      <div className="w-24 h-24">
                        <img
                          src={testimonial.logo}
                          alt="icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed flex-grow text-base">
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
