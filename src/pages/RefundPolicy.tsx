import { getWhatsAppCatalogUrl } from "@/lib/whatsapp";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RefreshCw } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Refund & Replacement Policy | Vape Nation KE – Trusted Vape Shop Kenya</title>
        <meta name="description" content="Vape Nation KE refund policy – 100% original Lost Mary, Elfbar & disposable vapes Kenya. Quality guarantee on all products. Trusted vape shop Nairobi." />
        <meta name="keywords" content="vape refund Kenya, disposable vapes Kenya, Lost Mary Kenya, Elfbar Nairobi, trusted vape shop Nairobi" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <RefreshCw className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Refund & Replacement Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">Vape Nation KE</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-foreground leading-relaxed">
              We only sell 100% original products, sealed and tested for quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Returns / Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Returns are accepted only if the product is unused and in original packaging.</li>
              <li>No returns on opened, used, or damaged products.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Replacements</h2>
            <p className="text-foreground mb-4">If your device is not working on arrival, we replace it if:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Reported within 24 hours</li>
              <li>Product is returned with full packaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">No replacements for:</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Products damaged from dropping or misuse</li>
              <li>Products that stop working after use (consumable battery devices)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">To request a replacement</h2>
            <p className="text-foreground leading-relaxed">
              WhatsApp: <a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">0742405841</a>
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;
