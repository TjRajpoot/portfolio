import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Ovo, Outfit } from "next/font/google";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
});
const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400"
            : "bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300"
        }`}
        style={{
          top: "70%",
          left: "70%",
          animation: "float1 20s ease-in-out infinite",
        }}
      />
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className={
            isDarkMode
              ? "rounded-full w-50 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              : "rounded-full w-50 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          }
        />
      </motion.div>
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl opacity-25 animate-spin ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-400 via-pink-400 to-amber-400"
            : "bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300"
        }`}
        style={{
          top: "20%",
          right: "70%",
          animation: "float2 20s ease-in-out infinite",
        }}
      />
      <motion.h3
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
        className={` flex items-end gap-2 text-xl md:text-3xl mb-3 `}
        style={{
          animation: "float4 20s ease-in-out infinite",
        }}
      >
        Hi, I am Tanuj Singh!
      </motion.h3>
      <h1 className={`${ovo.className} text-xl sm:text-6xl lg:text-[65px]`}>
        <span className={`${ovo.className}`}>
          {/* <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Developer",
                "Flutter Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 65,
            }}
          /> */}
        </span>
      </h1>
      <p className={`${outfit.className} max-w-2xl mx-auto`}>
        Hello I am from bhopal
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className={`${ovo.className} relative overflow-hidden hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 bg-blue-50 shadow-sm group`}
        >
          {/* Hover gradient background */}
          <span className="absolute inset-0 rounded-4xl bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 scale-x-0 origin-center transition-all duration-200 group-hover:scale-x-100 group-active:scale-x-100"></span>

          {/* Text & Icon */}
          <span className="relative z-10 flex items-center gap-3 text-gray-600">
            Contact Me
            <Image src={assets.right_arrow_bold} className="w-3" alt="" />
          </span>
        </a>
        {/* My Resume Button */}
        <a
          href=""
          download
          className="relative overflow-hidden px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 bg-blue-50 shadow-sm group"
        >
          {/* Hover gradient background */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100"></span>

          {/* Text + Icon */}
          <span className="relative z-10 flex items-center gap-2 text-gray-600">
            My Resume
            <Image src={assets.download_icon} alt="download" className=" w-4" />
          </span>
        </a>
      </div>
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-30px, -50px) rotate(90deg);
          }
          50% {
            transform: translate(-60px, 30px) rotate(180deg);
          }
          75% {
            transform: translate(30px, 50px) rotate(270deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-40px, -60px) rotate(240deg);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 40px) scale(1.1);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(2px, 3px) rotate(0) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
