import React from 'react';
import AppLogo from './ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-saddle/10 py-10 px-6 md:px-10 bg-parchment">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-1">
          <AppLogo text="Bridle" size={24} className="text-saddle" />
          <p className="text-xs text-sage font-light tracking-wide mt-1">
            High country. Honest land. Real horses.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {[
            { label: 'Experiences', href: '#experiences' },
            { label: 'Season Calendar', href: '#seasons' },
            { label: 'About', href: '#about' },
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
          ]?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-xs font-medium text-saddle/50 hover:text-saddle tracking-wide uppercase transition-colors duration-300"
            >
              {link?.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-saddle/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-saddle/40 tracking-wide">
          © 2026 Bridle Ranch. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bridle on Instagram"
            className="text-saddle/40 hover:text-rust transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bridle on Facebook"
            className="text-saddle/40 hover:text-rust transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
