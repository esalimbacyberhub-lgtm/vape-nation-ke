import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-card to-card/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vape Nation KE – The City's Vape Plug
            </span>
          </h3>
          
          {/* Description */}
          <p className="text-lg text-foreground mb-4 font-semibold leading-relaxed">
            We deliver authentic vapes & flavors straight to your spot — fast.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            No fakes. No low-quality clones. Only top-tier brands and fire flavors.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-muted-foreground">
            <a href="tel:0742405841" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>0742405841</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href="https://wa.me/254742405841" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Available</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@vapenationke.co.ke" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@vapenationke.co.ke</span>
            </a>
          </div>

          {/* Delivery Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">🚚</span>
              <span>Same-day delivery: Kilimani, Lavington, Kileleshwa, Westlands, Parklands, CBD & more</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">📦</span>
              <span>Nationwide shipping available</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">💬</span>
              <span>WhatsApp to Order: 0742405841</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-primary/10 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vape Nation KE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
