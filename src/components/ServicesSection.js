"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "1.",
    title: "Odoo <br>Consultation",
    description:
      "We provide expert guidance on all Odoo-related topics, ensuring your business maximizes the system's potential.",
    img: "/odoo-consultation.jpg",
    altTag: "Odoo Consultation",
  },
  {
    number: "2.",
    title: "Odoo <br>Project Start",
    description:
      "We conduct a detailed analysis of your processes and offer tailored solutions to ensure a successful Odoo project launch.",
    img: "/odoo-project.jpg",
    altTag: "Odoo Project Start",
  },
  {
    number: "3.",
    title: "Odoo <br>Implementation",
    description:
      "We deliver a seamless Odoo implementation, customized to align with your business needs for a smooth deployment.",
    img: "/odoo-implementation.jpg",
    altTag: "Odoo Implementation",
  },
  {
    number: "4.",
    title: "Odoo <br>Support",
    description:
      "Our dedicated consultants provide continuous support to ensure your Odoo system operates smoothly and accurately.",
    img: "/odoo-support.jpg",
    altTag: "Odoo Support",
  },
];


function ServiceCard({ service }) {
const cardRef = useRef(null);

useEffect(() => {
  let frame;

  const handleScroll = () => {
    if (!cardRef.current) return;

    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const centerScreenY = windowHeight / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const distance = (cardCenterY - centerScreenY) / centerScreenY;
      const clamped = Math.max(Math.min(distance, 1), -1);

      const translateY = clamped * 100; 
      const scale = 1 - Math.abs(clamped) * 0.15;
      

      cardRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
     
      cardRef.current.style.zIndex = `${1000 - Math.round(Math.abs(clamped) * 500)}`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(frame);
  };
}, []);



  return (
    <div className="sticky top-[140px] mt-[-120px] z-10 first:mt-[0px] " >
      <div
        ref={cardRef}
        className="transition-transform duration-300 ease-out max-w-6xl mx-auto drop-shadow-2xl rounded-[20px] bg-white mb-[20px] "
        style={{
          transform: "perspective(1000px) scale3d(0.8, 0.8, 1) rotateX(1deg)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="flex-shrink-0 flex flex-wrap justify-between">
          <div className="w-full md:w-[45%] px-[30px] py-[60px]">
            <span className="w-full text-[150px] font-bold text-left mb-[20px] text-[#714B67] absolute top-0 left-0  block leading-[1] opacity-10">
              {service.number}
            </span>
            <h3 className="text-[45px] font-semibold mb-4 text-[#714B67]  drop-shadow text-left leading-[1.4] max-w-[500px]"  dangerouslySetInnerHTML={{ __html: service.title }}> 
             
            </h3>
            <p className="text-gray-700  text-left text-[24px]">{service.description}</p>
          </div>
          <div className="w-full md:w-[55%] p-[20px]">
            <div className="relative w-full  rounded-2xl overflow-hidden md:h-[500px]">
              <Image src={service.img} alt={service.altTag} fill className="aspect-1/1  object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Section with all services
export default function ServicesSection() {
  return (
    <section className="relative mx-auto py-20 px-6 text-center bg-transparent our-services">
      <div className="lg:max-w-5xl mx-auto">
        <span className="px-4 py-1 rounded-full bg-[#714B67] text-white text-sm font-medium mb-4 inline-block">
          Services
        </span>
        <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
          Our Services
        </h2>
        <div className="w-20 h-[2px] bg-[#714B67] mx-auto mb-6"></div>
        <p className="mb-[30px] text-[18px] text-gray-700 text-center">
          We offer all the services you need for a successful Odoo implementation.
        </p>
      </div>

      <div className="gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}