"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const infoItems = [
    { label: "Name", value: "Syed Abad Mustafa" },
    { label: "Role", value: "Data Analyst" },
    { label: "Location", value: "Lucknow, India" },
    { label: "Availability", value: "Open to Work" },
    { label: "Education", value: "B.Tech CSE - DS & AI" },
    { label: "Languages", value: "English, Hindi" },
  ];

  const competencies = [
    { name: "Python / Pandas / NumPy / Matplotlib / Seaborn", pct: 87 },
    { name: "SQL & Database Querying", pct: 81 },
    { name: "Power BI / Azure", pct: 90 },
    { name: "Machine Learning (Scikit-learn)", pct: 75 },
    { name: "Excel / Advanced Analytics", pct: 95 },
    { name: "Statistical Analysis & A/B Testing", pct: 80 },
  ];

  return (
    <section
      id="about-me"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen relative z-[20] w-full px-5 md:px-20 py-20 overflow-hidden"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
            About Me
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          Know Who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            I Am
          </span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1200px]">
        {/* Left Side: Bio & Info Items */}
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            I am <strong className="text-white font-semibold">Syed Abad Mustafa</strong>, a Data Analyst who excels at turning complex data into clear, strategic insights that influence business outcomes.
          </p>
          <p className="text-lg leading-relaxed">
            Proficient in <strong className="text-white font-semibold">SQL, Python, Power BI, and Azure</strong> &mdash; I move fluidly from raw data extraction to polished dashboards and advanced analytics.
          </p>
          <p className="text-lg leading-relaxed">
            Including <strong className="text-white font-semibold">predictive modeling, A/B testing, and KPI reporting</strong>, I thrive on discovering signal in the noise and bringing a rigorous, hypothesis-driven approach to every project.
          </p>

          {/* Info Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 rounded-xl border border-[#2A0E61]/30 bg-[#0300143a] backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {item.label}
                </span>
                <span className="text-md text-white mt-1 font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Skills Competencies Sliders */}
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromRight(0.8)}
          className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-[#2A0E61]/50 bg-[#0300141a] backdrop-blur-lg"
        >
          <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
          <div className="flex flex-col gap-6">
            {competencies.map((comp, idx) => (
              <div key={idx} className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold uppercase text-gray-300">
                    {comp.name}
                  </span>
                  <span className="text-sm font-bold text-purple-400">
                    {comp.pct}%
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-purple-950/40 rounded-full overflow-hidden border border-[#2A0E61]/30">
                  {/* Filled Part */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${comp.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
