import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.png";
import { FaPlus } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { PiCat } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { GoKebabHorizontal } from "react-icons/go";
import Image from "next/image";

export const metadata = {
	title: "Papermind - Inicio",
	description: "Ask everything you want!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="h-screen flex overflow-hidden">
			<aside className=" bg-[#fdf1f5] p-6 flex flex-col">
				<div className="flex items-center gap-10">
					<div className="flex items-center">
						<Image src={logo.src} alt="Logo" width={50} height={50} />
						<h2 className="text-xl font-bold text-black">Papermind</h2>
					</div>
					<div className="flex items-center ">
						<BiSearchAlt className="text-[#ada7ab] w-6 h-6 " />
					</div>
				</div>
				<button className="mt-6 w-full bg-black text-white py-2 rounded-md flex justify-center items-center gap-2">
					<FaPlus className="h-4 w-4" />
				</button>
				<nav className="mt-8 flex-grow">
					<h3 className="text-sm font-bold text-[#ada7ab]">Today</h3>
					<ul className="mt-4 p-4 space-y-2">
						<li className="text-[#7e808d] flex items-center gap-2">
							<FiMessageCircle className="h-5 w-5 text-black" />
							Helpful AI Read
						</li>
						<li className="text-[#7e808d] flex items-center gap-2">
							<FaRegLightbulb className="h-5 w-5 text-black" />
							Greenhouse Effect Expla...
						</li>
						<li className="text-[#7e808d] flex items-center gap-2">
							<TbMovie className="h-5 w-5 text-black" />
							Movie Streaming Help
						</li>
					</ul>
					<h3 className="mt-8 text-sm font-bold text-[#ada7ab]">
						Previous 7 days
					</h3>
					<ul className="mt-4 p-4 space-y-2">
						<li className="text-[#7e808d] flex items-center gap-2">
							<FiMessageCircle className="h-5 w-5 text-black" />
							Web Design Workflow
						</li>
						<li className="text-[#7e808d] flex items-center gap-2">
							<MdOutlinePhotoSizeSelectActual className="h-5 w-5 text-black" />
							Photo generation
						</li>
						<li className="text-[#7e808d] flex items-center gap-2">
							<PiCat className="h-5 w-5 text-black" />
							Cats eat grass
						</li>
						<li className="text-[#7e808d] flex items-center gap-2">
							<IoEarthOutline className="h-5 w-5 text-black" />
							Weather Dynamics
						</li>
					</ul>
				</nav>
				<div className="mt-auto bg-white p-4 rounded-lg border border-[#f8cedb]">
					<div className="flex justify-between items-center">
						<p className="text-sm text-black flex items-center font-bold">
							<Image src={perfil} alt="Perfil" width={50} height={50} />
							Emily
						</p>
						<button>
							<GoKebabHorizontal className="h-5 w-5 text-black" />
						</button>
					</div>
					<button className="mt-2 w-full bg-[#fdf1f5] text-[#e8618c] py-2 rounded-md">
						Upgrade to Pro
					</button>
				</div>
			</aside>

			<main className="flex-1 p-8 bg-white overflow-auto">{children}</main>
		</main>
	);
}
