import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching location.hash after route changes,
 * and to the top when navigating to a page without a hash.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Re-align after products/images load and shift the layout
        [900, 1800].forEach((t) =>
          window.setTimeout(() => {
            const target = document.getElementById(id);
            if (target && Math.abs(target.getBoundingClientRect().top) > 120) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, t)
        );
        return;
      }
      if (attempts++ < 20) window.setTimeout(tryScroll, 100);
    };
    tryScroll();
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
