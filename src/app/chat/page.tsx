import { metadata as chatMetadata } from "./chatMetadata";
export const metadata = chatMetadata;
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import SearchComponente from "@/components/inputs/search/page";
import HeaderChatComponent from "@/components/headerChat/page";
import ChatUserComponent from "@/components/chatUser/page";
import ChatIAComponent from "@/components/chatIA/page";
import PromsComponent from "@/components/proms/page";
import GenerateComponent from "@/components/buttons/generate/page";

export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto sm:px-4 md:px-8">
      <HeaderChatComponent />
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <ChatUserComponent />
        <div className="space-y-4">
          <ChatIAComponent />
          <div className="flex justify-start items-center gap-4 pl-12">
            <button
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition duration-150"
              aria-label="Thumbs Up"
            >
              <AiTwotoneLike size={20} />
            </button>
            <button
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition duration-150"
              aria-label="Thumbs Down"
            >
              <AiTwotoneDislike size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white z-10  p-4">
        <PromsComponent />
        <GenerateComponent />
        <SearchComponente />
        <p className="mt-2 text-center text-[#9da1aa] text-xs sm:text-sm hidden sm:block">
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
