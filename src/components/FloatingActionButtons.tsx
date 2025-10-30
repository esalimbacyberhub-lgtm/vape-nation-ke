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
    <>
      {/* Shop Now Button - Left Side */}
      <a
        href="#products"
        className="fixed bottom-[100px] left-5 z-[9999] flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base transition-all duration-300 ease-in-out hover:scale-105 animate-pulse-glow text-white"
        style={{
          background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
          boxShadow: '0 0 18px rgba(181, 23, 158, 0.6)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(15px)'
        }}
        title="Shop Premium Vapes"
        aria-label="Shop Now"
      >
        <i className="fa-solid fa-cart-shopping text-[18px]"></i>
        <span>Shop Now</span>
      </a>

      {/* Right Side Buttons */}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 md:gap-4">
        {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in text-white"
          style={{
            background: '#8A2BE2',
            boxShadow: '0 0 18px rgba(138, 43, 226, 0.7)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(15px)'
          }}
          title="Back to Top"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up text-[22px]"></i>
        </button>
      )}

      {/* Call Button */}
      <a 
        href="tel:+254742405841"
        className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in text-white"
        style={{
          background: 'linear-gradient(90deg, #B5179E, #8A2BE2)',
          boxShadow: '0 0 18px rgba(181, 23, 158, 0.7)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(15px)',
          animationDelay: '0.2s'
        }}
        title="Call Vape Nation KE"
        aria-label="Call Vape Nation KE"
      >
        <i className="fa-solid fa-phone text-[22px]"></i>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254742405841" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 animate-fade-in text-white"
        style={{
          background: '#25D366',
          boxShadow: '0 0 18px rgba(37, 211, 102, 0.7)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(15px)',
          animationDelay: '0.4s'
        }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-[22px]"></i>
      </a>
      </div>
    </>
  );
};

export default FloatingActionButtons;
