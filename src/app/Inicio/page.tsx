import { metadata as InicioMetadata } from "./InicioMetafata";
export const metadata = InicioMetadata;
import { RiQuestionMark } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { IoCodeSlashOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import TitleInicioComponent from "@/components/title/titleInicio/page";
import CardInicioComponent from "@/components/cards/cardInicio/page";
import SearchComponente from "@/components/inputs/search/page";

export default function InicioPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between max-w-4xl mx-auto sm:px-8">
        <TitleInicioComponent />

        <CardInicioComponent />

        <div className="sm:hidden text-center opacity-30">
          <img src={logo.src} alt="Logo" className="mx-auto block" />
        </div>

        <div className="sticky bottom-0 left-0 right-0 p-4 bg-white z-10">
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md bg-white mb-2 lg:hidden">
            <div className="p-2 border rounded-md flex items-center gap-2">
              <span className="bg-[#f2f2fd] p-3 rounded-md">
                <RiQuestionMark className="text-[#636ae8] w-6 h-6" />
              </span>
            </div>
            <div className="p-2 border rounded-md flex items-center gap-2">
              <span className="bg-[#f2f2fd] p-3 rounded-md">
                <SlPencil className="text-[#636ae8] w-6 h-6" />
              </span>
            </div>
            <div className="p-2 border rounded-md flex items-center gap-2">
              <span className="bg-[#f2f2fd] p-3 rounded-md">
                <IoCodeSlashOutline className="text-[#636ae8] w-6 h-6" />
              </span>
            </div>
          </div>

          <SearchComponente />

          <p className="mt-2 text-center text-[#9da1aa] text-xs sm:text-sm">
            StormBot may produce inaccurate information about people, places, or
            facts.{" "}
            <a href="#" className="text-[#636ae8] hover:underline">
              Privacy Notice
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
