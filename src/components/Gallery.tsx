import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import lostMaryMT15000 from "@/assets/lost-mary-mt15000.png";
import vapenginJupiter from "@/assets/vapengin-jupiter.png";
import soloBar50K from "@/assets/solo-bar-50k.png";
import iceMintFlavor from "@/assets/ice-mint-flavor.png";
import fruitFusionFlavor from "@/assets/fruit-fusion-flavor.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const galleryItems = [
    { title: "Premium Disposable Vapes Collection", subtitle: "Disposables", image: lostMaryMT15000, category: "Premium" },
    { title: "High Puff Count Devices - 50K+ Puffs", subtitle: "High Capacity", image: soloBar50K, category: "Premium" },
    { title: "Advanced Pod Systems Collection", subtitle: "Pods", image: vapenginJupiter, category: "Pods" },
    { title: "ELFBAR EW9000 Disposable Collection", subtitle: "Disposables", image: lostMaryMT15000, category: "Disposables" },
    { title: "Strawberry Watermelon Flavor Collection", subtitle: "Flavors", image: fruitFusionFlavor, category: "Flavors" },
    { title: "Energy Vape - Available in 16 Flavors", subtitle: "Products", image: iceMintFlavor, category: "Products" },
    { title: "Lost Mary MT15000 Turbo - Thermal Edition", subtitle: "Premium", image: lostMaryMT15000, category: "Premium" },
    { title: "Solo Bar 50K Puffs Collection", subtitle: "Premium", image: soloBar50K, category: "Premium" },
    { title: "Vapengin Jupiter Plus Pod Collection - Up to 13000 Puffs", subtitle: "Pods", image: vapenginJupiter, category: "Pods" },
  ];

  return (
    <section ref={ref} id="gallery" className={`py-20 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[120px]" style={{ background: '#00F5FF' }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4 neon-text neon-glow-heading tracking-wider">FEATURED COLLECTIONS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collections of premium vaping products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground border-none font-bold">
                  {item.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4 tracking-wider">Visit Our Store</h3>
            <p className="text-muted-foreground mb-6">
              Experience our products in person at our Lavington location
            </p>
            <Button className="neon-button rounded-xl px-8 py-3 tracking-widest">
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
