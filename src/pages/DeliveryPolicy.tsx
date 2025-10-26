import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

const DeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Delivery & Shipping Policy | Vape Nation KE</title>
        <meta name="description" content="Fast delivery across Nairobi and nationwide shipping in Kenya. Learn about our delivery and shipping process." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Delivery & Shipping Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">Vape Nation KE</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nairobi Deliveries</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Same-day delivery available across Nairobi.</li>
              <li>Delivery time: 20 – 60 minutes depending on location.</li>
              <li>Delivery fee varies by area.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Other Cities in Kenya</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>We ship nationwide (Mombasa, Kisumu, Nakuru, Eldoret, etc.)</li>
              <li>Delivery time: 1–2 business days via courier.</li>
              <li>Parcels are securely packaged.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Order Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-foreground">
              <li>Place your order on WhatsApp (0742405841)</li>
              <li>Confirm delivery details & payment</li>
              <li>Order dispatched immediately</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact for Delivery Support</h2>
            <p className="text-foreground leading-relaxed">
              📞 <a href="tel:0742405841" className="text-primary hover:underline">0742405841</a>
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeliveryPolicy;
