import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "50px 0px" }
    );

    // Small delay to ensure layout is complete before observing
    const raf = requestAnimationFrame(() => {
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
