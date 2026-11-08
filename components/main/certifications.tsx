"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      id="certifications"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-[400px] relative z-[20] w-full px-5 md:px-20 py-20 overflow-hidden"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-10 text-center">
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
          Certifications
        </motion.h2>
      </div>

      {/* Content */}
      <motion.div
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[800px] p-8 rounded-2xl border border-[#2A0E61]/40 bg-[#0300142b] backdrop-blur-md text-center"
      >
        <p className="text-gray-400 text-lg italic">
          Certifications content will be added here later.
        </p>
      </motion.div>
    </section>
  );
};
