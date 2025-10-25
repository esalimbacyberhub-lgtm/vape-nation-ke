import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Premium disposable vapes & vape pens",
    "A wide selection of flavors to match every taste",
    "Replacement pods, coils & accessories",
    "Personalized support and guidance",
    "Same-day delivery within Nairobi & fast nationwide shipping"
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Welcome to Vape Nation KE – where quality meets flavor.
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="border-primary/20 shadow-lg shadow-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a Nairobi-based vape retailer dedicated to supplying <strong className="text-primary">100% original and high-quality</strong> vape products from trusted global brands. We understand that vaping is more than just a product—it's a lifestyle. That's why we offer:
                </p>

                {/* Features List */}
                <div className="space-y-4 my-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="h-4 w-4 text-background" />
                        </div>
                      </div>
                      <p className="text-foreground text-lg">{feature}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a beginner or an experienced vaper, our team is here to help you choose the right device and flavor for your style.
                </p>

                {/* Call to Action */}
                <div className="pt-6 border-t border-primary/20 mt-8">
                  <p className="text-center text-xl md:text-2xl font-bold">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Vape smart. Vape original. Vape Nation KE.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
