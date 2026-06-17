'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const experiences = [
{
  id: 'families',
  label: 'Families',
  tagline: 'Pull them off the screens.',
  description: 'Three days is enough to reset a kid\'s whole sense of what\'s interesting. Horses, creek beds, campfire cooking, and the kind of tired that comes from being outside all day.',
  duration: '2–5 Night Stays',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f48a614-1772058357695.png",
  imageAlt: 'Family with children on horseback in green meadow, golden afternoon light, mountains in background',
  span: 'md:col-span-2 md:row-span-1',
  height: 'h-72 md:h-80'
},
{
  id: 'couples',
  label: 'Couples',
  tagline: 'An anniversary you\'ll actually remember.',
  description: 'Sunrise rides, private trail access, evenings by the fire. No itinerary. No agenda. Just the two of you and a landscape that makes conversation easy.',
  duration: 'Weekend & Weeklong',
  image: "https://images.unsplash.com/photo-1723581205548-7acce0249aa8",
  imageAlt: 'Two riders on horseback at sunset, silhouetted against orange sky over open rangeland',
  span: 'md:col-span-1 md:row-span-2',
  height: 'h-72 md:h-full'
},
{
  id: 'corporate',
  label: 'Corporate',
  tagline: 'Trust is learned from a 1,200-pound animal.',
  description: 'Horses read hesitation. They respond to calm, clear intention. Half a day in the round pen teaches leadership principles no whiteboard session ever could.',
  duration: 'Day Programs & Retreats',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17082a2a0-1772058359863.png",
  imageAlt: 'Group of people in western attire working with horses in a round pen, ranch setting',
  span: 'md:col-span-2 md:row-span-1',
  height: 'h-72 md:h-80'
}];


export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.reveal-up');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="experiences" className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: 'var(--cream)' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 reveal-up">
          <div className="ornament mb-6">
            <span>Who Comes Here</span>
          </div>
          <h2
            className="font-serif text-saddle leading-tightest"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}>
            
            Three kinds of people<br />
            <span className="italic" style={{ color: 'var(--rust)' }}>find what they need here.</span>
          </h2>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5" style={{ minHeight: '520px' }}>
          {experiences?.map((exp, i) =>
          <div
            key={exp?.id}
            className={`exp-card relative overflow-hidden ${exp?.span} reveal-up delay-${(i + 1) * 100}`}
            style={{ minHeight: '280px' }}>
            
              <div className={`relative w-full ${exp?.height}`} style={{ minHeight: '280px' }}>
                <Image
                src={exp?.image}
                alt={exp?.imageAlt}
                fill
                className="w-full h-full object-cover" />
              
                <div className="exp-card-overlay" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <p
                  className="font-sans text-parchment/60 mb-1"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  
                    {exp?.label} · {exp?.duration}
                  </p>
                  <h3
                  className="font-serif text-parchment mb-3 leading-snug"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 400, fontStyle: 'italic' }}>
                  
                    {exp?.tagline}
                  </h3>
                  <p
                  className="font-sans text-parchment/70 leading-relaxed mb-5 max-w-sm"
                  style={{ fontSize: '0.82rem', fontWeight: 300 }}>
                  
                    {exp?.description}
                  </p>
                  <a
                  href="https://fareharbor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-reserve-ghost"
                  style={{ fontSize: '0.6rem', padding: '0.6rem 1.3rem' }}>
                  
                    Reserve Your Stay
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}