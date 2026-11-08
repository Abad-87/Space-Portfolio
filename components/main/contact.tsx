"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [btnText, setBtnText] = useState("Send Message");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setBtnText("Message Sent ✓");
    setSubmitted(true);
    setTimeout(() => {
      setBtnText("Send Message");
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-[#b49bff] w-5 h-5" />,
      label: "Email",
      value: "abadmustafa280@gmail.com",
      link: "mailto:abadmustafa280@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#b49bff] w-5 h-5" />,
      label: "Location",
      value: "Lucknow, Uttar Pradesh, India",
      link: null,
    },
    {
      icon: <FaLinkedin className="text-[#b49bff] w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/abadmustafa/",
      link: "https://linkedin.com/in/abadmustafa/",
    },
    {
      icon: <FaGithub className="text-[#b49bff] w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Abad-87",
      link: "https://github.com/Abad-87",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
        </motion.div>
        <motion.h2
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-bold text-white mt-4"
        >
          Contact{"  "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Me
          </span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1200px]">
        {/* Left Side: Contact Information */}
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 text-gray-300"
        >
          <h3 className="text-2xl font-bold text-white">Let&apos;s Work Together</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Have a data challenge? Looking for insights that drive decisions? I&apos;d love to hear about your project and explore how data analysis can transform your business.
          </p>

          {/* Contact Details List */}
          <div className="flex flex-col gap-6 mt-6">
            {contactItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 bg-purple-950/20 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-900/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                    {item.label}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md text-white font-medium hover:text-cyan-400 transition-colors duration-300 mt-0.5"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-md text-white font-medium mt-0.5">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={slideInFromRight(0.8)}
          className="p-6 md:p-8 rounded-2xl border border-[#2A0E61]/50 bg-[#0300141a] backdrop-blur-lg w-full"
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="px-4 py-3 rounded-lg border border-[#2A0E61]/50 bg-[#0300143a] text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="px-4 py-3 rounded-lg border border-[#2A0E61]/50 bg-[#0300143a] text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="Data Analysis Project"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="px-4 py-3 rounded-lg border border-[#2A0E61]/50 bg-[#0300143a] text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="px-4 py-3 rounded-lg border border-[#2A0E61]/50 bg-[#0300143a] text-white focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className={`py-3 px-8 rounded-lg text-white font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                submitted
                  ? "bg-[#00c853] shadow-lg shadow-green-500/25"
                  : "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-500/25"
              }`}
            >
              {btnText}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
