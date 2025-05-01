"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CallToAction() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#714B67] text-white text-center py-20 px-6">
      <span className="px-4 py-1 rounded-full bg-purple-100 text-[#714B67] text-sm font-medium mb-4 inline-block">
        Talk to Expert
      </span>
      <h2 className="text-white font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">Ready to Transform Your Business?</h2>
      <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
      <p className="mb-[30px] text-[18px] text-white gray-700 text-center leading-relaxed">Start with a free consultation or see a live demo tailored to your needs.</p>
      <button className="relative flex justify-center px-9 py-4 text-2xl font-semibold uppercase before:absolute before:inset-0 before:rounded-full before:transition before:bg-white text-[#714B67] hover:before:scale-105 mx-auto">
        <span className="relative">Talk to an Expert</span>
      </button>
    </section>
  );
}
