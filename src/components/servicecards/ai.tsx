"use client";

import React from "react";
import Image from "next/image";

export default function AIServiceCards() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 mt-0 sm:mt-10">
            {/* DESKTOP / TABLET VIEW */}
            <div className="hidden md:flex flex-col gap-1">
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
                                AI Strategy & Consulting
                            </h3>
                            <p className="text-black leading-relaxed">
                                Defining the right AI roadmap tailored to your industry and business needs.
                            </p>
                        </div>
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/ai/aistrategy.svg"
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
                                src="/services/ai/processautomation.svg"
                                alt="Wireframes"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3 text-right">
                                Process Automation
                            </h3>
                            <p className="text-black leading-relaxed text-right">
                                Streamlining repetitive tasks with AI to save time and increase efficiency.
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
                                Data-Driven Insights
                            </h3>
                            <p className="text-black leading-relaxed">
                                Turning raw data into actionable intelligence for smarter decision-making.
                            </p>
                        </div>
                        <div className="w-180 mt-6 flex justify-center md:justify-end">
                            <Image
                                src="/services/ai/datadriven.svg"
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
                                src="/services/ai/scalableai.svg"
                                alt="Design Systems & Consistency"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl text-black font-semibold mb-3 text-right text-nowrap">
                                Scalable AI Integration
                            </h3>
                            <p className="text-black leading-relaxed text-right">
                                Building flexible solutions that grow with your business and adapt to future demands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="flex flex-col gap-4 sm:hidden">
                {/* CARD 1 */}
                <div className="rounded-2xl p-6 bg-[#FFD39D] flex flex-col items-start text-left">
                    <h3 className="text-xl text-black font-semibold mb-2">AI Strategy & Consulting</h3>
                    <p className="text-black mb-0 sm:mb-4">
                        Defining the right AI roadmap tailored to your industry and business needs.
                    </p>
                    <Image
                        src="/services/ai/aistrategy.svgg"
                        alt="User-Centered"
                        width={180}
                        height={180}
                        className="ml-auto"
                    />
                </div>

                {/* CARD 2 */}
                <div className="rounded-2xl p-6 bg-[#FFEAD2] flex flex-col items-start text-right">
                    <h3 className="text-xl font-semibold mb-2 text-right text-black ml-auto">Process Automation</h3>
                    <p className="text-black mb-0 sm:mb-4">
                        Streamlining repetitive tasks with AI to save time and increase efficiency.
                    </p>
                    <Image
                        src="/services/ai/processautomation.svg"
                        alt="Wireframes"
                        width={180}
                        height={180}
                        className="mr-auto"
                    />
                </div>

                {/* CARD 3 */}
                <div className="rounded-2xl p-6 bg-[#FFF3E4] flex flex-col items-start text-left">
                    <h3 className="text-xl font-semibold mb-2 text-black">Data-Driven Insights</h3>
                    <p className="text-black mb-0 sm:mb-4">
                        Turning raw data into actionable intelligence for smarter decision-making.
                    </p>
                    <Image
                        src="/services/ai/datadriven.svg"
                        alt="Interactive Prototypes"
                        width={180}
                        height={180}
                        className="ml-auto"
                    />
                </div>

                {/* CARD 4 */}
                <div className="rounded-2xl p-6 bg-[#FFB862] flex flex-col items-start text-right">
                    <h3 className="text-xl text-black font-semibold mb-2 ml-auto">
                        Scalable AI IntegrationF
                    </h3>
                    <p className="text-black mb-0 sm:mb-4">
                        Building flexible solutions that grow with your business and adapt to future demands.
                    </p>
                    <Image
                        src="/services/ai/scalableai.svg"
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
