import { useEffect, useRef, useState, useMemo } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerOptions = useMemo(() => ({ 
    threshold,
    rootMargin: "50px 0px 0px 0px"
  }), [threshold]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Check if already visible to avoid unnecessary observer setup
    const rect = el.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isAlreadyVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      observerOptions
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [observerOptions]);

  return { ref, isVisible };
}
