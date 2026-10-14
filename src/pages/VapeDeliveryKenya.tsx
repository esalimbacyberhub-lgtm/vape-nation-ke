import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const WA = "https://wa.me/254742405841";
const TEL = "tel:+254742405841";
const DESC = "Vape delivery to any town in Kenya by courier, about one day. Confirm stock on WhatsApp 0742 405 841. Fees mostly KES 200 to 500.";
const URL = "https://vape-nation-ke.lovable.app/vape-delivery-kenya";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10 neon-text">{children}</h2>
);

const VapeDeliveryKenya = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Vape Delivery Across Kenya | Vape Nation KE</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="Vape Delivery Across Kenya | Vape Nation KE" />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={URL} />
    </Helmet>
    <Header />
    <main className="pt-32 pb-16 container mx-auto px-4">
      <article className="max-w-3xl mx-auto text-foreground leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        <h1 className="text-4xl md:text-5xl font-black mb-6 neon-text neon-glow-heading">Vape Delivery Across Kenya</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={WA} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full"><MessageCircle className="h-5 w-5 mr-2" />WhatsApp 0742 405 841</Button>
          </a>
          <a href={TEL}>
            <Button size="lg" variant="outline" className="w-full"><Phone className="h-5 w-5 mr-2" />Call 0742 405 841</Button>
          </a>
        </div>
        <p className="text-lg text-muted-foreground">Vape Nation KE delivers vapes to any town in Kenya by courier. Browse our site, then contact us to confirm what is in stock. You choose the courier you prefer, pay before we dispatch, and we send you the courier receipt.</p>

        <H2>How to Order</H2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Browse the products on our site.</li>
          <li>WhatsApp or call us on 0742 405 841 to confirm what is in stock.</li>
          <li>Choose the courier you prefer.</li>
          <li>We confirm the courier fee on WhatsApp, then dispatch your order once you have paid.</li>
        </ol>

        <H2>Courier and Fees</H2>
        <p className="text-muted-foreground">You choose whichever courier you prefer. Fees differ by courier and by town, and are mostly between KES 200 and KES 500. We confirm the exact fee on WhatsApp before dispatch.</p>

        <H2>Payment</H2>
        <p className="text-muted-foreground">Payment is made before your order is dispatched. After dispatch, we send you the courier receipt.</p>

        <H2>Delivery Time</H2>
        <p className="text-muted-foreground">Courier delivery usually takes about one day after dispatch. Delivery times are estimates. If you are in Nairobi, see our <Link to="/vape-delivery-nairobi" className="text-primary underline hover:opacity-80">Nairobi delivery</Link> page: a rider delivers within 10 to 40 minutes and you pay on delivery.</p>

        <H2>Towns We Send To</H2>
        <p className="text-muted-foreground">We send to any town in Kenya, wherever you are. Examples include Mombasa, Kisumu, Nakuru, Eldoret and Thika.</p>

        <H2>Age Requirement</H2>
        <p className="text-muted-foreground">Buyers must be 18 or older. We do not sell to anyone under 18.</p>

        <H2>Ready to Order?</H2>
        <p className="text-muted-foreground">WhatsApp or call 0742 405 841 to confirm what is in stock, choose your courier, and place your order.</p>
      </article>
    </main>
    <Footer />
  </div>
);

export default VapeDeliveryKenya;
