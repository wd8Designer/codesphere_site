'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#714B67] text-white text-center py-20 px-6 rounded-[20px] w-[calc(100%-40px)] mx-auto relative"
    >
      <div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          className="mb-6"
          variants={iconVariants}
        >
          <div className="w-16 h-16 mx-auto bg-transparent flex items-center justify-center">
            
          </div>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Let&apos;s Talk About Your Next Project
        </h2>

        <p
          className="text-white mb-8 text-lg"
          variants={itemVariants}
        >
          Chat with one of our technology experts and learn how we can help drive resource efficiency, maximize value of return on investment, and drive success in any IT and business process transformation.
        </p>

        <div className="flex justify-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href='#' className=" border-white border-2 rounded-[50px] relative flex justify-center px-6 py-[10px] before:absolute before:inset-0 before:rounded-full before:transition before:bg-transparent text-white hover:scale-105">
            <span className='relative'>Talk to a human</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
