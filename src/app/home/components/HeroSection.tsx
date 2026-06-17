import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen min-h-[600px] overflow-hidden bg-saddle">
      {/* Full-bleed photo — no overlay gradient per brief */}
      <Image
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1f1c21607-1772058359943.png"
        alt="Three horses silhouetted mid-walk through knee-high grass at early morning blue-gold light, a lone rider in a worn hat sitting easy in the saddle, soft ridgeline in the distance"
        fill
        priority
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 40%' } as React.CSSProperties} />
      

      {/* Subtle bottom vignette — just enough to make text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(30,14,6,0.55) 0%, rgba(30,14,6,0.08) 35%, transparent 60%)'
        }} />
      

      {/* Ranch name — lower left, stamped serif */}
      <div className="absolute bottom-10 left-8 md:left-12">
        <p
          className="text-parchment/50 font-sans text-xs tracking-stamp uppercase mb-2"
          style={{ letterSpacing: '0.22em' }}>
          
          Est. 1974 · High Country Ranch
        </p>
        <h1
          className="font-serif text-parchment leading-tightest"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            textShadow: '0 2px 24px rgba(30,14,6,0.4)'
          }}>
          
          Bridle
        </h1>
        <p
          className="text-parchment/60 font-sans text-xs mt-3 font-light max-w-xs leading-relaxed">
          
          Where the land does the talking.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-2">
        <div
          className="w-px h-12 bg-parchment/30 relative overflow-hidden">
          
          <div
            className="absolute top-0 left-0 w-full bg-parchment/70"
            style={{
              height: '40%',
              animation: 'scrollLine 2s cubic-bezier(0.4,0,0.2,1) infinite'
            }} />
          
        </div>
        <span className="text-parchment/40 font-sans text-xs tracking-stamp uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </header>);

}