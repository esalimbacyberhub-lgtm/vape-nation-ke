import { useState, useEffect } from "react";

const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 md:gap-4">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in"
          style={{
            background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
            boxShadow: '0 0 18px rgba(181, 23, 158, 0.7)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(15px)'
          }}
          title="Back to Top"
          aria-label="Scroll to top"
        >
          ⬆️
        </button>
      )}

      {/* Call Button */}
      <a 
        href="tel:+254742405841"
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in"
        style={{
          background: 'linear-gradient(90deg, #FF00CC, #8A2BE2)',
          boxShadow: '0 0 18px rgba(255, 0, 255, 0.7)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(15px)',
          animationDelay: '0.2s'
        }}
        title="Call Vape Nation KE"
        aria-label="Call Vape Nation KE"
      >
        📞
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254742405841" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in"
        style={{
          background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
          boxShadow: '0 0 18px rgba(181, 23, 158, 0.7)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(15px)',
          animationDelay: '0.4s'
        }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
};

export default FloatingActionButtons;
