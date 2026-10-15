import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import vapeNationLogo from "@/assets/vape-nation-logo.png";
import vapenginJupiter from "@/assets/vapengin-jupiter.png";
import lostMaryMt15000 from "@/assets/lost-mary-mt15000.png";
import soloBar50k from "@/assets/solo-bar-50k.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = [
    { name: "VAPENGIN JUPITER", price: "KSH 1,800", image: vapenginJupiter },
    { name: "LOST MARY MT15000", price: "KSH 2,500", image: lostMaryMt15000 },
    { name: "SOLO BAR 50K", price: "KSH 3,500", image: soloBar50k },
  ];

  const stats = [
    { number: "500+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden animated-gradient-bg scanline-overlay"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      {/* Watermark logo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${vapeNationLogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          filter: 'blur(4px)',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Decorative glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-[100px]" style={{ background: '#00F5FF' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: '#BF00FF' }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-6xl md:text-8xl font-black mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="neon-text neon-glow-heading">VAPE</span>{" "}
            <span className="text-foreground">NATION</span>
          </h1>
          <div className={`text-2xl md:text-3xl font-bold mb-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="neon-text-purple">KE</span>
          </div>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-foreground mb-4 font-semibold transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Premium Vape Delivery in Nairobi • Kilimani HQ • Same-Day Delivery
          </p>
          <p className={`text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Located in Kilimani / Yaya, we provide fast same-day delivery of authentic vapes, pods, disposable devices, juices, and accessories.
            We only stock 100% original products from trusted global brands — no fakes, no knockoffs.
          </p>
          <p className={`text-base text-muted-foreground mb-4 max-w-2xl mx-auto transition-all duration-700 delay-[350ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Whether you're new to vaping or a seasoned user, we help you choose the perfect flavor and device for your style.
          </p>

          {/* Info card */}
          <div className={`glass-card rounded-xl p-5 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-[400ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row gap-2 text-sm text-foreground">
              <span className="flex items-center gap-1">
                <span className="text-primary">🚚</span> Same-day delivery: Kilimani, Lavington, Kileleshwa, Westlands, Karen, Ngong Road & CBD
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 text-sm text-foreground mt-2">
              <span className="flex items-center gap-1">
                <span className="text-primary">🇰🇪</span> Nationwide shipping: Mombasa, Kisumu, Nakuru, Eldoret & more
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground mt-2 justify-center">
              <span className="text-primary">📞</span>
              <span>Call / WhatsApp: <a href="tel:0742405841" className="text-primary font-semibold hover:underline">0742405841</a></span>
            </div>
          </div>
          <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
            💨 Vape smart. Vape original. Vape Nation KE.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#shop">
              <Button size="lg" className="px-8 py-6 text-lg neon-button rounded-xl">
                🛍️ SHOP NOW
              </Button>
            </a>
            <a href="#categories">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/70 rounded-xl transition-all">
                🗂️ BROWSE CATEGORIES
              </Button>
            </a>
          </div>

          {/* Featured Products */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-[600ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {featuredProducts.map((product, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-500 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <h3 className="font-bold text-foreground mb-2 text-sm tracking-wider">{product.name}</h3>
                <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-lg">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-black neon-text neon-glow-heading mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
