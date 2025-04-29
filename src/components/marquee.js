'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Marquee() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trackWidth = track.scrollWidth / 2; // because we duplicated content

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -trackWidth,
        duration: 25,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth),
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const imageSrc = '/odoo_logo.svg';
  const images = Array.from({ length: 6 }, () => imageSrc);

  return (
    <div className="absolute top-0 bottom-0 -z-10 flex items-center overflow-hidden w-full py-12" ref={wrapperRef}>
      <div
        className="flex whitespace-nowrap gap-8"
        ref={trackRef}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Marquee Image ${i + 1}`}
            className="h-32 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}