import { RiQuestionMark } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { GrMicrophone } from "react-icons/gr";

export default function InicioPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between max-w-4xl mx-auto ">
      <div>
        <h1 className="text-5xl font-bold text-black mt-10 text-center">
          Ask everything you want!
        </h1>
      </div>

      <div className="space-y-4">
        <div className="p-1 border  rounded-md flex items-center gap-2">
          <span className="bg-[#f2f2fd] p-3 rounded-md">
            <RiQuestionMark className="text-[#636ae8] w-6 h-6" />
          </span>
          <p className="font-medium text-black">
            "Industrial Revolution's impact on geopolitics."
          </p>
        </div>
        <div className="p-1 border  rounded-md flex items-center gap-2">
          <span className="bg-[#f2f2fd] p-3 rounded-md">
            <SlPencil className="text-[#636ae8] w-6 h-6" />
          </span>
          <p className="font-medium text-black">
            "Create an HD wallpaper cat licking paw images."
          </p>
        </div>
        <div className="p-1 border  rounded-md flex items-center gap-2">
          <span className="bg-[#f2f2fd] p-3 rounded-md">
            <IoCodeSlashOutline className="text-[#636ae8] w-6 h-6" />
          </span>
          <p className="font-medium text-gray-700">
            "HTTP request in JavaScript?"
          </p>
        </div>
        <div className="p-1 border  rounded-md flex items-center gap-2">
          <span className="bg-[#f2f2fd] p-3 rounded-md">
            <CiLocationOn className="text-[#636ae8] w-6 h-6" />
          </span>
          <p className="font-medium text-gray-700">
            "Tell me about the history of the Eiffel Tower."
          </p>
        </div>
        <div className="p-1 border  rounded-md flex items-center gap-2">
          <span className="bg-[#f2f2fd] p-3 rounded-md">
            <FaRegLightbulb className="text-[#636ae8] w-6 h-6" />
          </span>
          <p className="font-medium text-gray-700">
            "Write a short poem about the beauty of nature."
          </p>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white z-10">
        <div className="relative flex items-center flex-1 border border-gray-300 rounded-md px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Send your message"
            className="flex-1 outline-none bg-transparent text-black"
          />

          <button className="text-gray-400 hover:text-gray-600">
            <GrMicrophone size={20} />
          </button>

          <button className="ml-3 text-[#636ae8] hover:text-[#585fe6]">
            <FaPaperPlane size={20} />
          </button>
        </div>

        <p className="mt-2 text-center text-[#9da1aa] text-sm">
          StormBot may produce inaccurate information about people, places, or
          facts.{" "}
          <a href="#" className="text-[#636ae8] hover:underline">
            Privacy Notice
          </a>
        </p>
      </div>
    </div>
  );
}
