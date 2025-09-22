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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <nav
        className={`w-full fixed top-0 left-0 px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm dark:shadow-white/10"
            : "bg-transparent"
        } transition-all duration-500 ease-in-out`}
      >
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <Image
            src={assets.logo}
            className="w-12 sm:w-14 md:w-16 cursor-pointer"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-6 lg:px-8 py-2 ${
            isScroll 
              ? "" 
              : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm dark:shadow-white/10"
          } transition-all duration-500 ease-in-out`}
        >
          <li>
            <a 
              className={`${ovo.className} text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 dark:text-white`} 
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className={`${ovo.className} text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 dark:text-white`} 
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a 
              className={`${ovo.className} text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 dark:text-white`} 
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              className={`${ovo.className} text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 dark:text-white`} 
              href="#work"
            >
              Projects
            </a>
          </li>
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={handleToggle}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme toggle"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className={`${ovo.className} relative overflow-hidden hidden lg:flex items-center gap-2 xl:gap-3 px-6 xl:px-8 py-2 xl:py-2.5 border border-gray-300 dark:border-gray-600 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm group hover:shadow-md transition-all duration-200`}
          >
            {/* Hover gradient background */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 dark:from-purple-900/50 dark:via-pink-800/50 dark:to-red-900/50 scale-x-0 origin-center transition-all duration-200 group-hover:scale-x-100"></span>

            {/* Text & Icon */}
            <span className="relative z-10 flex items-center gap-2 xl:gap-3 text-gray-700 dark:text-gray-200 text-sm xl:text-base">
              Contact Me
              <Image src={assets.arrow_icon} className="w-2.5 xl:w-3" alt="" />
            </span>
          </a>

          {/* Mobile menu button */}
          <button 
            className="flex md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200" 
            onClick={openMenu}
            aria-label="Open mobile menu"
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-5 h-5 sm:w-6 sm:h-6 dark:invert"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: sideMenuRef.current?.style.transform === "translateX(-16rem)" ? 1 : 0,
            pointerEvents: sideMenuRef.current?.style.transform === "translateX(-16rem)" ? "auto" : "none"
          }}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="flex md:hidden flex-col fixed right-0 top-0 bottom-0 w-64 sm:w-72 h-screen bg-white dark:bg-gray-900 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-out"
        >
          {/* Close button */}
          <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
            <button 
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <Image
                src={assets.close_black}
                alt="Close"
                className="w-5 h-5 dark:invert"
              />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-1 p-4">
            <a 
              className={`${ovo.className} p-4 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 dark:text-white`} 
              href="#top" 
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              className={`${ovo.className} p-4 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 dark:text-white`} 
              href="#about" 
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className={`${ovo.className} p-4 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 dark:text-white`}
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
            <a 
              className={`${ovo.className} p-4 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 dark:text-white`} 
              href="#work" 
              onClick={closeMenu}
            >
              Projects
            </a>
          </div>

          {/* Mobile Contact Button */}
          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#contact"
              onClick={closeMenu}
              className={`${ovo.className} flex items-center justify-center gap-3 w-full px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 dark:from-purple-900/50 dark:via-pink-800/50 dark:to-red-900/50 text-gray-700 dark:text-gray-200 font-medium transition-all duration-200 hover:shadow-md`}
            >
              Contact Me
              <Image src={assets.arrow_icon} className="w-3" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;