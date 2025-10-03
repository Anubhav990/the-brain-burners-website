import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: ["UI/UX", "Designing"],
    description:
      "We craft intuitive & visually engaging interfaces that put user experience at the center. Our design process focuses on understanding user behavior, creating seamless & aesthetically pleasing layouts that align with your brand identity.",
    staticIcon: "/testing.jpg",
    animatedIcon: "/testing.gif",
  },
  {
    id: 2,
    title: ["Application", "Development"],
    description:
      "We design and develop high-performance applications that bring your ideas to life and empower your business. From mobile apps to enterprise-grade solutions, our applications are built with scalability, security, and usability in mind.",
    staticIcon: "/svgs/appdevelopment.svg",
    animatedIcon: "/gifs/appdevelopment.gif",
  },
  {
    id: 3,
    title: ["Web", "Development"],
    description:
      "We build powerful, scalable, and user-friendly websites tailored to your business needs. From sleek corporate sites to complex web platforms, our development process ensures speed, security & performance across all devices.",
    staticIcon: "/svgs/webdevlaptop.svg",
    animatedIcon: "/gifs/webdevlaptop.gif",
  },
  {
    id: 4,
    title: ["Performance", "Marketing"],
    description:
      "We create data-driven marketing strategies that focus on measurable results. From paid campaigns and search engine marketing to social media ads and conversion optimization, our approach is designed to maximize ROI.",
    staticIcon: "/svgs/performancemarketing.svg",
    animatedIcon: "/gifs/webdevlaptop.gif",
  },
  {
    id: 5,
    title: "SEO",
    description:
      "We optimize your digital presence with smart SEO strategies that boost visibility, improve rankings, and bring organic traffic to your website ensuring your brand is found by the right audience at the right time.",
    staticIcon: "/svgs/seo.svg",
    animatedIcon: "/gifs/seoanimated.gif",
  },
  {
    id: 6,
    title: ["Social Media", "Management"],
    description:
      "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
    staticIcon: "/svgs/socialmediamanagement.svg",
    animatedIcon: "/gifs/sattelite.gif",
  },
  {
    id: 7,
    title: "Branding",
    description:
      "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
    staticIcon: "/svgs/branding.svg",
    animatedIcon: "/gifs/brandinganimated.gif",
  },
  {
    id: 8,
    title: "Artificial Intelligence Modernization",
    description:
      "We ensure your digital products remain reliable, secure, and high-performing through continuous quality analysis and maintenance. Our team conducts rigorous testing to identify and resolve issues, optimize performance.",
    staticIcon: "/svgs/aimodernization.svg",
    animatedIcon: "/gifs/aianimated.gif",
  },
];

export default function MobileSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center p-6 sm:hidden">
      <div className="w-full max-w-sm relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide >= services.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden h-[460px]">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0 h-full">
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-5">
                    <img
                      src={service.staticIcon}
                      alt="icon"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {Array.isArray(service.title)
                      ? service.title.map((t, i) => (
                          <React.Fragment key={i}>
                            {t}
                            <br />
                          </React.Fragment>
                        ))
                      : service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 px-5 rounded-full flex items-center gap-2 w-fit transition-colors">
                    Know More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-orange-500 w-6"
                  : "bg-gray-300 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
