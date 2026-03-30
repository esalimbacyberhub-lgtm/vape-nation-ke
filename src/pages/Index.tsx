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
        <title>Buy Vapes Nairobi | Disposable Vapes Kenya | Vape Nation KE</title>
        <meta 
          name="description" 
          content="Buy vapes Nairobi – Lost Mary, Elfbar & top disposable vapes Kenya. Fast vape delivery Nairobi, Kilimani, Westlands. Kenya's #1 vape shop. Order now!" 
        />
        <meta name="keywords" content="buy vapes Nairobi, disposable vapes Kenya, fast vape delivery Nairobi, best vapes Kilimani, vape shop Westlands, Lost Mary Kenya, Elfbar Nairobi, vape pods Kenya, e-liquids Kenya" />
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
