import React from "react";
import { Outfit, Ovo } from "next/font/google";
import { assets, serviceData } from "@/assets/assets";
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
const Services = ({isDarkMode}) => {
  return (
    <motion.div initial={{ opacity: 0,}}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1,delay:0.5}} id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 initial={{ opacity: 0,y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.8}} className={`${ovo.className} text-center mb-2 text-lg`}>
        What I Offer!
      </motion.h4>
      <motion.h2 initial={{ opacity: 0,y:-10}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 1,delay:0.8}} className={`${ovo.className} text-center text-5xl`}>My Services</motion.h2>
      <motion.p
      initial={{ opacity: 0,}}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.5,delay:0.7}}
        className={`${ovo.className} text-center max-w-2xl mx-auto mt-5 mb-12`}
      >
        I am Full- Stack Developer from Bhopal. I am a tech-enthusiast.
      </motion.p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={isDarkMode?"hover:bg-gray-500 border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 transition-all duration-200 hover:shadow-[10px_10px_0_#E5E7EB]":"border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-200 hover:shadow-[10px_10px_0_#E5E7EB]"}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className={isDarkMode?"text-lg my-4 text-white":"text-lg my-4 text-gray-700"}>{title}</h3>
            <p className={isDarkMode?"text-sm text-white leading-5":"text-sm text-gray-600 leading-5"}>{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More...
              <Image src={assets.right_arrow_bold_dark} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
