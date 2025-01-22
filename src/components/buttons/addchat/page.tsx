import { FaPlus } from "react-icons/fa";
import { interClass } from "@/fonts/inter";

export default function AddChatComponent() {
  return (
    <button
      className={`${interClass}mt-6 w-full bg-black border-none text-white py-2 rounded-md flex justify-center items-center gap-2 hover:bg-[#e8618c] hover:border-none transition-all duration-300 transform hover:scale-105`}
    >
      <FaPlus className="h-4 w-4" />
      New chat
    </button>
  );
}
