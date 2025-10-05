import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Categories = () => {
  const productTypes = [
    {
      name: "Disposables",
      description: "Ready-to-use vapes with no maintenance required",
      products: "60+ Products",
      image: lostMaryMT15000,
      popular: true,
    },
    {
      name: "Pod Systems",
      description: "Refillable pods for a customizable experience",
      products: "23+ Products",
      image: vapenginJupiter,
      popular: false,
    },
  ];

  const flavors = [
    {
      name: "Ice & Mint",
      description: "Cool and refreshing flavors",
      count: "25+ Flavors",
      image: iceMintFlavor,
    },
    {
      name: "Fruit Fusion",
      description: "Sweet and tropical fruit blends",
      count: "30+ Flavors",
      image: fruitFusionFlavor,
    },
    {
      name: "Berry Blends",
      description: "Rich berry combinations",
      count: "18+ Flavors",
      image: berryBlendsFlavor,
    },
  ];

  const brands = [
    { name: "Lost Mary", products: "15+ Products", image: lostMaryBrand },
    { name: "Elfbar", products: "20+ Products", image: elfbarBrand },
    { name: "Solo Bar", products: "10+ Products", image: soloBarBrand },
    { name: "Nasty", products: "8+ Products", image: nastyBrand },
  ];

  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            🗂️ SHOP BY CATEGORY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect vape by product type, flavor, or brand
          </p>
        </div>

        {/* Product Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Product Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productTypes.map((type, index) => (
              <Card key={index} className="relative overflow-hidden hover:scale-105 transition-transform">
                {type.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground">
                    🔥 POPULAR
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-24 h-24 mx-auto mb-6 object-contain"
                  />
                  <CardTitle className="text-xl mb-3">{type.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <p className="text-primary font-semibold mb-4">{type.products}</p>
                  <Button>Shop Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shop by Flavor */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Shop by Flavor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flavors.map((flavor, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <CardTitle className="text-lg mb-2">{flavor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{flavor.description}</p>
                  <p className="text-primary font-semibold mb-3">{flavor.count}</p>
                  <Button variant="outline" size="sm">Explore</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shop by Brand */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Shop by Brand</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <CardTitle className="text-base mb-2">{brand.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{brand.products}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-8 py-4">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;