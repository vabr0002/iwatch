import { IoLogoApple } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { FaBasketShopping } from "react-icons/fa6";

import NavButton from "./Navbutton";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between rounded-lg py-4 max-w-7xl mx-auto">
      <div>
        <IoLogoApple size={50} color="white" className="cursor-pointer" />
      </div>

      <div className=" text-white">
        <ul className="flex space-x-6 gap-x-12">
          <NavButton text="Mac" link="#" />
          <NavButton text="iPhone" link="#" />
          <NavButton text="iPad" link="#" />
          <NavButton text="iWatch" link="#" />
          <NavButton text="Support" link="#" />
        </ul>
      </div>

      <div className="flex space-x-4">
        <div>
          <TfiSearch size={25} color="white" className="cursor-pointer" />
        </div>
        <div className="w-px h-6 bg-white"></div>
        <a href="#">
          <FaBasketShopping
            size={25}
            color="white"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
