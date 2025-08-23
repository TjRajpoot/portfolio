"use client";
import React from "react";
import { useState } from "react";
import { Outfit, Ovo } from "next/font/google";
import { assets } from "@/assets/assets";
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
const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1}}
      id="contact"
      className={
        isDarkMode
          ? "bg-none m-20 rounded-2xl"
          : "w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      }
    >
      <motion.h4
      initial={{ opacity: 0,y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 0.8,delay:0.5}}
        className={
          isDarkMode
            ? `${ovo.className} text-center mb-2 pt-10 text-lg`
            : `${ovo.className} text-center mb-2 text-lg`
        }
      >
        Connect with Me
      </motion.h4>
      <motion.h2 initial={{ opacity: 0,scale:2}}
        whileInView={{ opacity: 1, scale:1}}
        transition={{ duration: 0.5}} className={`${ovo.className} text-center text-5xl`}>Get in Touch</motion.h2>
      <motion.p
      initial={{ opacity: 0,y:-10}}
        whileInView={{ opacity: 1,y:0}}
        transition={{ duration: 1,delay:0.5}}
        className={`${ovo.className} text-center max-w-2xl mx-auto mt-5 mb-12`}
      >
        I’m always excited to collaborate on new projects, share ideas, or
        simply connect. Whether you have a question, an opportunity, or just
        want to say hello, feel free to reach out—I’ll get back to you as soon
        as possible.
      </motion.p>
      <motion.form initial={{ opacity: 0,y:20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.5}} onSubmit={onSubmit} className="max-w-2xl mx-auto pb-4">
        <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-8">
          <motion.input
          initial={{ opacity: 0.4,x:-50}}
        whileInView={{ opacity: 1, x:0}}
        transition={{ duration: 0.8,delay:0.5}}
            className={isDarkMode?"bg-[#000]/30 border border-gray-400 flex-1 p-3 outline-none rounded-md ":"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"}
            type="text"
            placeholder="Enter Your Name"
            required
            name="Name"
          />
          <motion.input
          initial={{ opacity: 0.4,x:50}}
        whileInView={{ opacity: 1, x:0}}
        transition={{ duration: 0.8,delay:0.5}}
            className={isDarkMode?"bg-[#000]/30 border border-gray-400 flex-1 p-3 outline-none rounded-md ":"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"}
            type="email"
            placeholder="Enter Your Email"
            required
            name="Email"
          />
        </div>
        <motion.textarea
        initial={{ opacity: 0,y:50}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 0.8,delay:0.5}}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6"
          rows="6"
          placeholder="Enter Your Message"
          name="message"
        ></motion.textarea>
        <motion.button
        initial={{ opacity: 0,y:60}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ duration: 1,delay:0.9}}
          type="submit"
          className={`${ovo.className} relative overflow-hidden flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full mx-auto bg-blue-50 shadow-sm group`}
        >
          {/* Hover gradient background */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100/80 via-pink-200/80 to-red-100/80 scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100 group-active:scale-x-100"></span>

          {/* Text & Icon */}
          <span className="relative z-10 flex items-center gap-3 text-gray-800">
            Submit Now
            <Image src={assets.right_arrow_bold} className="w-3" alt="" />
          </span>
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
