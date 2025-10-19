"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalTextProps {
  text: string;
  speedFactor?: number;
}

const HorizontalText: React.FC<HorizontalTextProps> = ({ text, speedFactor = 30 }) => {
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTextRef.current) {
      gsap.to(scrollTextRef.current, {
        x: () => `-${scrollTextRef.current.scrollWidth / speedFactor}px`,
        ease: "none",
        scrollTrigger: {
          trigger: scrollTextRef.current,
          start: "top 100%",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [speedFactor]);

  return (
    <div className="relative w-full h-[33vh] overflow-hidden bg-black flex items-center justify-start">
      <div
        ref={scrollTextRef}
        className="text-white whitespace-nowrap text-[8vw] md:text-[12vw] uppercase tracking-tighter"
      >
        {text} &nbsp; {text} &nbsp; {text} &nbsp;
      </div>
    </div>
  );
};

export default HorizontalText;
