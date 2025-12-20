import heroImage from "@/assets/hero-beauty.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury bridal makeup by lara_glam_loop"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Brand Name */}
          <p className="elegant-fade-up font-sans text-sm tracking-[0.3em] uppercase text-gold mb-6 stagger-1">
            lara_glam_loop
          </p>

          {/* Main Heading */}
          <h1 className="elegant-fade-up font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 stagger-2 text-foreground">
            Soft Glam to
            <span className="block italic text-gold">Bridal Elegance</span>
          </h1>

          {/* Subtext */}
          <p className="elegant-fade-up font-sans text-lg md:text-xl text-muted-foreground tracking-wide mb-8 stagger-3">
            Hair • Makeup • Nails • Saree Draping
          </p>

          {/* CTA Button */}
          <div className="elegant-fade-up stagger-4">
            <Button
              variant="whatsapp"
              size="xl"
              className="group"
              onClick={() => window.open("https://wa.me/000000000", "_blank")}
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Book via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 elegant-fade-in stagger-6">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
