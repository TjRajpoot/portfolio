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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const sideMenuRef = useRef();
  const openMenu = () => {
    setIsMenuOpen(true);
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
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
    <div className="w-full">
      <nav
        className={`fixed top-0 left-0 w-full px-2 flex items-center justify-between z-30 lg:px-6 xl:px-[8%] py-2 ${
          isScroll
            ? " bg-white/50 backdrop-blur-lg  shadow-sm  dark:shadow-white/20 dark:bg-gray-900/50"
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
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 ${
            isScroll ? "" : "bg-white/50 shadow-sm dark:bg-gray-800/50"
          } transition-all duration-500 ease-in-out`}
        >
          <li>
            <a className={`${ovo.className} hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className={`${ovo.className} hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`${ovo.className} hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={`${ovo.className} hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} href="#work">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Moon/Sun toggle button */}
          <button
            onClick={handleToggle}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle theme"
              className="w-5 h-5"
            />
          </button>
          <a
            href="#contact"
            className={`${ovo.className} relative overflow-hidden hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full bg-blue-50 dark:bg-gray-800 dark:text-white shadow-sm group hover:shadow-md transition-all duration-200`}
          >
            {/* Hover gradient background */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 dark:from-purple-900/80 dark:via-pink-800/80 dark:to-red-900/80 scale-x-0 origin-center transition-all duration-200 group-hover:scale-x-100"></span>

            {/* Text & Icon */}
            <span className="relative z-10 flex items-center gap-3">
              Contact Me
              <Image src={assets.arrow_icon} className="w-3" alt="" />
            </span>
          </a>
          <button className="block md:hidden mr-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-6 cursor-pointer dark:invert"
            />
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />
        
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition-transform duration-500 ease-in-out shadow-2xl ${
            isMenuOpen ? "translate-x-[-16rem]" : "translate-x-0"
          }`}
        >
          <div className="absolute right-4 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer dark:invert hover:scale-110 transition-transform"
            />
          </div>
          <li>
            <a 
              className={`${ovo.className} text-lg hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} 
              href="#top" 
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className={`${ovo.className} text-lg hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} 
              href="#about" 
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${ovo.className} text-lg hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`}
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              className={`${ovo.className} text-lg hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400`} 
              href="#work" 
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;