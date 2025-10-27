'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ARCHIVE', href: '/archive' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[100%] bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-medium text-black tracking-tight hover:opacity-70 transition-opacity"
        >
          Anthony Thach
        </Link>

        {/* Navigation Links */}
        <div className="flex justify-between w-1/2">
          {links.map((link) => {
            const isHovered = hovered === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative font-['Fragment_Mono'] text-xs link-underline transition-colors duration-300 ${
                  isHovered || hovered === null
                    ? 'text-black'
                    : 'text-black/20'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
