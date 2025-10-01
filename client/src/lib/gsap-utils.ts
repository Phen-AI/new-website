import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAP(callback: () => void, dependencies: any[] = []) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      callback();
    }
  }, dependencies);
}

export function useScrollTrigger(
  ref: React.RefObject<HTMLElement>,
  animation: any,
  options: any = {}
) {
  useEffect(() => {
    if (!ref.current || !window.gsap || !window.ScrollTrigger) return;

    const trigger = window.ScrollTrigger.create({
      trigger: ref.current,
      ...options,
      animation,
    });

    return () => trigger.kill();
  }, [ref, animation, options]);
}

export const checkReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
