import { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";

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
        className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3 rounded-full px-6 py-4 transition-all duration-300 ease-in-out animate-pulse-glow hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 0 35px rgba(37, 211, 102, 0.9), 0 4px 15px rgba(0, 0, 0, 0.5)',
          border: '3px solid rgba(255, 255, 255, 0.9)'
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
        <span className="text-white font-bold text-base whitespace-nowrap">Order on WhatsApp</span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+254742405841"
        className="fixed bottom-[105px] right-5 z-[9998] flex items-center justify-center rounded-full p-5 transition-all duration-300 ease-in-out animate-pulse-glow hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #FF00CC, #B5179E)',
          boxShadow: '0 0 35px rgba(255, 0, 204, 0.9), 0 4px 15px rgba(0, 0, 0, 0.5)',
          border: '3px solid rgba(255, 255, 255, 0.9)'
        }}
        aria-label="Call Vape Nation KE"
      >
        <Phone className="w-9 h-9 text-white" strokeWidth={2.5} />
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
