import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <section id="shop" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="neon-text text-lg tracking-widest">LOADING PRODUCTS...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="shop"
      className={`py-20 relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-5 blur-[120px]" style={{ background: '#00F5FF' }} />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4 neon-text neon-glow-heading tracking-wider">
            SHOP PREMIUM VAPES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast delivery in Nairobi, Lavington, Westlands & nationwide 🇰🇪
          </p>
          <div className="mt-4 glass-card rounded-xl p-4 max-w-2xl mx-auto border-amber-500/30">
            <p className="text-sm text-amber-300">
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
              <div
                key={product.id}
                className="glass-card rounded-xl overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500 p-4 cursor-pointer"
                    />
                  </Link>
                  {product.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-accent text-foreground font-bold animate-pulse border-none">
                      🔥 POPULAR
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 font-bold backdrop-blur-sm bg-background/60 border border-primary/20 text-foreground"
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-5 space-y-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg line-clamp-2 min-h-[3rem] tracking-wide hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {product.puffs}
                    </span>
                    <span className="text-2xl font-black neon-text">
                      KSH {product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Flavors Section */}
                  {product.flavors.length > 0 && (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleFlavors(product.id)}
                        className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
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
                                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_10px_rgba(0,245,255,0.3)]"
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
                    className="w-full font-bold tracking-wider neon-button rounded-lg relative z-10"
                    onClick={() => handleWhatsAppOrder()}
                  >
                    Order via WhatsApp 💬
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
