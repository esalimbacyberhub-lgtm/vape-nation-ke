import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const About = () => {
  const features = [
    "We deliver fast — no long waiting.",
    "We only sell 100% legit products.",
    "New flavors dropping weekly.",
    "Friendly service. Real people. Real plug energy.",
    "You get the exact product you see, not surprises."
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Nairobi Vibes With Us
              </span>
            </h2>
          </div>

          {/* Main Content Card */}
          <Card className="border-primary/20 shadow-lg shadow-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {/* Features List */}
                <div className="space-y-4">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
