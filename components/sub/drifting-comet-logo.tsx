"use client";

import React from "react";
import { motion } from "framer-motion";

export const DriftingCometLogo = () => {
  return (
    <div className="relative flex items-center justify-center w-11 h-11 group cursor-pointer mr-2 select-none">
      {/* Background Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-tr from-purple-600/50 via-cyan-400/40 to-purple-400/30 rounded-full blur-md group-hover:opacity-90 transition-opacity duration-300"
      />

      {/* Floating Animated Comet SVG */}
      <motion.svg
        animate={{
          y: [-1.5, 1.5, -1.5],
          x: [-1, 1, -1],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
      >
        <defs>
          <radialGradient id="cometHead" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#E9D5FF" />
            <stop offset="70%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6B21A8" />
          </radialGradient>

          <linearGradient id="cometTail" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#A855F7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="dustTrail" x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* Main Sweeping Comet Tail */}
        <path
          d="M 8 56 C 22 46, 36 32, 52 12 C 42 26, 26 40, 8 56 Z"
          fill="url(#cometTail)"
        />

        {/* Secondary Dust Wing */}
        <path
          d="M 12 58 C 26 50, 40 38, 54 18 C 46 30, 30 44, 12 58 Z"
          fill="url(#dustTrail)"
        />

        {/* Speed / Stardust Particles */}
        <circle cx="16" cy="50" r="1.2" fill="#E9D5FF" opacity="0.85" />
        <circle cx="24" cy="42" r="1.5" fill="#38BDF8" opacity="0.9" />
        <circle cx="32" cy="32" r="1.3" fill="#F472B6" opacity="0.8" />
        <circle cx="42" cy="22" r="1.1" fill="#FFFFFF" opacity="0.95" />

        {/* Outer Glowing Halos */}
        <circle cx="52" cy="12" r="8" fill="#A855F7" opacity="0.3" />
        <circle cx="52" cy="12" r="5" fill="#38BDF8" opacity="0.55" />

        {/* Comet Bright Core */}
        <circle cx="52" cy="12" r="3.5" fill="url(#cometHead)" />
        <circle cx="50.8" cy="10.8" r="1.3" fill="#FFFFFF" />
      </motion.svg>
    </div>
  );
};
