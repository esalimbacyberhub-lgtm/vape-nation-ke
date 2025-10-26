import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Vape Nation KE</title>
        <meta name="description" content="Privacy policy for Vape Nation KE - Learn how we protect your personal information." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">Vape Nation KE</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Name and contact details (Phone, WhatsApp, Email)</li>
              <li>Delivery address</li>
              <li>Order details</li>
              <li>Payment confirmation (No card details are stored)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>To process orders and deliveries</li>
              <li>To communicate updates or confirm orders</li>
              <li>To offer support and customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>We do not share, sell, or rent your information to third parties.</li>
              <li>Your details are only used to complete your order.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p className="text-foreground leading-relaxed">
              If you have any questions, contact us:<br />
              WhatsApp / Call: <a href="tel:0742405841" className="text-primary hover:underline">0742405841</a>
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">Last Updated: 2025</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
