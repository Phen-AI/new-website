import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { checkReducedMotion } from "@/lib/gsap-utils";

const heroTexts = [
  "AI, engineered for impact.",
  "VR/AR that teaches and persuades.",
  "On-prem intelligence for regulated industries.",
  "Confident AI. Practical outcomes.",
  "Vision systems that see what matters.",
  "Data pipelines that scale with you.",
];

const galleryImages = [
  {
    front: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=500&fit=crop",
    back: "AI & Machine Learning",
  },
  {
    front: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=400&h=500&fit=crop",
    back: "VR/AR Experiences",
  },
  {
    front: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop",
    back: "Data Engineering",
  },
  {
    front: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=500&fit=crop",
    back: "Computer Vision",
  },
  {
    front: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=500&fit=crop",
    back: "On-Prem AI Solutions",
  },
  {
    front: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=500&fit=crop",
    back: "Custom Automation",
  },
];

export default function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const reducedMotion = checkReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setFlippedCard(currentIndex);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setFlippedCard(null);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, reducedMotion]);

  const positions = [
    { rotate: 0, translateY: -280 },
    { rotate: 60, translateY: -280 },
    { rotate: 120, translateY: -280 },
    { rotate: 180, translateY: -280 },
    { rotate: 240, translateY: -280 },
    { rotate: 300, translateY: -280 },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16" style={{ height: "600px" }}>
      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-lg px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
          >
            {heroTexts[currentIndex]}
          </motion.h1>
        </AnimatePresence>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            data-testid="button-schedule-consultation"
          >
            Schedule a Consultation
          </a>
          <a
            href="/industries"
            className="px-8 py-3.5 glass border border-border text-foreground rounded-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            data-testid="button-explore-work"
          >
            Explore Our Work
          </a>
        </div>
      </div>

      {/* Orbiting Cards */}
      <div className="relative w-full h-full">
        {galleryImages.map((image, index) => {
          const pos = positions[index];
          return (
            <div
              key={index}
              className="flip-card absolute"
              style={{
                width: "180px",
                height: "240px",
                top: "50%",
                left: "50%",
                marginLeft: "-90px",
                marginTop: "-120px",
                transform: `rotate(${pos.rotate}deg) translateY(${pos.translateY}px) rotate(-${pos.rotate}deg)`,
              }}
            >
              <div
                className={`flip-card-inner ${
                  flippedCard === index ? "transform rotateY-180" : ""
                }`}
                style={{
                  transform: flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div className="flip-card-front glass-strong">
                  <img
                    src={image.front}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flip-card-back glass-strong flex items-center justify-center p-4">
                  <p className="text-sm font-medium text-center">{image.back}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroTexts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            aria-label={`Slide ${index + 1}`}
            data-testid={`dot-slide-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
