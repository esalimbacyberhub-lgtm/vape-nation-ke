import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import lostMaryMT15000 from "@/assets/lost-mary-mt15000.png";
import vapenginJupiter from "@/assets/vapengin-jupiter.png";
import iceMintFlavor from "@/assets/ice-mint-flavor.png";
import fruitFusionFlavor from "@/assets/fruit-fusion-flavor.png";
import berryBlendsFlavor from "@/assets/berry-blends-flavor.png";
import lostMaryBrand from "@/assets/lost-mary-brand.png";
import elfbarBrand from "@/assets/elfbar-brand.png";
import soloBarBrand from "@/assets/solo-bar-brand.png";
import nastyBrand from "@/assets/nasty-brand.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Categories = () => {
  const { ref, isVisible } = useScrollReveal();
  const productTypes = [
    { name: "Disposables", description: "Ready-to-use vapes with no maintenance required", products: "60+ Products", image: lostMaryMT15000, popular: true },
    { name: "Pod Systems", description: "Refillable pods for a customizable experience", products: "23+ Products", image: vapenginJupiter, popular: false },
  ];

  const flavors = [
    { name: "Ice & Mint", description: "Cool and refreshing flavors", count: "25+ Flavors", image: iceMintFlavor },
    { name: "Fruit Fusion", description: "Sweet and tropical fruit blends", count: "30+ Flavors", image: fruitFusionFlavor },
    { name: "Berry Blends", description: "Rich berry combinations", count: "18+ Flavors", image: berryBlendsFlavor },
  ];

  const brands = [
    { name: "Lost Mary", products: "15+ Products", image: lostMaryBrand },
    { name: "Elfbar", products: "20+ Products", image: elfbarBrand },
    { name: "Solo Bar", products: "10+ Products", image: soloBarBrand },
    { name: "Nasty", products: "8+ Products", image: nastyBrand },
  ];

  return (
    <section ref={ref} id="categories" className={`py-20 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-5 blur-[120px]" style={{ background: '#BF00FF' }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4 neon-text neon-glow-heading tracking-wider">
            SHOP BY CATEGORY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect vape by product type, flavor, or brand
          </p>
        </div>

        {/* Product Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground tracking-wider">Product Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productTypes.map((type, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden relative group">
                {type.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-accent text-foreground shadow-lg border-none">
                    🔥 POPULAR
                  </Badge>
                )}
                <div className="p-8 text-center">
                  <img src={type.image} alt={type.name} className="w-24 h-24 mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-xl font-bold mb-3 tracking-wider">{type.name}</h4>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold mb-4">{type.products}</p>
                  <Button className="neon-button rounded-lg">Shop Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop by Flavor */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground tracking-wider">Shop by Flavor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flavors.map((flavor, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group">
                <img src={flavor.image} alt={flavor.name} className="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-bold mb-2 tracking-wider">{flavor.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{flavor.description}</p>
                <p className="text-primary font-bold mb-3">{flavor.count}</p>
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary/60">Explore</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Shop by Brand */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-foreground tracking-wider">Shop by Brand</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group">
                <img src={brand.image} alt={brand.name} className="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-base font-bold mb-2 tracking-wider">{brand.name}</h4>
                <p className="text-sm text-primary font-semibold">{brand.products}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8 py-4 neon-button rounded-xl tracking-widest">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
