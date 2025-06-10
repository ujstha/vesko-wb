import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimationProps {
  trigger?: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  markers?: boolean;
}

export const useGSAP = (props?: GSAPAnimationProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      // Default scroll trigger configuration
      ScrollTrigger.defaults({
        trigger: props?.trigger || elementRef.current,
        start: props?.start || "top 80%",
        end: props?.end || "bottom 20%",
        toggleActions: props?.toggleActions || "play none none reverse",
        markers: props?.markers || false,
      });
    }, elementRef);

    return () => ctx.revert();
  }, [props]);

  return elementRef;
};

// Common animation presets
export const fadeInUp = {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
};

export const fadeIn = {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
};

export const scaleIn = {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
};

// 3D transform presets
export const perspective3D = {
  perspective: 1000,
  transformStyle: "preserve-3d",
};

export const rotate3D = {
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  duration: 1,
  ease: "power2.out",
};
