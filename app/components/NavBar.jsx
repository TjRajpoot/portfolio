"use client";
import { assets } from "@/assets/assets.js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Ovo, Outfit } from "next/font/google";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
});

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div className="">
      <nav
        className={`w-full fixed px-2 flex item-center justify-between z-50 lg:px-6 xl:px-[8%] py-2 ${
          isScroll
            ? " bg-white/50 backdrop-blur-lg  shadow-sm  dark:shadow-white/20"
            : ""
        } transition-all duration-500 ease-in-out`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-16 cursor-pointer mr-5"
            alt=""
          />
        </a>
        <ul
          className={`hidden md:flex items-center ml-15 justify-between gap-6 lg:gap-8 rounded-full px-30 py-1  ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          } transition-all duration-500 ease-in-out`}
        >
          <li>
            <a className={`${ovo.className} `} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className={`${ovo.className}`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`${ovo.className}`} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={`${ovo.className}`} href="#work">
              Projects{" "}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Moon/Sun toggle button */}
          <button
            onClick={handleToggle}
            className={
              isDarkMode
                ? `p-2 rounded-full transition-colors duration-300 `
                : `p-2 rounded-full transition-colors duration-300 `
            }
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 h-6 transition-colors duration-3000"
            />
          </button>
          <a
            href="#contact"
            className={`${ovo.className} relative overflow-hidden hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 bg-blue-50 shadow-sm group`}
          >
            {/* Hover gradient background */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 scale-x-0 origin-center transition-all duration-200 group-hover:scale-x-100 group-active:scale-x-100"></span>

            {/* Text & Icon */}
            <span className="relative z-10 flex items-center gap-3 dark:text-gray-600">
              Contact Me
              <Image src={assets.arrow_icon} className="w-3" alt="" />
            </span>
          </a>
          <button className="block md:hidden mr-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 "
        >
          <div className="absolute right-4 top-11" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className={`${ovo.className}`} href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className={`${ovo.className}`} href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a
              className={`${ovo.className}`}
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a className={`${ovo.className}`} href="#work" onClick={closeMenu}>
              Projects{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
