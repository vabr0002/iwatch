import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const TextImage = () => {
  return (
    <div className="grid grid-cols-[50%_40%_10%] max-w-7xl mx-auto mt-20 mb-20 h-full">
      <div>
        <div className="text-white grid text-6xl mb-20">
          <h1 className="font-bold ">The Perfect Moment</h1>
          <h1 className="font-thin">Between Past And Future.</h1>
        </div>
        <div className="my-8">
          <button className="text-white border-solid border-2 rounded-full text-lg p-3 inline-block px-14 hover:bg-white hover:text-[#B6CCDA] hover:border-white transition">
            Buy Now
          </button>
        </div>
        <div className="absolute bottom-8 left-5 flex items-center text-white ">
          <FaArrowLeft />
          <p className="px-4">1</p>
          <FaArrowRight />
        </div>
      </div>
      <div>
        <Image src="/navy.png" width={500} height={500} alt="iWatch" />
      </div>
    </div>
  );
};

export default TextImage;
