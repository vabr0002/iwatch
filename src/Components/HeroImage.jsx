import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CgBorderStyleDotted } from "react-icons/cg";

const HeroImage = () => {
  return (
    <div className="grid grid-cols-[50%_40%_10%] max-w-7xl mx-auto mt-20 mb-20 h-full">
      <div>
        <div className="text-white grid text-6xl mb-20 mt-20">
          <h1 className="font-extrabold">The Perfect Moment</h1>
          <h1 className="font-thin">Between Past And Future.</h1>
        </div>
        <div className="my-8">
          <button className="text-white border-solid border-2 rounded-full text-lg p-3 inline-block px-14 hover:bg-white hover:text-[#B6CCDA] hover:border-white transition mt-12">
            Buy Now
          </button>
        </div>
        <div className="absolute bottom-8 left-5 flex items-center text-white ">
          <FaArrowLeft />
          <p className="px-4">1</p>
          <FaArrowRight />
        </div>
      </div>

      <div className="gap-6">
        <Image
          src="/navy.png"
          width={500}
          height={500}
          alt="iWatch"
          className="object-top"
        />
        <div className="flex gap-6">
          <div className="relative flex justify-center items-start">
            <Image
              src="/navy.png"
              width={250}
              height={250}
              alt="iWatch"
              className="absolute "
            />
            <div className="bg-[#434558] w-48 h-32 rounded-lg mt-20"></div>
          </div>

          <div className="relative flex justify-center items-start">
            <Image
              src="/mint.png"
              width={250}
              height={250}
              alt="iWatch"
              className="absolute "
            />
            <div className="bg-[#6ADDCC] w-48 h-32 rounded-lg mt-20"></div>
          </div>

          <div className="relative flex justify-center items-start">
            <Image
              src="/ocean.png"
              width={250}
              height={250}
              alt="iWatch"
              className="absolute "
            />
            <div className="bg-[#F9CDC4] w-48 h-32 rounded-lg mt-20"></div>
          </div>
        </div>
      </div>
      <div className="content-center mx-auto">
        <div className="bg-[#434558] cursor-pointer border-2 rounded-full w-4 h-4 hover:scale-125"></div>
        <CgBorderStyleDotted className="rotate-90 text-white" />
        <div className="bg-[#6ADDCC] cursor-pointer border-2 rounded-full w-4 h-4 hover:scale-125"></div>
        <CgBorderStyleDotted className="rotate-90 text-white" />
        <div className="bg-[#F9CDC4] cursor-pointer  border-2 rounded-full w-4 h-4 hover:scale-125"></div>
      </div>
    </div>
  );
};

export default HeroImage;
