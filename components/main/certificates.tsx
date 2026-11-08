"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Certificates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "Dec 2025",
      logo: "🎓",
      description: "Comprehensive program covering data cleaning, analysis, SQL, R programming, and Tableau dashboards.",
      link: "#",
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "Feb 2026",
      logo: "📊",
      description: "Validation of expertise in designing and building data models, cleaning data, and creating dashboards using Power BI.",
      link: "#",
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM / Coursera",
      date: "Jan 2026",
      logo: "🔬",
      description: "Rigorous specialization in Python programming, machine learning algorithms, database querying, and data visualization.",
      link: "#",
    },
    {
      title: "Python for Data Science & Machine Learning",
      issuer: "DataCamp",
      date: "Oct 2025",
      logo: "🐍",
      description: "Intense practical coursework on Pandas data manipulation, NumPy arrays, Matplotlib plotting, and Scikit-learn predictive modeling.",
      link: "#",
    },
  ];

  return (
    <section
      id="certificates"
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
            Achievements
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          Certificates &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Credentials
          </span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px]">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, translateY: -4 }}
            className="flex flex-col p-6 rounded-2xl border border-[#2A0E61]/40 bg-[#0300142b] backdrop-blur-md hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Corner Deco */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl bg-purple-950/30 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                {cert.logo}
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  {cert.issuer}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {cert.date}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
              {cert.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed font-normal flex-1 mb-6">
              {cert.description}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 rounded-lg bg-purple-950/40 border border-[#2A0E61]/80 text-center text-xs font-semibold text-white hover:bg-purple-900/30 hover:border-purple-500/50 transition duration-300 w-fit"
            >
              Verify Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
