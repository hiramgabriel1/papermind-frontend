"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import UserComponent from "@/components/user/page";
import NavComponent from "@/components/nav/page";
import AddChatComponent from "@/components/buttons/addchat/page";
import HeaderComponent from "@/components/buttons/header/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="h-screen flex overflow-hidden relative">
      <div className="lg:hidden p-4 bg-white z-20">
        <button onClick={toggleSidebar} className="text-black">
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`bg-[#fdf1f5] p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:block fixed lg:static z-20 h-full lg:h-auto w-3/4 sm:w-1/2 lg:w-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <HeaderComponent />

          <div className="flex-grow flex flex-col mt-5 justify-between">
            <AddChatComponent />
            <NavComponent />
          </div>

          <UserComponent />
        </div>
      </aside>

      <main className="flex-1 p-2 pr-8 bg-white overflow-auto">{children}</main>
    </main>
  );
}
