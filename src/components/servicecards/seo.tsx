"use client";

import React from "react";
import Image from "next/image";

export default function SeoServiceCards() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 mt-0 sm:mt-10">
            {/* DESKTOP / TABLET VIEW */}
            <div className="hidden md:flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex justify-center gap-4">
                    {/* Card 1 */}
                    <div
                        className="rounded-2xl py-4 flex justify-between w-[60%] transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "#FFD39D",
                            boxShadow: "0px 0px 0px 0px transparent",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow = "9px 9px 6px 0px #00000040")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent")
                        }
                    >
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3">
                                Keyword Research & Strategy
                            </h3>
                            <p className="text-black leading-relaxed">
                                Identifying the right keywords that bring qualified traffic to your site.
                            </p>
                        </div>
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/seo/keyword.svg"
                                alt="User-Centered"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="rounded-2xl py-4 flex justify-between w-[40%] transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "#FFEAD2",
                            boxShadow: "0px 0px 0px 0px transparent",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow = "9px 9px 6px 0px #00000040")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent")
                        }
                    >
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/seo/onpage.svg"
                                alt="Wireframes"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3 text-right">
                                On-Page Optimization
                            </h3>
                            <p className="text-black leading-relaxed text-right">
                                Enhancing content, structure, and meta tags to improve search engine visibility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-center gap-4 mt-4">
                    {/* Card 3 */}
                    <div
                        className="rounded-2xl py-4 flex justify-between w-[40%] transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "#FFF3E4",
                            boxShadow: "0px 0px 0px 0px transparent",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow = "9px 9px 6px 0px #00000040")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent")
                        }
                    >
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3">
                                Technical SEO
                            </h3>
                            <p className="text-black leading-relaxed">
                                Improving site speed, mobile performance, and crawlability for better rankings.
                            </p>
                        </div>
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/seo/technicalseo.svg"
                                alt="Interactive Prototypes"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="rounded-2xl py-4 flex justify-between w-[60%] transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "#FFB862",
                            boxShadow: "0px 0px 0px 0px transparent",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow = "9px 9px 6px 0px #00000040")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent")
                        }
                    >
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/seo/linkbuilding.svg"
                                alt="Design Systems & Consistency"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3 text-right text-nowrap">
                                Link Building & Authority
                            </h3>
                            <p className="text-black leading-relaxed text-right">
                                Building high-quality backlinks to establish credibility and long-term growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="flex flex-col gap-4 sm:hidden">
                {/* CARD 1 */}
                <div className="rounded-2xl p-6 bg-[#FFD39D] flex flex-col items-start text-left">
                    <h3 className="text-xl text-black font-semibold mb-2">Keyword Research & Strategy</h3>
                    <p className="text-black mb-0 sm:mb-4">
                        Identifying the right keywords that bring qualified traffic to your site.
                    </p>
                    <Image
                        src="/services/seo/keyword.svg"
                        alt="User-Centered"
                        width={180}
                        height={180}
                        className="ml-auto"
                    />
                </div>

                {/* CARD 2 */}
                <div className="rounded-2xl p-6 bg-[#FFEAD2] flex flex-col items-start text-right">
                    <h3 className="text-xl font-semibold mb-2 text-right text-black ml-auto">On-Page Optimization</h3>
                    <p className="text-black mb-0 sm:mb-4">
                       Enhancing content, structure, and meta tags to improve search engine visibility.
                    </p>
                    <Image
                        src="/services/seo/onpage.svg"
                        alt="Wireframes"
                        width={180}
                        height={180}
                        className="mr-auto"
                    />
                </div>

                {/* CARD 3 */}
                <div className="rounded-2xl p-6 bg-[#FFF3E4] flex flex-col items-start text-left">
                    <h3 className="text-xl font-semibold mb-2 text-black">Technical SEO</h3>
                    <p className="text-black mb-0 sm:mb-4">
                      Improving site speed, mobile performance, and crawlability for better rankings.
                    </p>
                    <Image
                        src="/services/seo/technicalseo.svg"
                        alt="Interactive Prototypes"
                        width={180}
                        height={180}
                        className="ml-auto"
                    />
                </div>

                {/* CARD 4 */}
                <div className="rounded-2xl p-6 bg-[#FFB862] flex flex-col items-start text-right">
                    <h3 className="text-xl text-black font-semibold mb-2 ml-auto">
                       Link Building & Authority
                    </h3>
                    <p className="text-black mb-0 sm:mb-4">
                       Building high-quality backlinks to establish credibility and long-term growth.
                    </p>
                    <Image
                        src="/services/seo/linkbuilding.svg"
                        alt="Design Systems & Consistency"
                        width={180}
                        height={180}
                        className="mr-auto"
                    />
                </div>
            </div>
        </section>
    );
}
