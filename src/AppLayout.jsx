import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import React, { useState, useRef } from "react";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";

import Footer from "./sections/Footer";
// import Music from "./nubshiba.mp3";
import Mission from "./sections/Mission";
import AboutUs from "./sections/AboutUs";



function AppLayout() {


  return (
    <>

      <main className=" bg-[#091b37] pb-4 ">
        <Navbar />

        <Hero />
      
        <a
          href="https://solscan.io/token/BmzBAypchC8ajeMJWa7u4J2TfbCG73i6TguPmVkL7Ksg"
          target="_blank"
          className="bg-[#f15405]  text-black font-bold py-2 px-2 sm:px-16 border-2  sm:text-2xl text-xs rounded-full   flex justify-center w-[360px] sm:w-[680px] mx-auto"
        >
          BmzBAypchC8ajeMJWa7u4J2TfbCG73i6TguPmVkL7Ksg
        </a>
      </main>

      {/* <MemeMark /> */}

      <div>
        <div className="bg-white">
          <AboutUs/>
        </div>
        <dl className="h-[50px]" />
        <div className="bg-[#091b37] py-6">
        <Intro />
        </div>
       
        <dl className="h-[50px]" />

      
     
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
