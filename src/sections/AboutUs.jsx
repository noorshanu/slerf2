import React from "react";
// import { FaTelegram } from "react-icons/fa";

function AboutUs() {
  return (
    <section className=" container-wrapper py-8 ">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row">
        <div className="w-full">
          <img src="images/newt.png" alt="" />
        </div>

        <div className=" bg-white border-2  border-[#f15405]  py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3 text-[#f15405]">
            Products
          </h1>

          <p className=" text-lg sm:text-xl py-1 ">
            <strong> 1. Viral Memes:</strong> Brace yourself for a meme storm like
            no other! SLERF 2's memes are as infectious as they are hilarious,
            captivating the entire Solana meme community with their charm.
          </p>

          <p className=" text-lg sm:text-xl py-1 ">
            <strong>2. NFTs:</strong>  Step into a world of digital artistry with SLERF 2's exclusive NFT collection. From rare monkey portraits to meme-inspired masterpieces, our NFTs are the talk of the jungle.
          </p>

          <p className=" text-lg sm:text-xl py-1 ">
            <strong> 3. Trading Bot:</strong>  Gain the upper hand in the crypto markets with SLERF 2's cutting-edge trading bot. Powered by advanced algorithms, it's your ticket to profitable trades and strategic maneuvers.
          </p>

          <p className=" text-lg sm:text-xl py-1 ">
            <strong> 4. Staking Rewards:</strong>  Stake your SLERF 2 tokens and watch your rewards soar to new heights. With generous staking rewards, it's the perfect opportunity to hodl like a true monkey king!

          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
