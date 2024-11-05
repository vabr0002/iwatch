"use client"; // Sørg for at køre på client-side i Next.js

import { useState } from "react"; // Importerer useState hook fra React
import Image from "next/image"; // Importerer Next.js Image komponent til billeder
import { FaArrowLeft } from "react-icons/fa6"; // Importerer venstre pil ikon
import { FaArrowRight } from "react-icons/fa6"; // Importerer højre pil ikon
import ImageBg from "./ImageBg"; // Importerer ImageBg komponent
import ColorDots from "./ColorDots"; // Importerer ColorDots komponent

import SortImg from "../../public/navy.png";
import TealImg from "../../public/mint.png";
import PinkImg from "../../public/ocean.png";

const HeroImage = (props) => {
  const [imgSrc, setImgSrc] = useState(SortImg); // Initialiserer state til at holde billedkilden

  const handleImageChange = (newImage) => {
    setImgSrc(newImage); // Funktion til at opdatere imgSrc med det nye billede
  };

  return (
    <div className="grid grid-cols-[50%_48%_2%] max-w-7xl mx-auto mt-20 mb-20 h-full relative">
      <div>
        <div className="text-white grid text-6xl mb-20 mt-20">
          <h1 className="font-black">The Perfect Moment</h1>{" "}
          <h1 className="font-100">Between Past And Future.</h1>{" "}
        </div>
        <div className="my-8">
          <button className="text-white border-solid border-2 rounded-full text-lg p-3 inline-block px-14 hover:bg-white hover:text-[#B6CCDA] hover:border-white transition mt-12">
            Buy Now
          </button>
        </div>
        <div className="absolute left-4 bottom-4 flex items-center text-white">
          <FaArrowLeft className="text-2xl hover:scale-125 transition-transform duration-300" />{" "}
          {/* Venstre pil */}
          <p className="px-4 font-bold">1</p>
          <FaArrowRight className="text-2xl hover:scale-125 transition-transform duration-300" />{" "}
          {/* Højre pil */}
        </div>
      </div>

      <div className="grid gap-6 justify-center">
        <div className="flex items-center justify-center">
          <Image src={imgSrc} alt="Apple watch" width={500} height={500} />{" "}
          {/* Viser det valgte billede */}
          <ColorDots
            handleImageChange={handleImageChange}
            SortImg={SortImg}
            TealImg={TealImg}
            PinkImg={PinkImg}
          />
        </div>

        <div className="flex justify-between w-full ">
          <ImageBg
            bgColor="bg-[#434558]" // Farve baggrund for første billede
            imageSkift={SortImg} // Billedkilde
            onClick={() => handleImageChange(SortImg)} // Håndterer klik
          />
          <ImageBg
            bgColor="bg-[#6ADDCC]" // Farve baggrund for andet billede
            imageSkift={TealImg} // Billedkilde
            onClick={() => handleImageChange(TealImg)} // Håndterer klik
          />
          <ImageBg
            bgColor="bg-[#F0EFF4]" // Farve baggrund for tredje billede
            imageSkift={PinkImg} // Billedkilde
            onClick={() => handleImageChange(PinkImg)} // Håndterer klik
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage; // Eksporterer komponenten
