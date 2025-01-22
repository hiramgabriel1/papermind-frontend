import { RiQuestionMark } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { interClass } from "@/fonts/inter";

export default function CardInicioComponent() {
  return (
    <div className={`${interClass} space-y-4 hidden sm:block`}>
      <div className="p-1 cursor-pointer border rounded-md flex items-center gap-2 hover:border-text_primary transition-all duration-300 group transform hover:scale-105">
        <span className="bg-background_tercary p-3 rounded-md transition-colors duration-300 group-hover:bg-text_primary">
          <RiQuestionMark className="text-text_secundary w-6 h-6 transition-colors duration-300 group-hover:text-[#fff]" />
        </span>
        <p className="font-medium text-black text-sm sm:text-base pointer-events-none">
          "Industrial Revolution's impact on geopolitics."
        </p>
      </div>
      <div className="p-1 cursor-pointer border rounded-md flex items-center gap-2 hover:border-text_primary transition-all duration-300 group transform hover:scale-105">
        <span className="bg-background_tercary p-3 rounded-md transition-colors duration-300 group-hover:bg-text_primary">
          <SlPencil className="text-text_secundary w-6 h-6 transition-colors duration-300 group-hover:text-[#fff]" />
        </span>
        <p className="font-medium text-black text-sm sm:text-base pointer-events-none">
          "Create an HD wallpaper cat licking paw images."
        </p>
      </div>

      <div className="p-1 cursor-pointer border rounded-md flex items-center gap-2 hover:border-text_primary transition-all duration-300 group transform hover:scale-105">
        <span className="bg-background_tercary p-3 rounded-md transition-colors duration-300 group-hover:bg-text_primary">
          <IoCodeSlashOutline className="text-text_secundary w-6 h-6 transition-colors duration-300 group-hover:text-[#fff]" />
        </span>
        <p className="font-medium text-black text-sm sm:text-base pointer-events-none">
          "HTTP request in JavaScript?"
        </p>
      </div>

      <div className="p-1 cursor-pointer border rounded-md flex items-center gap-2 hover:border-text_primary transition-all duration-300 group transform hover:scale-105">
        <span className="bg-background_tercary p-3 rounded-md transition-colors duration-300 group-hover:bg-text_primary">
          <CiLocationOn className="text-text_secundary w-6 h-6 transition-colors duration-300 group-hover:text-[#fff]" />
        </span>
        <p className="font-medium text-black pointer-events-none">
          "Tell me about the history of the Eiffel Tower."
        </p>
      </div>

      <div className="p-1 cursor-pointer border rounded-md flex items-center gap-2 hover:border-text_primary transition-all duration-300 group transform hover:scale-105">
        <span className="bg-background_tercary p-3 rounded-md transition-colors duration-300 group-hover:bg-text_primary">
          <FaRegLightbulb className="text-text_secundary w-6 h-6 transition-colors duration-300 group-hover:text-[#fff]" />
        </span>
        <p className="font-medium text-black pointer-events-none">
          "Write a short poem about the beauty of nature."
        </p>
      </div>
    </div>
  );
}
