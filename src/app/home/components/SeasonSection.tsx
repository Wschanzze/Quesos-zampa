'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const seasons = [
{
  name: 'Spring',
  marker: 'March – May',
  headline: 'The foals find their legs in the same mud the creek left behind.',
  body: 'Pastures green up fast after snowmelt. Mares foal in the quiet hours before dawn. The air smells like wet earth and new beginnings. Ride out to the lower meadow and watch the herd at their most unhurried.',
  image: "https://images.unsplash.com/photo-1688024777263-ae05c63a8029",
  imageAlt: 'Green spring meadow with horses grazing, foal standing near its mother, soft morning light',
  badge: 'Foaling Season'
},
{
  name: 'Summer',
  marker: 'June – August',
  headline: 'Cattle don\'t care about the heat. Neither do the riders who earn their respect.',
  body: 'The big work happens now — moving cattle between pastures, mending fence lines, early morning drives before the sun climbs. Join the working crew or ride the high country trails where the air stays cool and the views go on forever.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_168f469ee-1772058357791.png",
  imageAlt: 'Wide high country landscape with cattle and riders on summer trail, golden light',
  badge: 'Cattle Work'
},
{
  name: 'Autumn',
  marker: 'September – November',
  headline: 'The aspens go gold and the horses know it — they move differently in October.',
  body: 'Peak trail season. The canyon walls are copper and amber, the light is low and golden all day, and the crowds are gone. Ride through aspen groves that sound like rain when the wind moves through them. This is the season most guests come back for.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1edfb7500-1772058357763.png",
  imageAlt: 'Autumn aspen grove trail ride with golden leaves and horses, canyon walls in background',
  badge: 'Peak Color'
},
{
  name: 'Winter',
  marker: 'December – February',
  headline: 'Snow quiets the whole ranch to a hush that\'s hard to find anywhere else.',
  body: 'The barn is warm and smells of hay and horses. Rides go out in the cold clear air — hoofprints in fresh snow, breath steaming, the world simplified to white and blue. Evenings by the fire with cast iron on the stove and no reason to be anywhere else.',
  image: "https://images.unsplash.com/photo-1548956638-60acbad1d688",
  imageAlt: 'Winter ranch scene with horses in snowy pasture, warm barn light glowing from inside',
  badge: 'Barn Season'
}];


export default function SeasonSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="seasons" className="py-20 md:py-28 px-6 md:px-10 bg-parchment">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12 reveal-up">
          <div className="ornament mb-6">
            <span>The Ranch Year</span>
          </div>
          <h2
            className="font-serif text-saddle leading-tightest"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}>
            
            Every season earns<br />
            <span className="italic" style={{ color: 'var(--rust)' }}>its own kind of beauty.</span>
          </h2>
        </div>

        {/* Season tabs */}
        <div className="flex items-center gap-8 mb-10 border-b" style={{ borderColor: 'rgba(59,35,20,0.12)' }}>
          {seasons?.map((s, i) =>
          <button
            key={s?.name}
            className={`season-tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}>
            
              {s?.name}
            </button>
          )}
        </div>

        {/* Season panels */}
        {seasons?.map((s, i) =>
        <div key={s?.name} className={`season-panel ${active === i ? 'active' : ''}`}>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                src={s?.image}
                alt={s?.imageAlt}
                fill
                className="w-full h-full object-cover photo-reveal" />
              
                {/* Season badge */}
                <div
                className="absolute top-4 left-4 px-3 py-1.5"
                style={{
                  background: 'rgba(107,112,92,0.85)',
                  backdropFilter: 'blur(8px)'
                }}>
                
                  <span className="font-sans text-parchment/90" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    {s?.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center py-4">
                <p
                className="font-sans mb-4"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>
                
                  {s?.marker}
                </p>
                <h3
                className="font-serif text-saddle mb-5 leading-snug"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', fontWeight: 400, fontStyle: 'italic' }}>
                
                  {s?.headline}
                </h3>
                <div className="rule-rust" />
                <p className="font-sans text-saddle/60 leading-relaxed mb-8" style={{ fontSize: '0.9rem', fontWeight: 300 }}>
                  {s?.body}
                </p>
                <a
                href="https://fareharbor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve self-start">
                
                  Reserve Your Stay
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Season calendar link */}
        <div className="mt-12 text-center reveal-fade">
          <a href="#" className="rust-link font-sans text-sm font-medium tracking-wide">
            See the Season Calendar →
          </a>
        </div>
      </div>
    </section>);

}