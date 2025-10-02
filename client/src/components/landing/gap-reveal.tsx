import { useRef } from "react";
import { useGSAP } from "@/lib/gsap-utils";

export default function GapReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (
      !window.gsap ||
      !window.ScrollTrigger ||
      !sectionRef.current ||
      !bgRef.current ||
      !textRef.current
    ) {
      return;
    }

    const timeline = window.gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    timeline
      .fromTo(
        bgRef.current,
        { scale: 0.6, opacity: 0.25 },
        { scale: 1, opacity: 0.85, ease: "power2.out" },
        0
      )
      .to(
        bgRef.current,
        { scale: 1.2, opacity: 1, ease: "power2.inOut" },
        0.45
      );

    if (leftTextRef.current && rightTextRef.current) {
      timeline.fromTo(
        leftTextRef.current,
        { x: 0, opacity: 1 },
        { x: -220, opacity: 1, ease: "power2.out" },
        0
      );

      timeline.fromTo(
        rightTextRef.current,
        { x: 0, opacity: 1 },
        { x: 220, opacity: 1, ease: "power2.out" },
        0
      );
    }

    timeline.fromTo(
      textRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1.05, ease: "power2.out" },
      0.35
    );

    const trigger = timeline.scrollTrigger;

    return () => {
      trigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-20 mb-16">
          <div className="flex items-center justify-center gap-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight uppercase">
            <span ref={leftTextRef} className="inline-block">
              We are
            </span>
            <span ref={rightTextRef} className="inline-block">
              Phen AI
            </span>
          </div>
        </div>
      </div>
      <div
        ref={sectionRef}
        className="gap-reveal relative mx-auto w-full max-w-7xl"
      >
        <div
          ref={bgRef}
          className="gap-reveal-bg rounded-[3rem] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')",
          }}
        ></div>
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white z-20 whitespace-nowrap drop-shadow-xl"
        >
          Not just an AI company
        </div>
      </div>
    </section>
  );
}
