"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags: readonly string[];
  badge?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
  badge,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl border border-[#2A0E61]/50 bg-[#0300142b] backdrop-blur-md hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative overflow-hidden aspect-video w-full">
        <Image
          src={src}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-purple-950/80 text-[#b49bff] border border-[#7042f88b] text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium tracking-wide uppercase text-purple-400 bg-purple-950/20 px-2 py-0.5 rounded border border-[#2A0E61]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed font-normal mb-6 flex-1 line-clamp-4">
          {description}
        </p>

        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block py-2 px-4 rounded-lg bg-purple-950/40 border border-[#2A0E61]/80 text-center text-xs font-semibold text-white hover:bg-purple-900/30 hover:border-purple-500/50 transition duration-300"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
};
