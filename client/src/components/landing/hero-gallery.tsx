import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { checkReducedMotion } from "@/lib/gsap-utils";

const heroTexts = [
  "AI engineered for impact",
  "VR/AR that inspires learning",
  "On-prem AI for compliance",
  "Practical AI, predictable results",
  "Vision systems that matter",
  "Data pipelines that scale",
];



const IMAGES = [
  { front: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=640&fit=crop", back: "AI & Machine Learning" },
  { front: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=640&h=640&fit=crop", back: "VR/AR Experiences" },
  { front: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=640&fit=crop", back: "Data Engineering" },
  { front: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=640&h=640&fit=crop", back: "Computer Vision" },
  { front: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop", back: "On-Prem AI Solutions" },
  { front: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=640&h=640&fit=crop", back: "Analytics Dashboards" },
  { front: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop", back: "On-Prem AI Solutions" },
  { front: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=640&h=640&fit=crop", back: "Analytics Dashboards" },
];

export default function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const reducedMotion = checkReducedMotion();

  // Headline auto-cycler
  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setFlippedCard(currentIndex);
      setTimeout(() => {
        setCurrentIndex((p) => (p + 1) % heroTexts.length);
        setFlippedCard(null);
      }, 800);
    }, 4000);
    return () => clearInterval(id);
  }, [currentIndex, reducedMotion]);

  // ----- Orbit ring rotation (keeps tiles upright via counter-rotation) -----
  const ringRotation = useMotionValue(0);
  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(ringRotation, 360, {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [ringRotation, reducedMotion]);

  // Layout constants
  const CARD = 120;          // tile size in px
  const RADIUS = 260;        // distance from center in px
  const CENTER_FRAME_W = "min(1100px, 95vw)"; // keeps ring nicely within hero

  // Precompute base angles for each tile
  const angles = IMAGES.map((_, i) => (i / IMAGES.length) * 360); // 0..360

  return (
    <div className="relative mx-auto mb-16 w-full max-w-6xl" style={{ height: 640 }}>
      {/* Center Headline + CTAs (above tiles) */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6 text-4xl font-serif font-bold leading-tight sm:text-4xl lg:text-4xl"
          >
            {heroTexts[currentIndex]}
          </motion.h1>
        </AnimatePresence>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-primary px-3 py-2 font-semibold text-primary-foreground shadow-sm ring-1 ring-black/5 transition-all hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            data-testid="button-schedule-consultation"
          >
            Schedule a Consultation
          </a>
          <a
            href="/industries"
            className="rounded-full bg-white/60 px-3 py-2 font-semibold ring-1 ring-black/5 backdrop-blur transition-all hover:scale-105 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            data-testid="button-explore-work"
          >
            Explore Our Work
          </a>
        </div>
      </div>

      {/* Tiles orbit layer behind text */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Centered frame for predictable geometry */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: `calc(${CENTER_FRAME_W})`, height: 620 }}
        >
          {/* Rotating RING (parent) */}
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 0,
              height: 0,
              rotate: ringRotation, // ring rotation
            }}
          >
            {/* Tiles positioned around the ring */}
            {IMAGES.map((img, i) => {
              const baseAngle = angles[i]; // degrees
              // Child wrapper: place at angle, translate outwards
              const wrapperStyle = {
                position: "absolute" as const,
                left: "0px",
                top: "0px",
                transform: `rotate(${baseAngle}deg) translateX(${RADIUS}px)`,
                transformOrigin: "0 0",
              };
              // Counter-rotate the actual card so it stays upright
              const counterRotate = useTransform(ringRotation, (v) => -v - baseAngle);

              return (
                <div key={i} style={wrapperStyle}>
                  <motion.div style={{ rotate: counterRotate }}>
                    <div
                      className="overflow-hidden rounded-[28px] ring-1 ring-black/10 shadow-md bg-white/40 backdrop-blur"
                      style={{ width: CARD, height: CARD }}
                    >
                      <div
                        className="flip-card-inner"
                        style={{
                          transform:
                            flippedCard === i ? "rotateY(180deg)" : "rotateY(0deg)",
                          transformStyle: "preserve-3d",
                          transition: "transform 0.6s",
                          height: "100%",
                        }}
                      >
                        <div
                          className="flip-card-front glass-strong"
                          style={{ backfaceVisibility: "hidden", height: "100%" }}
                        >
                          <img
                            src={img.front}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div
                          className="flip-card-back glass-strong flex h-full items-center justify-center p-4"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <p className="text-center text-sm font-medium">{img.back}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {heroTexts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary" : "bg-muted"}`}
              aria-label={`Slide ${idx + 1}`}
              data-testid={`dot-slide-${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
