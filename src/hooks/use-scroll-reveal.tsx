import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let pollId: number | undefined;

    const makeVisible = () => {
      if (done) return;
      done = true;
      setIsVisible(true);
      cleanup();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) makeVisible();
      },
      { threshold, rootMargin: "150px 0px" }
    );
    observer.observe(el);

    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) makeVisible();
    };

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (pollId) window.clearInterval(pollId);
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    // Poll as a safety net for anchor jumps / smooth scrolling where
    // scroll events or the observer may not settle reliably.
    pollId = window.setInterval(check, 250);
    check();

    return cleanup;
  }, [threshold]);

  return { ref, isVisible };
}
