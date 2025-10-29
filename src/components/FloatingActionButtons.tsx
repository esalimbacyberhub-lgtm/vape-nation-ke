import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
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
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254742405841" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] flex items-center justify-center rounded-full p-4 transition-all duration-300 ease-in-out animate-pulse-glow hover:scale-110 hover:shadow-[0_0_30px_rgba(255,0,255,1)]"
        style={{
          background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
          boxShadow: '0 0 25px rgba(181, 23, 158, 0.9), 0 0 50px rgba(181, 23, 158, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Icon" 
          className="w-8 h-8 brightness-0 invert drop-shadow-lg"
        />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+254742405841"
        className="fixed bottom-[95px] right-5 z-[9998] flex items-center justify-center rounded-full p-4 transition-all duration-300 ease-in-out animate-pulse-glow hover:scale-110 hover:shadow-[0_0_30px_rgba(255,0,255,1)]"
        style={{
          background: 'linear-gradient(90deg, #FF00CC, #8A2BE2)',
          boxShadow: '0 0 25px rgba(255, 0, 255, 0.9), 0 0 50px rgba(255, 0, 255, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}
        aria-label="Call Vape Nation KE"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_font_awesome.svg" 
          alt="Call Icon" 
          className="w-8 h-8 brightness-0 invert drop-shadow-lg"
        />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 z-[9999] flex items-center justify-center rounded-full p-3.5 transition-all duration-300 ease-in-out hover:scale-110"
          style={{
            background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
            boxShadow: '0 0 18px rgba(181, 23, 158, 0.7)'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-7 h-7 text-white" />
        </button>
      )}
    </>
  );
};

export default FloatingActionButtons;
