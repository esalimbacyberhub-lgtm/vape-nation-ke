import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    "We deliver fast — no long waiting.",
    "We only sell 100% legit products.",
    "New flavors dropping weekly.",
    "Friendly service. Real people. Real plug energy.",
    "You get the exact product you see, not surprises."
  ];

  return (
    <section ref={ref} id="about" className={`py-20 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 neon-text neon-glow-heading tracking-wider">
              WHY NAIROBI VIBES WITH US
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 transition-all group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                      style={{ background: 'linear-gradient(135deg, #00F5FF, #BF00FF)' }}
                    >
                      <Check className="h-4 w-4 text-background" />
                    </div>
                  </div>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
