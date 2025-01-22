"use client";

import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GrMicrophone } from "react-icons/gr";

export default function SearchComponente() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    setIsTyping(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(e.target.value !== "");
  };

  const handleInputFocus = () => {
    setIsTyping(true);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsTyping(false);
    }
  };

  return (
    <div
      className={`relative flex items-center border ${
        isTyping ? "border-color_global" : "border-gray-300"
      } rounded-md px-2 py-2 bg-background_secundary space-x-2 overflow-hidden`}
    >
      <input
        type="text"
        placeholder="Send your message"
        className="flex-1 min-w-0 outline-none bg-transparent text-black text-sm sm:text-base"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <button
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 p-2 rounded-md focus:outline-none"
        aria-label="Microphone"
      >
        <GrMicrophone size={20} />
      </button>

      <button
        className={`flex-shrink-0 ${
          isTyping ? "text-color_global" : "text-gray-400"
        }  p-2 rounded-md focus:outline-none`}
        aria-label="Send"
      >
        <FaPaperPlane size={20} />
      </button>
    </div>
  );
}
