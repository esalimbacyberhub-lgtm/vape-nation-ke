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
        <title>Vape Nation KE | Kenya's #1 Vape Shop – Buy Premium Vapes & Pods Online</title>
        <meta 
          name="description" 
          content="Vape Nation KE – Kenya's trusted vape shop. Buy vapes, pods & e-liquids with fast delivery across Nairobi, Mombasa, Kisumu & the entire Kenya." 
        />
        <meta name="keywords" content="vape shop Kenya, buy vapes Nairobi, vape pods Kenya, e-liquids Kenya, Elf Bar Kenya, vape delivery Nairobi" />
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
