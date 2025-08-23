import { assets, infoList, toolsData } from "@/assets/assets";
import { Outfit, Ovo } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
});
const colors = {
  lightHover: "#fcf4ff",
  darkHover: "#2a004a",
  darkTheme: "#11001f",
};
const boxShadow = {
  black: "4px 4px 0 #000",
  white: "4px 4px 0 #fff",
};
const outfit = Outfit({
  subsets: ["latin"],
});
const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h4
        className={`${ovo.className} text-center mb-2 text-lg`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`${ovo.className} text-center text-5xl`}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={
            isDarkMode
              ? "w-64 sm:w-80 rounded-3xl max-w-none shadow-white/30"
              : "w-64 sm:w-80 rounded-3xl max-w-none shadow-black/30"
          }
        >
          <Image
            src={assets.user_image}
            alt="user"
            className={
              isDarkMode
                ? "w-full rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                : "w-full rounded-3xl shadow-black/30 shadow-lg"
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p
            className={`${ovo.className} mb-10 max-w-2xl justify-center text-center lg:text-left`}
          >
            I'm a passionate B.Tech IT student and full-stack web developer
            skilled in JavaScript, React, Next.js, Node.js, Express, and
            MongoDB. I also have hands-on experience with Flutter app
            development using Hive for local storage. I enjoy building
            efficient, user-friendly applications and continuously exploring new
            technologies to improve my skills. Currently, I’m focusing on
            creating real-world projects in MERN and Next.js to strengthen my
            portfolio and grow as a software developer.
          </p>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                className={
                  isDarkMode
                    ? "border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-500 hover:-translate-y-1 transition-all duration-200 hover:shadow-[4px_4px_0_#E5E7EB]"
                    : "border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-200 hover:shadow-[4px_4px_0_#E5E7EB]"
                }
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="mt-3 w-7"
                />
                <h3
                  className={
                    isDarkMode
                      ? "my-4 font-semibold text-white"
                      : "my-4 font-semibold text-gray-50"
                  }
                >
                  {title}
                </h3>
                <p
                  className={
                    isDarkMode ? "text-sm text-white" : "text-sm text-gray-600"
                  }
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.5 }}
            className={
              isDarkMode
                ? `${ovo.className} my-6 text-white`
                : `${ovo.className} my-6 text-gray-700`
            }
          >
            Tools I use
          </motion.h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li 
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-200 hover:shadow-[4px_4px_0_#E5E7EB]"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
