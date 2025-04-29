"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Odoo Consultation",
    description:
      "We provide expert guidance on all Odoo-related topics, ensuring your business maximizes the system's potential.",
  },
  {
    title: "Odoo Project Start",
    description:
      "We conduct a detailed analysis of your processes and offer tailored solutions to ensure a successful Odoo project launch.",
  },
  {
    title: "Odoo Implementation",
    description:
      "We deliver a seamless Odoo implementation, customized to align with your business needs for a smooth deployment.",
  },
  {
    title: "Odoo Support",
    description:
      "Our dedicated consultants provide continuous support to ensure your Odoo system operates smoothly and accurately.",
  },
];

export default function ServicesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <section className="mx-auto lg:max-w-5xl py-20 px-6 text-center bg-transparent">
      <span className="px-4 py-1 rounded-full bg-[#714B67] text-white text-sm font-medium mb-4 inline-block">
        Services
      </span>
      <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
        Our Services
      </h2>
      <div className="w-20 h-1 bg-[#714B67] mx-auto mb-6"></div>
      <p className="mb-[30px] text-[18px] text-gray-700 text-center">
        We offer all the services you need for a successful Odoo implementation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative rounded-3xl p-6 shadow-lg backdrop-blur-lg border border-white/20 bg-gradient-to-br from-[#875A7B]/90 to-[#C2A6B1]/80 transition-transform duration-300 transform hover:scale-105 hover:shadow-pink-200"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/10 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">
              {service.title}
            </h3>
            <p className="text-gray-100">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
