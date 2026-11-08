"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      num: "01",
      icon: "📊",
      title: "Data Analysis",
      description:
        "Deep-dive analysis of business data to uncover trends, patterns, and anomalies using Python, SQL, and statistical methods.",
    },
    {
      num: "02",
      icon: "📈",
      title: "Dashboard Design",
      description:
        "Interactive, executive-level dashboards in Power BI that turn complex KPIs into intuitive visual narratives.",
    },
    {
      num: "03",
      icon: "🤖",
      title: "Predictive Modeling",
      description:
        "Machine learning models for forecasting, classification, and clustering that help businesses anticipate future outcomes.",
    },
    {
      num: "04",
      icon: "🗄️",
      title: "Database & SQL",
      description:
        "SQL queries, stored procedures, data pipelines, and ETL workflows for structured data management.",
    },
    {
      num: "05",
      icon: "📋",
      title: "Reporting & Insights",
      description:
        "Automated weekly/monthly reports with actionable insights and clear recommendations for leadership teams.",
    },
    {
      num: "06",
      icon: "🔬",
      title: "A/B Testing & Research",
      description:
        "Rigorous experiment design, hypothesis testing, and statistical significance analysis for product and marketing decisions.",
    },
  ];

  return (
    <section
      id="services"
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
            What I Do
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Services
          </span>
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03, translateY: -5 }}
            className="flex flex-col p-8 rounded-2xl border border-[#2A0E61]/40 bg-[#0300142b] backdrop-blur-md hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-300 -z-10" />

            {/* Number on Card */}
            <div className="absolute top-4 right-6 text-5xl font-extrabold text-purple-950/20 group-hover:text-purple-500/10 select-none transition-colors duration-300 font-mono">
              {service.num}
            </div>

            {/* Icon */}
            <div className="text-4xl mb-6 select-none bg-purple-950/30 w-16 h-16 rounded-xl flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-900/20 transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
