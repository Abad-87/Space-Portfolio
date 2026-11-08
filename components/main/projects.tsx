"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [activeFilter, setActiveFilter] = useState<"all" | "excel" | "sql" | "powerbi" | "python">("all");

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "excel", label: "Excel" },
    { id: "sql", label: "SQL" },
    { id: "powerbi", label: "Power BI" },
    { id: "python", label: "Python" },
  ] as const;

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return (project.category as readonly string[]).includes(activeFilter);
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen relative z-[20] w-full px-5 md:px-20 py-20 overflow-hidden"
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
            My Work
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
          </span>
        </motion.h2>
      </div>

      {/* Filter Tabs */}
      <motion.div
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap gap-3 justify-center items-center mb-12 max-w-[600px] w-full"
      >
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`py-2 px-5 rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 border relative ${
              activeFilter === tab.id
                ? "border-purple-500 text-white bg-purple-950/40 shadow-lg shadow-purple-500/10"
                : "border-[#2A0E61]/60 text-gray-400 bg-[#0300141a] hover:border-purple-500/40 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                badge={project.badge}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
