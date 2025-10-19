import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <>
            <nav className="flex justify-between items-start p-6 md:p-8 fixe z-10">
                <div className="flex-1">
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

                <div className="flex items-start gap-8 md:gap-16">
                    <div className="text-sm md:text-base font-bold">
                        <a href="#" className="hover:opacity-70 transition-opacity">STUDIO</a>
                        <span>, </span>
                        <a href="#" className="hover:opacity-70 transition-opacity">WORK</a>
                        <span>, </span>
                        <a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a>
                    </div>

                    <div className="text-sm">
                        <div className="mb-1">
                            <p className="block">CREATIVE DESIGN</p>
                        </div>
                        <div>
                            <p className="block">DEVELOPMENT</p>
                        </div>
                    </div>

                    <div className="text-sm md:text-base">
                        <a href="#" className="hover:opacity-70 transition-opacity">IG</a>
                        <span className="mx-1">,</span>
                        <a href="#" className="hover:opacity-70 transition-opacity">LI</a>
                        <span className="mx-1">,</span>
                        <a href="#" className="hover:opacity-70 transition-opacity">YT</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
