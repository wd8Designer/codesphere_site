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

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        onEnter: () => {
          containerRef.current.classList.add("show-gradients");
        },
        onLeaveBack: () => {
          containerRef.current.classList.remove("show-gradients");
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "bottom top",
        onLeave: () => {
          containerRef.current.classList.remove("show-gradients");
        },
        onEnterBack: () => {
          containerRef.current.classList.add("show-gradients");
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "top bottom",
        onLeaveBack: () => {
          containerRef.current.classList.remove("show-gradients");
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);




  return (
    <section ref={containerRef} className="solution-slider h-screen relative overflow-hidden">

      <div className="left-shape absolute w-[300px] h-[200px] bg-[#714B67] rounded-[100%] blur-[200px] top-0 bottom-0 left-0"></div>
      <div className="right-shape absolute w-[300px] h-[500px] bg-[#017e84] rounded-[100%] blur-[200px] top-auto bottom-0 right-0"></div>

      <div className="relative top-[180px]">
        <span className="px-4 py-1 rounded-full bg-[#714B67] text-white text-sm font-medium mb-4 table mx-auto">
          Talk to Expert
        </span>
        <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">Ready to Transform Your Business?</h2>
        <div className="w-20 h-[2px] bg-[#714B67] mx-auto mb-6"></div>
        <p className="mb-[30px] text-[18px] text-[#714B67] gray-700 text-center leading-relaxed">Start with a free consultation or see a live demo tailored to your needs.</p>
      </div>
      <div
        ref={trackRef}
        className="flex h-full items-center gap-16 px-32"
        style={{ width: "max-content" }}
      >
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="w-[50vw] min-w-[50vw] min-h-[400px] bg-[#fff]/10 backdrop-filter backdrop-blur-sm shadow-lg border-[3px] border-[#714B67]/30 rounded-2xl p-[20px] flex-shrink-0 flex flex-wrap justify-between"
          >

            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
              <Image src={solution.img} alt={solution.altTag} fill className="w-full object-cover"></Image>
            </div>

            <div className="w-full md:w-1/2 relative pl-[20px] flex justify-center items-start flex-col">
              <h3 className="text-[#714B67] font-semibold text-2xl sm:text-[24px] md:text-3xl mb-[15px] uppercase text-left">{solution.title}</h3>
              <p className="mb-[20px] text-[16px] text-gray-700 text-left leading-relaxed">{solution.description}</p>
              <a href="#" className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-full before:transition before:bg-[#714B67]  text-white hover:before:scale-105">
                <span className="relative">{solution.cta}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
