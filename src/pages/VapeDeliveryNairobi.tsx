import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const WA = "https://wa.me/254742405841";
const TEL = "tel:+254742405841";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10 neon-text">{children}</h2>
);

const VapeDeliveryNairobi = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Vape Delivery in Nairobi | Vape Nation KE</title>
      <meta name="description" content="Vape delivery in Nairobi in 10 to 40 minutes. Confirm stock on WhatsApp 0742 405 841, pay on delivery. Fees from KES 200." />
      <link rel="canonical" href="https://vapenationke.co.ke/vape-delivery-nairobi" />
      <meta property="og:title" content="Vape Delivery in Nairobi | Vape Nation KE" />
      <meta property="og:description" content="Vape delivery in Nairobi in 10 to 40 minutes. Confirm stock on WhatsApp 0742 405 841, pay on delivery. Fees from KES 200." />
      <meta property="og:url" content="https://vapenationke.co.ke/vape-delivery-nairobi" />
    </Helmet>
    <Header />
    <main className="pt-32 pb-16 container mx-auto px-4">
      <article className="max-w-3xl mx-auto text-foreground leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        <h1 className="text-4xl md:text-5xl font-black mb-6 neon-text neon-glow-heading">Vape Delivery in Nairobi</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={WA} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full"><MessageCircle className="h-5 w-5 mr-2" />WhatsApp 0742 405 841</Button>
          </a>
          <a href={TEL}>
            <Button size="lg" variant="outline" className="w-full"><Phone className="h-5 w-5 mr-2" />Call 0742 405 841</Button>
          </a>
        </div>
        <p className="text-lg text-muted-foreground">Vape Nation KE delivers vapes across Nairobi by rider. Browse our site, then contact us to confirm what is in stock. You pay when your order arrives.</p>

        <H2>How to Order</H2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Browse the products on our site.</li>
          <li>WhatsApp or call us on 0742 405 841 to confirm what is in stock.</li>
          <li>We confirm your delivery fee and arrange a rider.</li>
          <li>Pay on delivery.</li>
        </ol>

        <H2>Delivery Fees</H2>
        <p className="text-muted-foreground">Delivery within Nairobi costs between KES 200 and KES 1,000, depending on your location. We confirm the exact fee on WhatsApp before the rider is dispatched.</p>

        <H2>Delivery Time</H2>
        <p className="text-muted-foreground">Delivery within Nairobi usually takes between 10 and 40 minutes after your order is confirmed, depending on your location.</p>

        <H2>Areas We Cover</H2>
        <p className="text-muted-foreground mb-3">We deliver by rider to these areas of Nairobi:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Westlands side: Westlands, Kilimani, Kileleshwa, Lavington, Parklands</li>
          <li>Central: CBD, Upper Hill</li>
          <li>South and southwest: Karen, Rongai, South B, South C</li>
          <li>East: Embakasi, Buruburu</li>
          <li>North: Kasarani, Roysambu, Ruaka</li>
        </ul>
        <p className="text-muted-foreground mt-3">Not sure whether we reach your estate? Send us your location on WhatsApp and we will confirm the fee.</p>

        <H2>Payment</H2>
        <p className="text-muted-foreground">Payment is made on delivery. You confirm the product with us first, the rider delivers, and you pay when you receive your order. No prepayment is required.</p>

        <H2>Age Requirement</H2>
        <p className="text-muted-foreground">Buyers must be 18 or older. We do not sell to anyone under 18.</p>

        <H2>Ready to Order?</H2>
        <p className="text-muted-foreground">WhatsApp or call 0742 405 841 to confirm what is in stock. A rider will deliver within Nairobi, and you pay on delivery.</p>
        <p className="text-muted-foreground mt-10">Outside Nairobi? See <a href="/vape-delivery-kenya" className="text-primary underline hover:opacity-80">vape delivery across Kenya</a>.</p>
      </article>
    </main>
    <Footer />
  </div>
);

export default VapeDeliveryNairobi;
