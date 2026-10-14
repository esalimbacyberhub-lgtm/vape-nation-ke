import { useCallback, useEffect, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const [el, setEl] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useCallback((node: HTMLElement | null) => setEl(node), []);

  useEffect(() => {
    if (!el || isVisible) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) setIsVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold, rootMargin: "150px 0px" }
    );
    observer.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const pollId = window.setInterval(check, 250);
    check();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearInterval(pollId);
    };
  }, [el, isVisible, threshold]);

  return { ref: ref as any, isVisible };
}
