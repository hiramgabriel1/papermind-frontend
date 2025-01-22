import { GoKebabHorizontal } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import perfil from "../../assets/perfil.png";

export default function UserComponent() {
  return (
    <div className="mt-auto bg-background_secundary p-4 rounded-lg border border-[#f8cedb]">
      <div className="flex justify-between items-center">
        <p className="text-sm text-black flex items-center font-bold">
          <img
            src={perfil.src}
            alt="Perfil"
            className="w-full h-full rounded-full mr-2"
          />
          Emily
        </p>
        <button>
          <GoKebabHorizontal className="h-5 w-5 text-black" />
        </button>
      </div>
      <button className="mt-2 w-full bg-background_primary text-text_primary py-2 rounded-md flex items-center justify-center gap-2">
        Upgrade to Pro
        <IoIosArrowForward size={13} />
      </button>
    </div>
  );
}
