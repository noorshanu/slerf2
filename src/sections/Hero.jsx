import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-10 sm:pt-[8rem]  pb-[1rem]">
      <div className="container-wrapper flex justify-center flex-col ">
        <div className=" flex justify-center mx-auto mt-[4rem]  gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <img
              src="images/hero.png"
              alt=""
              className="w-auto h-64    lg:h-[400px]  mx-auto "
            />
          </div>

          <div className=" max-w-2xl">
            <h1 className=" font-kid text-white text-[40px] sm:text-[70px] font-bold  mt-[5rem] sm:mt-[3rem] uppercase">
            SLERF 2
            </h1>
            <p className=" max-w-5xl text-lg  text-white">
              In the bustling jungle of Solana's meme world, SLERF 2 stands tall
              as the epitome of elegance and cleverness. This charismatic monkey
              isn't your run-of-the-mill meme coin. With a temperament that
              favors long-term gains and holders, SLERF 2 is poised to lead the
              charge in the Solana meme ecosystem.
            </p>
          </div>
        </div>

        <div className=" flex justify-center gap-5 items-center">
          <a
            href="https://twitter.com/slerf_2"
            className=" text-xl text-black bg-[#f15405] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/slerf20s"
            target="_blank"
            className=" text-xl text-black hover:scale-125 bg-[#f15405] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/HTqD7gLrCKEPeV2aGP2NcA4RL2ArqTiRpgSgEGAEbAaT?t=1711547626220"
            target="_blank"
            className=" bg-[#f15405] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
