"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const DataScienceOrbit = () => {
  const [dimensions, setDimensions] = useState({ innerRadius: 105, outerRadius: 185 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDimensions({ innerRadius: 105, outerRadius: 185 });
      } else {
        setDimensions({ innerRadius: 85, outerRadius: 145 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const innerOrbitIcons = [
    { icon: "/svg/mysql-icon.svg", name: "SQL" },
    { icon: "/svg/excel.svg", name: "Excel" },
    { icon: "/svg/jupyter.svg", name: "Jupyter" },
    { icon: "/svg/Git.svg", name: "Git" },
    { icon: "/svg/GitHub.svg", name: "GitHub" },
  ];

  const outerOrbitIcons = [
    { icon: "/svg/python.svg", name: "Python" },
    { icon: "/svg/power-bi-icon.svg", name: "Power BI" },
    { icon: "/svg/azure.svg", name: "Azure" },
    { icon: "/svg/Pandas.svg", name: "Pandas" },
    { icon: "/svg/numpy.svg", name: "NumPy" },
    { icon: "/svg/scikit-learn.svg", name: "Scikit-learn" },
    { icon: "/svg/Apache_Spark_logo.svg", name: "Apache Spark" },
    { icon: "/svg/mongodb.svg", name: "MongoDB" },
  ];

  return (
    <div className="relative flex items-center justify-center w-[360px] h-[360px] md:w-[440px] md:h-[440px] select-none">
      {/* Central Glowing Core / Portal */}
      <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-purple-600/30 to-cyan-500/20 blur-[30px]" />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-purple-500/30 bg-[#030014]/65 backdrop-blur-md flex items-center justify-center shadow-lg shadow-purple-500/25 z-10"
      >
        <span className="text-3xl md:text-4xl animate-pulse">🔮</span>
      </motion.div>

      {/* Orbit 1 Ring */}
      <div 
        style={{
          width: dimensions.innerRadius * 2,
          height: dimensions.innerRadius * 2,
        }}
        className="absolute rounded-full border border-purple-500/10 -z-10"
      />

      {/* Inner Orbit Icons */}
      {innerOrbitIcons.map((item, idx) => {
        const angle = (idx * 360) / innerOrbitIcons.length;
        const rad = (angle * Math.PI) / 180;
        const x = dimensions.innerRadius * Math.cos(rad);
        const y = dimensions.innerRadius * Math.sin(rad);

        return (
          <motion.div
            key={item.name}
            style={{
              position: "absolute",
              x,
              y,
            }}
            animate={{
              y: [y, y - 6, y],
            }}
            transition={{
              duration: 3 + (idx % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15, borderColor: "rgba(168,85,247,0.8)" }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-purple-500/30 bg-[#030014c2] backdrop-blur-md flex items-center justify-center cursor-pointer shadow-md shadow-purple-500/5 transition-colors duration-300 p-2"
              title={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbit 2 Ring */}
      <div 
        style={{
          width: dimensions.outerRadius * 2,
          height: dimensions.outerRadius * 2,
        }}
        className="absolute rounded-full border border-purple-500/5 -z-10"
      />

      {/* Outer Orbit Icons */}
      {outerOrbitIcons.map((item, idx) => {
        const angle = (idx * 360) / outerOrbitIcons.length;
        const rad = (angle * Math.PI) / 180;
        const x = dimensions.outerRadius * Math.cos(rad);
        const y = dimensions.outerRadius * Math.sin(rad);

        return (
          <motion.div
            key={item.name}
            style={{
              position: "absolute",
              x,
              y,
            }}
            animate={{
              y: [y, y - 8, y],
            }}
            transition={{
              duration: 4 + (idx % 4),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15, borderColor: "rgba(168,85,247,0.8)" }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-purple-500/20 bg-[#030014c2] backdrop-blur-md flex items-center justify-center cursor-pointer shadow-md shadow-purple-500/5 transition-colors duration-300 p-2"
              title={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
