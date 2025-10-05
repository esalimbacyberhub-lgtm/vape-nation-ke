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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-primary">VAPE</span>{" "}
            <span className="text-foreground">LOUNGE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            NAIROBI
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground mb-4 font-semibold">
            Kenya's Premier Online Vape Store
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Shop authentic vaping products with fast delivery across Kenya. From disposables to premium mods - we have everything you need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg">
              🛍️ SHOP NOW
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              🗂️ BROWSE CATEGORIES
            </Button>
          </div>

          {/* Featured Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur border-border hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-bold text-card-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;