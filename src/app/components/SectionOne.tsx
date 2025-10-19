"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
    const [aucklandTime, setAucklandTime] = useState("");
    const textRef = useRef<HTMLDivElement>(null);

    const textContent =
        "A New Zealand-based designer and full-stack developer, crafting sleek digital experiences for the world's biggest and most ambitious brands.";

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const aucklandOffset = 13 * 60;
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const auckland = new Date(utc + aucklandOffset * 60000);

            const hours = auckland.getHours().toString().padStart(2, "0");
            const minutes = auckland.getMinutes().toString().padStart(2, "0");
            const seconds = auckland.getSeconds().toString().padStart(2, "0");

            setAucklandTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            const words = textRef.current.textContent?.split(" ") || [];
            textRef.current.innerHTML = words
                .map((word) => `<span class="word inline-block mr-2">${word}</span>`)
                .join("");

            gsap.from(".word", {
                y: 50,
                opacity: 0,
                stagger: 0.05,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "top 40%",
                },
            });
        }
    }, []);

    return (
        <section className="w-full h-[70vh] flex border-b border-gray-300 pt-20 bg-white">
            {/* Left Half */}
            <div className="w-2/5 bg-white relative">
                <div className="absolute top-4 left-4 text-sm text-black font-mono px-6 md:px-4">
                    ■ Auckland {aucklandTime} (GMT +13)
                </div>
            </div>

            {/* Right Half */}
            <div className="bg-white w-3/5 flex flex-col  px-6 md:px-8 py-4">
                {/* Text */}
                <p
                    ref={textRef}
                    className="text-black text-4xl md:text-6xl"
                >
                    {textContent}
                </p>
            </div>
        </section>
    );
};

export default SectionOne;
