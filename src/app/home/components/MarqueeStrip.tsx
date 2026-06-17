'use client';

import React from 'react';

const items = [
  'Skin Fades',
  '·',
  'Trail Rides',
  '·',
  'Canyon Crossings',
  '·',
  'Bonfire Nights',
  '·',
  'Spring Foaling',
  '·',
  'Cattle Work',
  '·',
  'Autumn Color',
  '·',
  'Barn Warmth',
  '·',
  'Honest Land',
  '·',
  'Real Horses',
  '·',
];

export default function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap border-y py-3"
      style={{
        borderColor: 'rgba(107,112,92,0.2)',
        backgroundColor: 'var(--parchment-dark)',
      }}
    >
      <div className="inline-flex animate-marquee">
        {[...items, ...items]?.map((item, i) => (
          <span
            key={i}
            className="font-serif text-sm px-5"
            style={{
              color: item === '·' ? 'var(--sage)' : 'var(--saddle)',
              fontStyle: item === '·' ? 'normal' : 'italic',
              fontWeight: 300,
              letterSpacing: item === '·' ? '0' : '0.02em',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}