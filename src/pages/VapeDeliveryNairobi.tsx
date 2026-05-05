import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

const VapeDeliveryNairobi = () => {
  const benefits = [
    "100% Original Products Only",
    "Trusted Brands & Fresh Flavors",
    "Fast Delivery (20–60 mins Nairobi)",
    "Friendly support & guidance",
    "Secure mobile payment / M-Pesa"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fast Vape Delivery Nairobi | Buy Disposable Vapes Nairobi | Vape Nation KE</title>
        <meta name="description" content="Fast vape delivery Nairobi – same-day delivery in Kilimani, Westlands, Lavington & CBD. Buy Lost Mary, Elfbar & disposable vapes Kenya. Order via WhatsApp!" />
        <meta name="keywords" content="fast vape delivery Nairobi, buy vapes Nairobi, disposable vapes Kenya, best vapes Kilimani, vape shop Westlands, Lost Mary Kenya, Elfbar Nairobi" />
        <meta 
          name="description" 
          content="Fast vape delivery in Nairobi. Order premium vapes, pods & e-liquids with same-day delivery in Kilimani, Westlands, CBD, Lavington & more. Call 0742405841." 
        />
        <meta name="keywords" content="vape delivery Nairobi, vapes Nairobi, same-day vape delivery, Kilimani vape, Westlands vape shop, CBD vape delivery" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vape Delivery in Nairobi – Fast & Reliable
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Vape Nation KE offers same-day vape delivery anywhere in Nairobi from our base in Kilimani / Yaya.
              <br />
              Order premium disposable vapes, vape pens, pods, salts & accessories delivered to your door in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Us
            </h2>
            
            <Card className="border-primary/20 shadow-lg shadow-primary/10">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="h-4 w-4 text-background" />
                        </div>
                      </div>
                      <p className="text-foreground text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To order, Call / WhatsApp:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0742405841">
                <Button size="lg" className="px-8 py-6 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 0742405841
                </Button>
              </a>
              <a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp 0742405841
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VapeDeliveryNairobi;
