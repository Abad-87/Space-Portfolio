"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Tools = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toolRows = [
    // Row 1 (6 icons)
    [
      { name: "Python", icon: "/svg/python.svg" },
      { name: "SQL", icon: "/svg/mysql-icon.svg" },
      { name: "Power BI", icon: "/svg/power-bi-icon.svg" },
      { name: "Excel", icon: "/svg/excel.svg" },
      { name: "Azure", icon: "/svg/azure.svg" },
      { name: "Git", icon: "/svg/Git.svg" },
    ],
    // Row 2 (5 icons)
    [
      { name: "GitHub", icon: "/svg/github-svgrepo.svg" },
      { name: "VS Code", icon: "/svg/Visual Studio Code (VS Code).svg" },
      { name: "Jupyter", icon: "/svg/svgviewer-output.svg" },
      { name: "Google Colab", icon: "/svg/colab.svg" },
      { name: "MongoDB", icon: "/svg/MongoDB.svg" },
    ],
    // Row 3 (4 icons)
    [
      { name: "Pandas", icon: "/svg/Pandas.svg" },
      { name: "NumPy", icon: "/svg/numpy.svg" },
      { name: "Scikit-Learn", icon: "/svg/scikit-learn.svg" },
      { name: "Apache Spark", icon: "/svg/Apache_Spark_logo.svg" },
    ],
    // Row 4 (3 icons)
    [
      { name: "Matplotlib", icon: "/svg/Matplotlib.svg" },
      { name: "Seaborn", icon: "/svg/seaborn.svg" },
      { name: "Figma", icon: "/svg/Figma.svg" },
    ],
    // Row 5 (2 icons)
    [
      { name: "Vercel", icon: "/svg/vercel.svg" },
      { name: "Netlify", icon: "/svg/netlify-icon.svg" },
    ],
    // Row 6 (1 icon)
    [
      { name: "Database SQL", icon: "/svg/sql.svg" },
    ],
  ];

  return (
    <section
      id="tools"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen relative z-[20] w-full px-5 md:px-20 py-20 overflow-hidden"
    >
      {/* Seamless Full-Section Background Video (No Square Box Container) */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-[-10] opacity-30">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mb-16 text-center z-[10]">
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
            Tech Stack
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          Tools &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Technologies
          </span>
        </motion.h2>
      </div>

      {/* Inverted Triangle Layout — Completely Borderless & Box-free Floating Icons */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[1100px] z-[10]">
        {toolRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 w-full"
          >
            {row.map((tool, toolIndex) => {
              const globalIdx =
                toolRows.slice(0, rowIndex).reduce((acc, r) => acc + r.length, 0) +
                toolIndex;

              return (
                <motion.div
                  key={tool.name}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: globalIdx * 0.03 }}
                  whileHover={{ scale: 1.15 }}
                  className="flex flex-col items-center justify-center p-2 w-[100px] sm:w-[120px] relative group cursor-pointer select-none bg-transparent"
                >
                  {/* Icon */}
                  <div className="mb-2.5 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transform transition-transform duration-300">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-300"
                    />
                  </div>

                  {/* Name */}
                  <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center tracking-wide">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
