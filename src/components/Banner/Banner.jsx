import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-base-200 pt-[65px]">
      <div className="max-w-7xl mx-auto px-5 flex flex-col-reverse md:flex-row justify-center items-center md:bg-[url(/banner-bg.png)] bg-no-repeat md:bg-[position:calc(100%-70px)_bottom]">
        <div className="md:w-1/2">
          <div className="flex my-10">
            <div className="relative">
              <div className="absolute w-10 h-10 bg-pink-200 rounded-full left-0"></div>
              <div className="absolute w-10 h-10 bg-[#CE4E61] rounded-full left-6"></div>
            </div>

            <div className="leading-tight text-black z-10 ml-12">
              <p>New Spring 2025</p>
              <p>Collections</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold block md:leading-20">
            Fashion That <br />
            Feels As Good As <br />
            It{" "}
            <span
              className="text-[#CE4E61] italic"
              style={{
                display: "inline-block",
                transform: "rotate(-5deg)",
                transformOrigin: "bottom left",
              }}
            >
              Looks
            </span>
          </h1>

          <p className="text-[16px] font-normal py-6 text-[#161616]">
            Streetwear-inspired and flavor-packed, every drop celebrates
            individuality, freedom, and effortless style—where comfort meets
            cultural edge
          </p>
          <button className="flex gap-3 py-3 px-6 text-white bg-[#CE4E61]">
            Get Started <MdOutlineArrowOutward size={25} />
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            className="md:h-[550px] pt-[120px] md:pt-0"
            src="/banner-img.png"
            alt=""
          />

          <div className="absolute top-5 right-0 w-[210px] h-[100px] text-gray-700 flex flex-col items-start">
            <div className="text-[#CE4E61] text-6xl -mb-3">&#10077;</div>
            <p className="mb-2 text-[9px]">
              I love that it's made with gentle ingredients — no irritation at
              all, even on my sensitive skin.
            </p>
            <div className="flex gap-2 justify-center items-center">
              <hr className="w-10 border-gray-400 mb-1" />
              <p className="text-[10px]">Afia Jaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
