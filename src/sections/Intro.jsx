import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative border-2 border-[#f15405] rounded-2xl  ">
        <img
          src="images/about.png"
          alt=""
          className="  h-[300px] left-4 floating mx-auto "
        />

        <div className="  px-4  py-6  text-center border-[#000000] relative z-50 rounded-2xl  ">
          <h1 className=" text-2xl sm:text-5xl font-bold text-center my-3 text-white">
          Swing with SLERF 2: Leading the Meme Evolution on Solana!
          </h1>

        <p></p>

     
        </div>
      </div>
    </>
  );
};

export default Intro;
