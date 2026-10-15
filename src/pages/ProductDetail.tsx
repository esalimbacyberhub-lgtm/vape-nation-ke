import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { getWhatsAppCatalogUrl } from "@/lib/whatsapp";
import { ArrowLeft } from "lucide-react";

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
  flavors: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const load = async () => {
      const { data } = await supabase.from("products").select("*").eq("id", id).maybeSingle();
      setProduct(data ? ({ ...(data as any), flavors: (data as any).flavors || [] }) : null);
      setLoading(false);
    };
    load();
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product ? `${product.name} | Vape Nation KE` : "Product | Vape Nation KE"}</title>
        <meta
          name="description"
          content={
            product
              ? `${product.name} — ${product.puffs} for KSH ${product.price}. Same-day vape delivery in Nairobi.`
              : "Premium disposable vapes with same-day delivery in Nairobi."
          }
        />
        <link rel="canonical" href={`https://vapenationke.co.ke/product/${id}`} />
      </Helmet>
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/#shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to shop
          </Link>

          {loading ? (
            <p className="text-center py-20 neon-text tracking-widest">LOADING PRODUCT...</p>
          ) : !product ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4">Product not found</h1>
              <Link to="/#shop" className="text-primary underline">Browse all products</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              <div className="glass-card rounded-xl p-6 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full max-h-[420px] object-contain" />
              </div>

              <div className="space-y-5">
                <div className="flex gap-2 flex-wrap">
                  {product.badge && <Badge variant="secondary">{product.badge}</Badge>}
                  {product.popular && <Badge className="bg-gradient-to-r from-red-500 to-accent border-none">🔥 POPULAR</Badge>}
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-wide">{product.name}</h1>
                <p className="text-muted-foreground">{product.puffs}</p>
                <p className="text-4xl font-black neon-text">KSH {product.price.toLocaleString()}</p>

                <div className="glass-card rounded-xl p-4 border-amber-500/30">
                  <p className="text-sm text-amber-300">
                    📦 Delivery charges are not included in product prices and vary by location.
                  </p>
                </div>

                {product.flavors.length > 0 && (
                  <div>
                    <h2 className="font-bold mb-3 tracking-wider">Available flavours</h2>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((fl) => (
                        <button
                          key={fl}
                          onClick={() => setSelected(fl)}
                          className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
                            selected === fl
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 border-border hover:border-primary hover:text-primary"
                          }`}
                        >
                          {fl}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  className="w-full neon-button rounded-lg font-bold tracking-wider"
                  onClick={() => window.open(getWhatsAppCatalogUrl(), "_blank")}
                >
                  Order via WhatsApp 💬
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default ProductDetail;
