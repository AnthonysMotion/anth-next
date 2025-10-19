"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image
                        src="/img/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex absolute top-0 right-0 items-start gap-36 px-6 md:px-12 py-4 justify-end">
                {/* Menu Links */}
                <div className="flex font-bold text-3xl space-x-2">
                    <Link href="#" className="hover:opacity-70 transition-opacity">ABOUT,</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">WORK,</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">CONTACT</Link>
                </div>


                {/* Tagline */}
                <div className="flex flex-col text-sm md:text-base tracking-tight">
                    <span className="inline-block leading-none font-mono">■ CREATIVE DESIGN</span>
                    <span className="inline-block leading-none font-mono">DEVELOPMENT ■</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 text-sm md:text-base">
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <FaInstagram size={20} />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <FaLinkedin size={20} />
                    </Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">
                        <FaYoutube size={20} />
                    </Link>
                </div>
            </div>



            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col w-6 h-6 justify-between items-center group"
                >
                    <span className={`h-0.5 w-full bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-full bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-full bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">
                    <Link href="#" className="hover:opacity-70 transition-opacity">STUDIO</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">WORK</Link>
                    <Link href="#" className="hover:opacity-70 transition-opacity">CONTACT</Link>

                    <p className="text-center font-mono">CREATIVE DESIGN</p>
                    <p className="text-center font-mono">DEVELOPMENT</p>

                    <div className="flex gap-2">
                        <Link href="#" className="hover:opacity-70 transition-opacity">IG</Link>
                        <span>,</span>
                        <Link href="#" className="hover:opacity-70 transition-opacity">LI</Link>
                        <span>,</span>
                        <Link href="#" className="hover:opacity-70 transition-opacity">YT</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
