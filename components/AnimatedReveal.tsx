"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: AnimatedRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || shouldReduceMotion || !("IntersectionObserver" in window)) {
      window.requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const revealIfNearViewport = () => {
      const rect = node.getBoundingClientRect();
      const revealPoint = window.innerHeight * 0.88;

      if (rect.top <= revealPoint && rect.bottom >= 0) {
        setIsVisible(true);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    observer.observe(node);

    window.requestAnimationFrame(() => {
      setCanAnimate(true);
      window.requestAnimationFrame(revealIfNearViewport);
    });

    const onScrollOrResize = () => {
      if (revealIfNearViewport()) {
        window.removeEventListener("scroll", onScrollOrResize);
        window.removeEventListener("resize", onScrollOrResize);
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [shouldReduceMotion]);

  const style = {
    "--reveal-y": `${y}px`,
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <motion.div
      ref={ref}
      style={style}
      className={`${className} reveal-motion ${canAnimate ? "can-animate" : ""} ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}
