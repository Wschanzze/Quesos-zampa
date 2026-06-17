'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './home/components/HeroSection';
import MarqueeStrip from './home/components/MarqueeStrip';
import MomentSection from './home/components/MomentSection';
import SeasonSection from './home/components/SeasonSection';
import ExperienceSection from './home/components/ExperienceSection';
import FinalCTA from './home/components/FinalCTA';

const moments = [
{
  time: 'Dawn · 5:42 am',
  caption: 'Steam rises off their backs before the sun clears the ridge. This is the hour the ranch belongs to the horses.',
  imageSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_102667f84-1772058362260.png",
  imageAlt: 'Horses in early morning mist with steam rising from their backs, golden blue dawn light, rider saddling up in foreground',
  imagePosition: 'center 30%'
},
{
  time: 'Midday · 12:18 pm',
  caption: 'The canyon narrows and the river is cold. The horse doesn\'t hesitate. You learn something about hesitation.',
  imageSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1d083a522-1772058358821.png",
  imageAlt: 'Trail ride through canyon switchbacks, riders crossing shallow river, red rock walls, midday light filtering through',
  imagePosition: 'center 50%'
},
{
  time: 'Evening · 8:55 pm',
  caption: 'The cast iron is hot and the stars are so thick they look fake. Nobody reaches for their phone.',
  imageSrc: "https://images.unsplash.com/photo-1567463330419-d65c673554c2",
  imageAlt: 'Bonfire at night on a ranch with people gathered around, cast iron cooking, stars visible in the dark sky above',
  imagePosition: 'center 40%'
}];


export default function RootPage() {
  useEffect(() => {
    // Global scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left')?.forEach((el) => {
      observer?.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <main className="bg-parchment overflow-x-hidden">
      <Header />
      {/* 1. Hero — full-bleed cinematic photo */}
      <HeroSection />
      {/* Marquee strip */}
      <MarqueeStrip />
      {/* 2–4. Three moment sections — morning, trail, evening */}
      {moments?.map((moment, i) =>
      <MomentSection
        key={moment?.time}
        time={moment?.time}
        caption={moment?.caption}
        imageSrc={moment?.imageSrc}
        imageAlt={moment?.imageAlt}
        imagePosition={moment?.imagePosition}
        index={i} />

      )}
      {/* Parchment interlude between moments and seasons */}
      <div className="py-16 md:py-20 px-6 md:px-10 text-center" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-xl mx-auto">
          <div className="ornament mb-8 reveal-fade">
            <span>Bridle Ranch</span>
          </div>
          <p
            className="font-serif text-saddle reveal-up"
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              letterSpacing: '-0.01em'
            }}>
            
            "The land doesn't rush. Neither do we. Come for a weekend — most guests start thinking about coming back before they've finished their first ride."
          </p>
          <p className="font-sans text-sage text-xs tracking-stamp uppercase mt-6 reveal-up delay-200">
            — Margaret & Dale Whitfield, Proprietors
          </p>
        </div>
      </div>
      {/* 5. Seasonal rotation */}
      <SeasonSection />
      {/* 6. Experience types — bento grid */}
      <ExperienceSection />
      {/* 7. Final CTA */}
      <FinalCTA />
      <Footer />
    </main>);

}