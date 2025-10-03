"use client";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import CrewTBB from "@/components/tbbcrew/page";
import CEOSection from "@/components/team-page-ceo/page";
import HeroSection from "@/components/team-page-hero/page";
import React from "react";
const Team = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CEOSection />
      <div className="mx-3 lg:mx-20 my-6">
        {/* <div className="flex justify-start items-center gap-2 ">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          <p className="text-left capitalize text-[25px] sm:text-[40px] font-bold text-[#000000]">
            the brain burner’s TEAM
          </p>
        </div> */}
        <CrewTBB />
      </div>
      <Footer />
    </div>
  );
};
export default Team;
