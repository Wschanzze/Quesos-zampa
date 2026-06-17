'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 180);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '560px' }}>
      
      {/* Background image */}
      <Image
        src="https://img.rocket.new/generatedImages/rocket_gen_img_16d8d710b-1772058363581.png"
        alt="Bonfire at dusk on a ranch, cast iron cooking over open flame, stars beginning to appear in the darkening sky above open rangeland"
        fill
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 60%' } as React.CSSProperties} />
      

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(30,14,6,0.78) 0%, rgba(30,14,6,0.55) 50%, rgba(30,14,6,0.4) 100%)'
        }} />
      

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32"
        style={{ minHeight: '560px' }}>
        
        <p
          className="reveal-up font-sans text-parchment/50 mb-4"
          style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          
          Bridle Ranch · High Country
        </p>

        <h2
          className="reveal-up delay-100 font-serif text-parchment leading-tightest mb-6"
          style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            textShadow: '0 4px 32px rgba(20,8,2,0.5)'
          }}>
          
          The land is ready.<br />Are you?
        </h2>

        <p
          className="reveal-up delay-200 font-sans text-parchment/60 font-light max-w-md leading-relaxed mb-10"
          style={{ fontSize: '0.95rem' }}>
          
          Stays book fast in autumn and summer. Check availability and reserve your dates before the season fills.
        </p>

        <div className="reveal-up delay-300 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://fareharbor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve"
            style={{ fontSize: '0.7rem' }}>
            
            Reserve Your Stay
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#seasons"
            className="font-sans text-parchment/60 hover:text-parchment text-xs tracking-stamp uppercase transition-colors duration-300">
            
            See the Season Calendar
          </a>
        </div>

        {/* Stats row */}
        <div className="reveal-fade delay-500 mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-16 border-t pt-10" style={{ borderColor: 'rgba(242,232,213,0.15)' }}>
          {[
          { value: '50+', label: 'Years Working This Land' },
          { value: '12', label: 'Miles of Private Trail' },
          { value: '40+', label: 'Horses in the Herd' }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <p
              className="font-serif text-parchment"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300, letterSpacing: '-0.02em' }}>
              
                {stat.value}
              </p>
              <p
              className="font-sans text-parchment/40 mt-1"
              style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              
                {stat.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}