"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessFlow() {
  const steps = [
    {
      title: "Discovery",
      desc: "We analyze your business needs and challenges to propose tailored solutions.",
      icon: "🔍",
    },
    {
      title: "Customization",
      desc: "We adapt Odoo modules and flows to perfectly match your business.",
      icon: "🛠️",
    },
    {
      title: "Integration",
      desc: "We connect Odoo with your existing systems for seamless data flow.",
      icon: "🔗",
    },
    {
      title: "Training",
      desc: "We empower your team with hands-on training and support materials.",
      icon: "🎓",
    },
    {
      title: "Support",
      desc: "We stay with you post-launch to ensure ongoing success.",
      icon: "🛎️",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".process-card");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + cards.length * 400, // Adjust scroll length based on number of cards
          scrub: true,
          pin: true,
        },
      });

      // Animate each card one by one from bottom to top
      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: "100%", opacity: 0 }, // Start from below the screen
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          i * 0.6 // Stagger the animation for each card
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 overflow-hidden">
      <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
        How We Implement Odoo for You
      </h2>
      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="process-card opacity-0" // Set opacity to 0 initially for animation
          >
            <div className="border-l-4 border-[#714B67] bg-[#cfc1cb] rounded-xl shadow-lg p-6 flex gap-4 items-start max-w-xl mx-auto">
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#714B67]">{step.title}</h3>
                <p className="text-gray-700 mt-[10px]">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
