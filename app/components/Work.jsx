import React from "react";
import { Outfit, Ovo } from "next/font/google";
import { assets, serviceData, workData } from "@/assets/assets";
import Image from "next/image";
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

const Work = ({isDarkMode}) => {
  return (
    <motion.div initial={{ opacity: 0,}}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1,}} id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 initial={{ opacity: 0,y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.5}} className={`${ovo.className} text-center mb-2 text-lg`}>
        My Portfolio
      </motion.h4>
      <motion.h2 initial={{ opacity: 0,y:-10}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 1,delay:0.7}} className={`${ovo.className} text-center text-5xl`}>
        My Latest Work
      </motion.h2>
      <motion.p
      initial={{ opacity: 0,y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.5}}
        className={`${ovo.className} text-center max-w-2xl mx-auto mt-5 mb-12`}
      >
        Here are some of my favorite projects that highlight my journey as a
        full-stack developer. From dynamic web apps to mobile solutions, each
        project represents my passion for problem-solving, design, and bringing
        ideas to life through code.
      </motion.p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group bg-cover"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className={isDarkMode?"bg-black/60 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7":"bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7"}>
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm ">{project.description}</p>
              </div>
              <div className={isDarkMode?"flex items-center justify-center aspect-square border border-gray-600 rounded-full w-9 shadow-[2px_2px_0_#E5E7EB] group-hover:bg-white/50 transition-all":"flex items-center justify-center aspect-square border border-gray-600 rounded-full w-9 shadow-[2px_2px_0_#E5E7EB] group-hover:bg-lime-300 transition-all"}>
                <Image src={isDarkMode?assets.send_icon_white:assets.send_icon} alt="send Icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

<motion.a
initial={{ opacity: 0,y:20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.7}}
  href="#work"
  className={`${ovo.className} relative overflow-hidden flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full mx-auto my-20 bg-blue-50 shadow-sm group w-max`}
>
  {/* Hover gradient background */}
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100 group-active:scale-x-100"></span>

  {/* Text & Icon */}
  <span className="relative z-10 flex items-center gap-2 text-gray-700">
    Show More
    <Image src={assets.right_arrow_bold} alt="right arrow" className="w-4" />
  </span>
</motion.a>


    </motion.div>
  );
};

export default Work;
