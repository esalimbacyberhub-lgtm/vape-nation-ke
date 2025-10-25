import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.png";
import vapenginJupiter from "@/assets/vapengin-jupiter.png";
import lostMaryMt15000 from "@/assets/lost-mary-mt15000.png";
import soloBar50k from "@/assets/solo-bar-50k.png";

const Hero = () => {
  const featuredProducts = [
    {
      name: "VAPENGIN JUPITER",
      price: "KSH 1,800",
      image: vapenginJupiter,
    },
    {
      name: "LOST MARY MT15000",
      price: "KSH 2,500",
      image: lostMaryMt15000,
    },
    {
      name: "SOLO BAR 50K",
      price: "KSH 3,500",
      image: soloBar50k,
    },
  ];

  const stats = [
    { number: "500+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">VAPE</span>{" "}
            <span className="text-foreground">NATION</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            KE
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground mb-4 font-semibold">
            Premium Vape Delivery in Nairobi
          </p>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Located in Kilimani / Yaya, we provide fast same-day delivery of authentic vapes, pods, disposable devices, juices, and accessories.
            We only stock 100% original products from trusted global brands — no fakes, no knockoffs.
          </p>
          <p className="text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
            Whether you're new to vaping or a seasoned user, we help you choose the perfect flavor and device for your style.
          </p>
          <div className="bg-card/60 backdrop-blur rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-primary/20">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/25 transition-all">
              🛍️ SHOP NOW
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-primary/50 hover:bg-primary/10">
              🗂️ BROWSE CATEGORIES
            </Button>
          </div>

          {/* Featured Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="bg-card/95 backdrop-blur border-primary/20 hover:scale-105 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all">
                <CardContent className="p-6 text-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-bold text-card-foreground mb-2">{product.name}</h3>
                  <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-lg">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;