// components/Footer.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  const socialLinks = [
    { name: 'X', href: 'https://twitter.com/anthonysmotion' },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/anthonythach/' },
    { name: 'INSTAGRAM', href: 'https://instagram.com/anthonysmotion' },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-xs font-['Fragment_Mono'] text-black/50 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Anthony Thach. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center md:justify-end">
          {socialLinks.map((link) => {
            const isHovered = hovered === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative font-['Fragment_Mono'] text-xs transition-colors duration-300 ${
                  isHovered || hovered === null
                    ? 'text-black'
                    : 'text-black/30'
                } hover:opacity-70`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
