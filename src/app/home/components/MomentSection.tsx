'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface MomentSectionProps {
  time: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  index: number;
}

export default function MomentSection({
  time,
  caption,
  imageSrc,
  imageAlt,
  imagePosition = 'center center',
  index,
}: MomentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-linked parallax on image
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const offset = (progress - 0.5) * 80;
      imgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reveal caption on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && captionRef.current) {
            captionRef.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    if (captionRef.current) observer.observe(captionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(480px, 80vh, 820px)' }}
    >
      {/* Parallax image container */}
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{ top: '-60px', bottom: '-60px' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition } as React.CSSProperties}
        />
      </div>

      {/* Caption overlay */}
      <div className="caption-overlay">
        <div
          ref={captionRef}
          className="reveal-up max-w-2xl"
        >
          {/* Time marker */}
          <p
            className="font-sans text-parchment/50 mb-3"
            style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          >
            {time}
          </p>

          {/* Field journal caption */}
          <p
            className="font-serif text-parchment leading-snug"
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 2.1rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              textShadow: '0 2px 12px rgba(20,8,2,0.4)',
            }}
          >
            {caption}
          </p>

          {/* Reserve button */}
          <div className="mt-6">
            <a
              href="https://fareharbor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve-ghost"
              style={{ fontSize: '0.65rem' }}
            >
              Reserve Your Stay
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Index marker */}
      <div className="absolute top-8 right-8 md:right-12">
        <span
          className="font-sans text-parchment/25"
          style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          0{index + 1}
        </span>
      </div>
    </section>
  );
}