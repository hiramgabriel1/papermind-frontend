import { SlRefresh } from "react-icons/sl";


export default function GenerateComponent() {
  return (
    <div className="pl-12 pb-2 flex justify-center items-center">
      <button className="bg-gray-400 flex items-center gap-2 text-white px-3 py-1 rounded-md text-xs hover:bg-[#585fe6] transition duration-150 md:px-4 md:py-2 md:text-sm">
        <SlRefresh size={16}/>
        Regenerate
      </button>
    </div>
  );
}
