import { MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const DeliveryAreas = () => {
  const { ref, isVisible } = useScrollReveal();
  const areas = [
    "Kilimani (HQ)", "Yaya", "Lavington", "Westlands", "Kileleshwa", "Parklands",
    "South B", "South C", "Karen", "Lang'ata", "Ngong Road", "Runda",
    "Ruaka", "Roysambu", "Embakasi", "CBD", "Syokimau", "Athi River",
    "Kitengela", "Ongata Rongai"
  ];

  return (
    <section ref={ref} id="delivery" className={`py-20 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 neon-text neon-glow-heading tracking-wider">
              WE DELIVER EVERYWHERE IN NAIROBI
            </h2>
            <p className="text-xl text-muted-foreground">Same-day. Fast. No stress.</p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all group cursor-default"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground">WhatsApp: <span className="text-primary font-bold">0742405841</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAreas;
