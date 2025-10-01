import { useRef, useEffect } from "react";
import { useGSAP } from "@/lib/gsap-utils";

export default function GapReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!window.gsap || !sectionRef.current || !bgRef.current || !textRef.current) return;

    window.gsap.to(bgRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    window.gsap.to(textRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="relative py-24">
      <div
        ref={sectionRef}
        className="gap-reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold">
            We are <span className="inline-block mx-4">(</span>
            <span className="inline-block mx-4">)</span> Phen AI
          </h2>
        </div>
        <div
          ref={bgRef}
          className="gap-reveal-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')",
          }}
        ></div>
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-4xl font-serif font-semibold text-white z-20 whitespace-nowrap"
        >
          Not just an AI company
        </div>
      </div>
    </section>
  );
}
