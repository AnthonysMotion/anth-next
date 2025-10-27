'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus, FiGrid } from 'react-icons/fi';
import gsap from 'gsap';

type ProjectProps = {
  title: string;
  type: string;
  year: string;
  description: string;
  images: string[];
};

export default function Project({ title, type, year, description, images }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [gridCols, setGridCols] = useState(4);

  const descRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);

  // Animate description and + → - toggle
  useEffect(() => {
    if (descRef.current) {
      if (isOpen) {
        gsap.to(descRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      } else {
        gsap.to(descRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        });
      }
    }

    if (plusRef.current) {
      gsap.to(plusRef.current, {
        rotation: isOpen ? 45 : 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  // Map column number to Tailwind grid class
  const getGridColsClass = () => {
    switch (gridCols) {
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
      default:
        return 'grid-cols-4';
    }
  };

  return (
    <div className="w-full mb-16 relative bg-white px-8">
      {/* Top row: Text + Toggle + Grid icons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <span className="text-black font-medium">{title}, </span>
            <span className="text-black/50">{type}, </span>
            <span className="text-black/50">{year}</span>
          </div>

          {/* Toggle button next to text */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-lg p-1 hover:bg-black/10 transition"
          >
            <div ref={plusRef}>{isOpen ? <FiMinus /> : <FiPlus />}</div>
          </button>
        </div>

        {/* Grid size icons */}
        <div className="flex space-x-2">
          {[2, 3, 4].map((cols) => (
            <button
              key={cols}
              onClick={() => setGridCols(cols)}
              className={`p-1 text-black rounded-full hover:bg-black/10 transition ${
                gridCols === cols ? 'ring-2 ring-black' : ''
              }`}
            >
              <FiGrid className="text-sm" />
            </button>
          ))}
        </div>
      </div>

      {/* Description below text (GSAP animated) */}
      <div
        ref={descRef}
        className="overflow-hidden mt-2 p-2"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="text-black text-sm">{description}</p>
      </div>

      {/* Images grid (Framer Motion animated) */}
      <motion.div
        className={`grid gap-4 mt-4 ${getGridColsClass()}`}
        layout
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden"
            layout
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img src={src} alt={`${title}-${idx}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
