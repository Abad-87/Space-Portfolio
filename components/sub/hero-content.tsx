"use client";

import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { DataScienceOrbit } from "./data-science-orbit";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const roles = [
    "Data Analyst",
    "BI Developer",
    "SQL Expert",
    "Python Developer",
    "Insights Engineer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleType = () => {
      const curRole = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(curRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === curRole.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(curRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    const delay = isDeleting ? 30 : 65;
    const timer = setTimeout(handleType, delay);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:w-3/5">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-semibold">
            Data Analyst & Insights Specialist
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello, My Name is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Syed Abad Mustafa
            </span>
          </span>
          <span className="text-2xl md:text-3xl text-purple-400 font-medium h-[40px]">
            I&apos;m a <span className="text-white border-r-2 border-purple-500 pr-1 animate-pulse">{currentText}</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          I transform raw data into actionable insights with expertise in statistical analysis,
          data visualization, and machine learning. My passion is to uncover patterns and
          create impactful dashboards, reports, and predictive models.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="py-2.5 px-6 border border-purple-500/50 bg-[#03001427] text-center text-white cursor-pointer rounded-lg hover:bg-purple-950/20 hover:scale-105 transition duration-300"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="py-2.5 px-6 border border-purple-500/50 bg-[#03001427] text-center text-white cursor-pointer rounded-lg hover:bg-purple-950/20 hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">1.5+</span>
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mt-1">Years Exp.</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">50+</span>
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mt-1">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">5+</span>
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mt-1">Clients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white">98%</span>
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mt-1">Satisfaction</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center lg:w-2/5"
      >
        <DataScienceOrbit />
      </motion.div>
    </motion.div>
  );
};
