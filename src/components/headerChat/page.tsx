import { GoPencil } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiShareNetworkThin } from "react-icons/pi";
import { IoTrashOutline } from "react-icons/io5";

export default function HeaderChatComponent() {
  return (
    <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b p-4">
      <div className="text-sm sm:text-2xl font-semibold text-black flex items-center gap-2">
        Weather Dynamics
        <GoPencil size={18} className="text-gray-700 cursor-pointer" />
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-gray-700 font-medium flex items-center gap-1 cursor-pointer border p-2 rounded-md text-xs sm:text-sm">
          <MdOutlineDashboardCustomize size={18} />
          <span className="hidden sm:inline">Plugins</span>{" "}
        </div>
        <div className="flex gap-3 items-center">
          <div className="cursor-pointer text-gray-700">
            <PiShareNetworkThin size={20} />
          </div>
          <div className="cursor-pointer text-gray-700">
            <IoTrashOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
