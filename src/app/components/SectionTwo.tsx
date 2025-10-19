"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading text into words
      if (headingRef.current) {
        const words = headingRef.current.textContent?.split(" ") || [];
        headingRef.current.innerHTML = words
          .map(
            (word) =>
              `<span class="word inline-block mr-2">${word}</span>`
          )
          .join(" ");
      }

      // Animate each word like SectionOne
      gsap.from(".word", {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 40%",
        },
      });

      // Animate stat boxes in afterward
      gsap.from(".stat-box", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white h-[100vh] text-black py-20 md:py-32 overflow-hidden"
    >
      <div className="px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20 md:mb-32 section-header">
          {/* Left side - Let's talk */}
          <div className="w-full md:w-[40%]">
            <div className="flex items-center gap-3">
              <span className="text-sm text-black font-mono">
                ■ LET'S TALK
              </span>
            </div>
          </div>

          {/* Right side - Headline */}
          <div className="w-full md:w-[60%]">
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
              My work speaks through numbers. Here's what I've achieved so far.
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div className="stat-box">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              2
            </h3>
            <h4 className="text-xl md:text-2xl font-normal mb-3">
              Awards Won
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Recognized for excellence in design and development.
            </p>
          </div>

          <div className="stat-box">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              30+
            </h3>
            <h4 className="text-xl md:text-2xl font-normal mb-3">
              Clients served
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              From startups to giants - each treated like my only one.
            </p>
          </div>

          <div className="stat-box">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              100%
            </h3>
            <h4 className="text-xl md:text-2xl font-normal mb-3">
              Success Score
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              All 5-star reviews. No compromises. No "just okay."
            </p>
          </div>

          <div className="stat-box">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              8+
            </h3>
            <h4 className="text-xl md:text-2xl font-normal mb-3">
              Years of expertise
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Deep experience in UX, branding, and growth-driven design
              for real-world products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
