import { FiMessageCircle } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { PiCat } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { interClass } from "@/fonts/inter";

export default function NavComponent() {
  return (
    <nav className={`${interClass} mt-8 flex-grow`}>
      <h3 className="text-sm font-bold text-[#ada7ab]">Today</h3>
      <ul className="mt-4 p-4 space-y-2">
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <FiMessageCircle className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Helpful AI Read
        </li>
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <FaRegLightbulb className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Greenhouse Effect Expla...
        </li>
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <TbMovie className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Movie Streaming Help
        </li>
      </ul>
      <h3 className="mt-8 text-sm font-bold text-[#ada7ab]">Previous 7 days</h3>
      <ul className="mt-4 p-4 space-y-2">
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <FiMessageCircle className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Web Design Workflow
        </li>
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <MdOutlinePhotoSizeSelectActual className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Photo generation
        </li>
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <PiCat className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Cats eat grass
        </li>
        <li className="text-[#7e808d] hover:text-black flex items-center gap-2 cursor-pointer transition-all duration-300 group transform hover:scale-105">
          <IoEarthOutline className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-text_primary" />
          Weather Dynamics
        </li>
      </ul>
    </nav>
  );
}
