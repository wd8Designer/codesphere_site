"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsSlider() {
  const containerRef = useRef();
  const trackRef = useRef();

  const solutions = [
    {
      title: "CRM",
      description:
        "Centralize customer data, track interactions, and personalize engagement with ease. Automate follow-ups and manage your sales pipeline from a single dashboard.",
      cta: "Discover CRM Benefits",
      img: "/crm-img.png",
      altTag: "CRM image",
    },
    {
      title: "ERP",
      description:
        "Unify all departments—from finance to logistics—under one powerful system. Eliminate silos, improve collaboration, and gain real-time visibility across operations.",
      cta: "Explore ERP Features",
      img: "/erp-img.png",
      altTag: "CRM image",
    },
    {
      title: "Inventory",
      description:
        "Maintain optimal stock levels, automate reordering, and track every item in your supply chain. Say goodbye to stockouts and overstocking issues.",
      cta: "Optimize Inventory",
      img: "/inventory-img.png",
      altTag: "CRM image",
    },
    {
      title: "Sales",
      description:
        "Streamline your sales process with intelligent automation. Manage leads, create quotes, and close deals faster with data-driven decision-making tools.",
      cta: "Accelerate Sales",
      img: "/sales-img.png",
      altTag: "CRM image",
    },
    {
      title: "HR",
      description:
        "Recruit, onboard, and manage talent effortlessly. Automate payroll, time-off tracking, and performance reviews — all from a central HR hub.",
      cta: "Empower Your HR Team",
      img: "/hr-img.png",
      altTag: "CRM image",
    },
    {
      title: "Accounting",
      description:
        "Simplify your financial operations with real-time reporting, smart invoicing, and automated bank reconciliation. Stay compliant and in control.",
      cta: "Manage Finances Smarter",
      img: "/accounting-img.png",
      altTag: "CRM image",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      gsap.to(trackRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="h-screen overflow-hidden relative">
      <div
        ref={trackRef}
        className="flex h-full items-center gap-16 px-32"
        style={{ width: "max-content" }}
      >
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="w-[50vw] min-w-[50vw] min-h-[400px] bg-[#714B67]/10 backdrop-filter backdrop-blur-sm shadow-lg rounded-2xl p-12 flex-shrink-0 flex flex-wrap justify-between"
          >

            <div className="w-full md:w-1/2 relative">
              <Image src={solution.img} alt={solution.altTag} fill className="object-contain"></Image>
            </div>

            <div className="w-full md:w-1/2 relative">
              <h3 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-left">{solution.title}</h3>
              <p className="mb-[30px] text-[18px] text-gray-700 text-left leading-relaxed">{solution.description}</p>
              <button className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-full before:transition before:bg-[#714B67]  text-white hover:before:scale-105">
                <span className="relative">{solution.cta}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
