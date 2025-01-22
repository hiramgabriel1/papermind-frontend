"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { interClass } from "@/fonts/inter";

export default function PromsComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePrompts = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${interClass} mb-4`}>
      <div className="flex items-center p-2" onClick={togglePrompts}>
        <div className="flex items-center gap-1 bg-background_primary text-text_primary p-2 rounded-md cursor-pointer">
          <span className="flex items-center gap-2">
            {isOpen ? "Hide Prompts" : "Show Prompts"}
          </span>
          {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="pl-4 mt-2 flex gap-4 overflow-x-auto sm:overflow-visible sm:flex-wrap">
          <div className="flex-shrink-0 bg-[#f3f4f6] text-gray-700 px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-300 cursor-pointer">
            Show me the temperature today
          </div>
          <div className="flex-shrink-0 bg-[#f3f4f6] text-gray-700 px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-300 cursor-pointer">
            Why does it rain
          </div>
          <div className="flex-shrink-0 bg-[#f3f4f6] text-gray-700 px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-300 cursor-pointer">
            Do you feel different because of weather
          </div>
        </div>
      </div>
    </div>
  );
}
