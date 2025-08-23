import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className={isDarkMode?"mt-20 bg-flat transition-colors duration-300":"mt-20 text-white bg-white transition-colors duration-300"}>
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-20 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          singhtanuj186@gmail.com
        </div>
      </div>
      <div className="sm:flex text-center items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6">
        <ul className={isDarkMode?"flex items-center gap-10 font-bold justify-center mt-4 sm:mt-0 text-white":"flex items-center gap-10 text-gray-800 font-bold justify-center mt-4 sm:mt-0"}>
          <li>
            <a
              href="https://github.com/TjRajpoot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tanuj-singh-rajpoot-154585338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkdIn
            </a>
          </li>
        </ul>
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tanuj Singh. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
