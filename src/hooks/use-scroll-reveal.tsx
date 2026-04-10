import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const makeVisible = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          makeVisible();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "100px 0px" }
    );

    observer.observe(el);

    // Fallback: check if element has been scrolled past (e.g. instant scroll)
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        makeVisible();
        observer.unobserve(el);
        window.removeEventListener("scroll", checkVisibility);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    // Also check immediately in case already in view
    checkVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [threshold]);

  return { ref, isVisible };
}
