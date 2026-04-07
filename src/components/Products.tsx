import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  puffs: string;
  flavor: string;
  price: number;
  image: string;
  popular: boolean;
  badge: string;
  category: string;
  display_order: number;
}

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryFilters = [
    { id: "all", label: "All", icon: "🛍️" },
    { id: "disposable", label: "Disposable Vapes", icon: "💨" },
    { id: "juice", label: "Vape Juice", icon: "💧" },
    { id: "pods", label: "Pod Kits", icon: "🔋" },
    { id: "accessories", label: "Accessories", icon: "🔌" },
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("display_order");

    if (error) {
      toast.error("Failed to load products");
      console.error(error);
      setLoading(false);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  };

  const filteredProducts = products.filter(product => 
    activeFilter === "all" || product.category === activeFilter
  );

  const handleWhatsAppOrder = (productName: string, price: number) => {
    const message = `Hi! I'm interested in ordering ${productName} (KSH ${price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/254742405841?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <section id="shop" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🔥 Shop Premium Vapes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast delivery in Nairobi, Lavington, Westlands & nationwide 🇰🇪
          </p>
          <div className="mt-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-amber-900 dark:text-amber-200">
              📦 <strong>Note:</strong> Delivery charges are not included in product prices. Delivery fees may vary depending on your location.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryFilters.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="font-semibold rounded-full px-6 transition-all duration-300"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500 p-4"
                  />
                  {product.popular && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white font-bold animate-pulse">
                      🔥 POPULAR
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 font-bold backdrop-blur-sm bg-background/80"
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {product.puffs}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {product.flavor}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-2xl font-bold text-primary">
                      KSH {product.price.toLocaleString()}
                    </span>
                  </div>

                  <Button 
                    className="w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all relative z-10"
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                  >
                    Order on WhatsApp 💬
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;