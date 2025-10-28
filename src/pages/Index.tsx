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
