import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DeliveryAreas from "@/components/DeliveryAreas";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vape Nation KE | Premium Vape Delivery Nairobi - Same Day</title>
        <meta 
          name="description" 
          content="Buy premium disposable vapes in Nairobi with same-day delivery. Kilimani HQ. Elfbar, Lost Mary, Solo Bar, Vapengin & more. Call/WhatsApp 0742405841" 
        />
        <meta name="keywords" content="vape delivery Nairobi, disposable vapes Kenya, Elfbar Nairobi, Lost Mary Kenya, vape shop Kilimani, same day vape delivery, buy vapes Nairobi, Solo Bar Kenya, Vapengin Kenya" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vape Nation KE | Premium Vape Delivery Nairobi - Same Day" />
        <meta property="og:description" content="Buy premium disposable vapes in Nairobi with same-day delivery. Kilimani HQ. Elfbar, Lost Mary, Solo Bar, Vapengin & more. Call/WhatsApp 0742405841" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/ryUYGwBdTkeadTwOEtUxIh4AySA2/social-images/social-1761798134397-Vape Nation Neon Skull Design.png" />
        <meta property="og:url" content="https://vape-nation-ke.lovable.app" />
        <meta property="og:site_name" content="Vape Nation KE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vape Nation KE | Premium Vape Delivery Nairobi - Same Day" />
        <meta name="twitter:description" content="Buy premium disposable vapes in Nairobi with same-day delivery. Kilimani HQ. Elfbar, Lost Mary, Solo Bar, Vapengin & more. Call/WhatsApp 0742405841" />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/ryUYGwBdTkeadTwOEtUxIh4AySA2/social-images/social-1761798134397-Vape Nation Neon Skull Design.png" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <DeliveryAreas />
      <Categories />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default Index;
