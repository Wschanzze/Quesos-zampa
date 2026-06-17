'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-saddle/90 backdrop-blur-sm border-b border-white/5' :'py-6 bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <AppLogo
          text="Bridle"
          size={28}
          className="text-parchment"
        />
      </a>
      {/* Nav links — desktop */}
      <div className="hidden md:flex items-center gap-8 text-parchment/70">
        {['Experiences', 'Seasons', 'About']?.map((item) => (
          <a
            key={item}
            href={`#${item?.toLowerCase()}`}
            className="text-xs font-medium tracking-stamp uppercase hover:text-parchment transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      {/* CTA */}
      <a
        href="https://fareharbor.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-reserve text-xs"
        style={{ padding: '0.6rem 1.4rem' }}
      >
        Reserve Your Stay
      </a>
    </nav>
  );
}
