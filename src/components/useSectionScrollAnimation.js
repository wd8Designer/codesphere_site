'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSectionScrollAnimation(sectionSelector = 'section') {
  useEffect(() => {
    const sections = document.querySelectorAll(sectionSelector);
    const animations = [];

    sections.forEach((section, index) => {
      // Optional: alternate direction for visual depth
      const direction = index % 2 === 0 ? 100 : -100;

      const anim = gsap.to(section, {
        y: direction,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // ties animation to scroll
        },
      });

      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      });
    };
  }, [sectionSelector]);
}
