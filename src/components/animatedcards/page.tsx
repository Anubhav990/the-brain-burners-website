import React, { useState } from 'react';

const AnimatedCards = () => {
    const services = [
        {
            id: 1,
            title: ["UI/UX", "Designing"],
            description: "We craft intuitive & visually engaging interfaces that put user experience at the center. Our design process focuses on understanding user behavior, creating seamless & aesthetically pleasing layouts that align with your brand identity.",
            staticIcon: "/svgs/uiuxdesign.svg",
            animatedIcon: "/gifs/uiux.gif",
            color: "bg-gray-100"
        },
        {
            id: 2,
            title: ["Application", "Development"],
            description: "We design and develop high-performance applications that bring your ideas to life and empower your business. From mobile apps to enterprise-grade solutions, our applications are built with scalability, security, and usability in mind.",
            staticIcon: "/svgs/appdevelopment.svg",
            animatedIcon: "/gifs/appdevelopment.gif",
            color: "bg-gray-100"
        },
        {
            id: 3,
            title: ["Web", "Development"],
            description: "We build powerful, scalable, and user-friendly websites tailored to your business needs. From sleek corporate sites to complex web platforms, our development process ensures speed, security & performance across all devices.",
            staticIcon: "/svgs/webdevlaptop.svg",
            animatedIcon: "/gifs/webdevlaptop.gif",
            color: "bg-gray-100"
        },
        {
            id: 4,
            title: ["Performance", "Marketing"],
            description: "We create data-driven marketing strategies that focus on measurable results. From paid campaigns and search engine marketing to social media ads and conversion optimization, our approach is designed to maximize ROI.",
            staticIcon: "/svgs/performancemarketing.svg",
            animatedIcon: "/gifs/webdevlaptop.gif",
            color: "bg-gray-100"
        },
        {
            id: 5,
            title: "SEO",
            description: "We optimize your digital presence with smart SEO strategies that boost visibility, improve rankings, and bring organic traffic to your website  ensuring your brand is found by the right audience at the right time.",
            staticIcon: "/svgs/seo.svg",
            animatedIcon: "/gifs/seoanimated.gif",
            color: "bg-gray-100"
        },
        {
            id: 6,
            title: ["Social Media", "Management"],
            description: "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
            staticIcon: "/svgs/socialmediamanagement.svg",
            animatedIcon: "/gifs/sattelite.gif",
            color: "bg-gray-100"
        },
        {
            id: 7,
            title: "Branding",
            description: "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
            staticIcon: "/svgs/branding.svg",
            animatedIcon: "/gifs/brandinganimated.gif",
            color: "bg-gray-100"
        },
        {
            id: 8,
            title: "Artificial Intelligence Modernization",
            description: "We ensure your digital products remain reliable, secure, and high-performing through continuous quality analysis and maintenance. Our team conducts rigorous testing to identify and resolve issues, optimize performance.",
            staticIcon: "/svgs/aimodernization.svg",
            animatedIcon: "/gifs/aianimated.gif",
            color: "bg-gray-100"
        }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="w-full mt-[40px] relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`${service.color} rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group hover:shadow-xl h-[500px]`} style={{ backgroundColor: hoveredCard === service.id ? "#ee8001" : "#f3f4f6" }}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Icon Section */}
                        <div className="relative mb-4">

                            <img src={service.staticIcon}
                                alt={`${service.title} static`}
                                className={`w-[55px] h-[55px] object-contain transition-all duration-300 ${hoveredCard === service.id ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                            />

                            {/* <div className={`text-4xl absolute top-0 left-0 transition-all duration-300 ${hoveredCard === service.id ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-0'}`}>
                                {service.animatedIcon}
                            </div> */}
                            {/* GIF on Hover */}
                            <img
                                src={service.animatedIcon}
                                alt={`${service.title} animation`}
                                className={`w-[50px] object-contain absolute top-0 left-0 transition-all duration-300 ${hoveredCard === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3
                                className={`text-[22px] mt-2 font-bold text-gray-900 mb-3 ${hoveredCard === service.id ? "text-white" : "text-black"
                                    }`}
                            >
                                {Array.isArray(service.title)
                                    ? service.title.map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            <br />
                                        </React.Fragment>
                                    ))
                                    : service.title}
                            </h3>
                            <p className={`text-gray-700 text-[17px] leading-relaxed ${hoveredCard === service.id ? 'text-white' : 'text-black'}`}>
                                {service.description}
                            </p>
                        </div>

                        {/* Button */}
                        <div className="mt-6 relative">
                            <button
                                className={`
                  bg-orange-500 text-white font-semibold rounded-full flex items-center justify-center
                  transition-all duration-500 ease-out relative shadow-[0px_3px_0_#000000] overflow-hidden
                  ${hoveredCard === service.id ? 'w-[90%] py-3 px-6 shadow-[2px_3px_0_#000000]' : 'w-12 h-12'}
                `}
                            >
                                <span
                                    className={`
                    transition-all duration-300 text-[20px] whitespace-nowrap
                    ${hoveredCard === service.id ? 'opacity-100 mr-2' : 'opacity-0 absolute'}
                  `}
                                >
                                    Know More
                                </span>
                                <svg
                                    className={`w-[23px] h-[23px] transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCards;

// import React, { useState } from 'react';

// const AnimatedCards = () => {
//     const services = [
//         {
//             id: 1,
//             title: "UI/UX Designing",
//             description: "We craft intuitive & visually engaging interfaces that put user experience at the center. Our design process focuses on understanding user behavior, creating seamless & aesthetically pleasing layouts that align with your brand identity.",
//             staticIcon: "🎨",
//             animatedIcon: "✨",
//             color: "bg-gray-100"
//         },
//         {
//             id: 2,
//             title: "Application Development",
//             description: "We design and develop high-performance applications that bring your ideas to life and empower your business. From mobile apps to enterprise-grade solutions, our applications are built with scalability, security, and usability in mind.",
//             staticIcon: "📱",
//             animatedIcon: "🚀",
//             color: "bg-gray-100"
//         },
//         {
//             id: 3,
//             title: "Web Development",
//             description: "We build powerful, scalable, and user-friendly websites tailored to your business needs. From sleek corporate sites to complex web platforms, our development process ensures speed, security & performance across all devices.",
//             staticIcon: "💻",
//             animatedIcon: "⚡",
//             color: "bg-gray-100"
//         },
//         {
//             id: 4,
//             title: "Performance Marketing",
//             description: "We create data-driven marketing strategies that focus on measurable results. From paid campaigns and search engine marketing to social media ads and conversion optimization, our approach is designed to maximize ROI.",
//             staticIcon: "⭐",
//             animatedIcon: "🎯",
//             color: "bg-gray-100"
//         }
//     ];

//     const [hoveredCard, setHoveredCard] = useState(null);

//     return (
//         <div className="w-full mt-[40px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {services.map((service) => (
//                     <div
//                         key={service.id}
//                         className={`${service.color} rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group hover:shadow-xl `} style={{ backgroundColor: hoveredCard === service.id ? "#F38400" : "#f3f4f6" }}
//                         onMouseEnter={() => setHoveredCard(service.id)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                     >
//                         {/* Icon Section */}
//                         <div className="relative mb-4">
//                             <div className={`text-4xl transition-all duration-300 ${hoveredCard === service.id ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
//                                 {service.staticIcon}F
//                             </div>
//                             <div className={`text-4xl absolute top-0 left-0 transition-all duration-300 ${hoveredCard === service.id ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-0'}`}>
//                                 {service.animatedIcon}
//                             </div>
//                         </div>

//                         {/* Content */}
//                         <div className="flex-grow">
//                             <h3 className={`text-[22px] font-bold text-gray-900 mb-3 ${hoveredCard === service.id ? 'text-white' : 'text-black'}`}>
//                                 {service.id === 1 ? (
//                                     <>
//                                         UI/UX<br />
//                                         Designing
//                                     </>
//                                 ) : service.id === 2 ? (
//                                     <>
//                                         Application<br />
//                                         Development
//                                     </>
//                                 ) : service.id === 3 ? (
//                                     <>
//                                         Web<br />
//                                         Development
//                                     </>
//                                 ) : (
//                                     <>
//                                         Performance<br />
//                                         Marketing
//                                     </>
//                                 )}
//                             </h3>
//                             <p className={`text-gray-700 text-[17px] leading-relaxed ${hoveredCard === service.id ? 'text-white' : 'text-black'}`}>
//                                 {service.description}
//                             </p>
//                         </div>

//                         {/* Button */}
//                         <div className="mt-6 relative">
//                             <button
//                                 className={`
//                   bg-orange-500 text-white font-semibold rounded-full flex items-center justify-center
//                   transition-all duration-500 ease-out relative overflow-hidden
//                   ${hoveredCard === service.id ? 'w-[90%] py-3 px-6' : 'w-12 h-12'}
//                 `}
//                             >
//                                 <span
//                                     className={`
//                     transition-all duration-300 whitespace-nowrap
//                     ${hoveredCard === service.id ? 'opacity-100 mr-2' : 'opacity-0 absolute'}
//                   `}
//                                 >
//                                     Know More
//                                 </span>
//                                 <svg
//                                     className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`}
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default AnimatedCards;