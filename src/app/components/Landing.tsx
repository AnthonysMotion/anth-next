"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/app/components/nav";

export default function Landing() {
    const bgRef = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * 0.5); // adjust 0.5 for slower/faster scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative">

            {/* Parallax Background */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div
                    ref={bgRef}
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/img/work1.jpg')",
                        transform: `translateY(${offsetY}px)`,
                        willChange: "transform",
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Hero Content */}
            <main className="flex flex-col justify-end px-6 md:px-8 h-screen relative z-10">
                <div className="max-w-2xl mb-1/2">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        Born to Create
                    </h2>
                    <p className="text-xl md:text-2xl font-light font-serif mb-16 tracking-tight">
                        Brand. Design. Development.
                    </p>
                </div>

                <div className="mt-32 md:mt-48 max-w-md">
                    <p className="text-sm md:text-base tracking-tight">
                        As an award-winning designer,
                    </p>
                    <p className="text-sm md:text-base pb-5 tracking-tight">
                        <span className="font-bold">ANTHONY THACH</span> creates influential brands and sets international standards for web development.
                    </p>
                </div>

                {/* Bottom Rectangle */}
                <div className="absolute bottom-0 right-0 w-3/5 h-20 backdrop-blur-md flex items-center justify-between px-6 md:px-12">
                    {/* Left Text */}
                    <div className="text-white text-sm md:text-base font-light">
                        ■ Latest work
                    </div>

                    {/* Center Text */}
                    <div className="text-white text-2xl font-bold">
                        TEAM PWR
                    </div>

                    <div className="text-white text-md">
                        Motion Design, Video Editing
                    </div>

                    {/* Right Button */}
                    <button className="border border-1 border-white flex items-center gap-2 text-white font-bold px-9 py-1 cursor-pointer">
                        VIEW
                        <span className="inline-block transform rotate-45 border-t-2 border-r-2 border-white w-2 h-2"></span>
                    </button>
                </div>

            </main>
        </div>
    );
}
