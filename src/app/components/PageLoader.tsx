'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check sessionStorage to see if loader ran before
    const hasLoaded = sessionStorage.getItem('pageLoaded');
    if (!hasLoaded) {
      setLoading(true);
      sessionStorage.setItem('pageLoaded', 'true');
    } else {
      // If already loaded, make content visible immediately
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
    }
  }, []);

  useEffect(() => {
    if (!loading) return;
    if (!loaderRef.current || !logoRef.current || !contentRef.current) return;

    // Start content invisible & offset down
    gsap.set(contentRef.current, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // Smooth scale animation
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 1, ease: 'power2.out' }
    )
      .to(logoRef.current, { scale: 1, duration: 0.5, ease: 'power2.out' })
      // Slide loader off screen
      .to(loaderRef.current, { y: '-100%', duration: 1, ease: 'power2.inOut' })
      // Slide content up AFTER loader moves
      .to(contentRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5');
  }, [loading]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
        >
          <img
            ref={logoRef}
            src="/img/logo_black.png"
            alt="Logo"
            className="w-32 md:w-48 lg:w-56"
          />
        </div>
      )}

      {/* Page Content */}
      <div ref={contentRef}>{children}</div>
    </>
  );
}
