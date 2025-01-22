import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../../assets/logo.png";


export default function HeaderComponent() {
  return (
    <div className="flex items-center justify-between lg:justify-start gap-10">
      <div className="flex items-center">
        <img src={logo.src} alt="Logo" className="w-8 h-8" />
        <h2 className="text-xl font-bold text-black ml-2">Papermind</h2>
      </div>
      <button className="ml-5" >
        <BiSearchAlt className="text-[#ada7ab] w-6 h-6" />
      </button>
    </div>
  );
}
