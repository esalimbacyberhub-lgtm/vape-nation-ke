import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const DeliveryAreas = () => {
  const { ref, isVisible } = useScrollReveal();
  const areas = [
    "Kilimani (HQ)",
    "Yaya",
    "Lavington",
    "Westlands",
    "Kileleshwa",
    "Parklands",
    "South B",
    "South C",
    "Karen",
    "Lang'ata",
    "Ngong Road",
    "Runda",
    "Ruaka",
    "Roysambu",
    "Embakasi",
    "CBD",
    "Syokimau",
    "Athi River",
    "Kitengela",
    "Ongata Rongai"
  ];

  return (
    <section id="delivery" className="py-16 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We Deliver Everywhere in Nairobi
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Same-day. Fast. No stress.
            </p>
          </div>

          {/* Delivery Areas Grid */}
          <Card className="border-primary/20 shadow-lg shadow-primary/10 mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {areas.map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all group"
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              WhatsApp: 0742405841
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAreas;
