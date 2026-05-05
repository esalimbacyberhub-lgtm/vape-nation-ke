import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { getWhatsAppCatalogUrl } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  flavors: string[];
}

const Products = () => {
  const { ref, isVisible } = useScrollReveal();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedFlavors, setExpandedFlavors] = useState<Record<string, boolean>>({});
  const [selectedFlavors, setSelectedFlavors] = useState<Record<string, string>>({});

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

    const mapped = (data || []).map((p: any) => ({
      ...p,
      flavors: p.flavors || [],
    }));
    setProducts(mapped);
    setLoading(false);
  };

  const toggleFlavors = (productId: string) => {
    setExpandedFlavors((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const selectFlavor = (productId: string, flavor: string) => {
    setSelectedFlavors((prev) => ({ ...prev, [productId]: flavor }));
  };

  const handleWhatsAppOrder = () => {
    window.open(getWhatsAppCatalogUrl(), "_blank");
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
    <section
      ref={ref}
      id="shop"
      className={`py-16 bg-background transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
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
              📦 <strong>Note:</strong> Delivery charges are not included in
              product prices. Delivery fees may vary depending on your location.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const isExpanded = expandedFlavors[product.id];
            const selected = selectedFlavors[product.id];

            return (
              <Card
                key={product.id}
                className="group hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.03] transition-all duration-300 overflow-hidden border-2 hover:border-primary"
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500 p-4"
                    />
                    {product.popular && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white font-bold animate-pulse">
                        🔥 POPULAR
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className="absolute top-3 left-3 font-bold backdrop-blur-sm bg-background/80"
                    >
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {product.puffs}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        KSH {product.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Flavors Section */}
                    {product.flavors.length > 0 && (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleFlavors(product.id)}
                          className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          <span>
                            {selected
                              ? `Selected: ${selected}`
                              : `${product.flavors.length} flavours available`}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                            {product.flavors.map((fl) => (
                              <button
                                key={fl}
                                onClick={() => selectFlavor(product.id, fl)}
                                className={`text-xs px-2 py-1 rounded-full border transition-all ${
                                  selected === fl
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-muted/50 border-border hover:border-primary hover:text-primary"
                                }`}
                              >
                                {fl}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <Button
                      className="w-full font-semibold transition-all relative z-10"
                      onClick={() => handleWhatsAppOrder(product)}
                    >
                      Order via WhatsApp 💬
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No products found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
