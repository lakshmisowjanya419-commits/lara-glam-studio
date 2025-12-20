import heroImage from "@/assets/hero-beauty.jpg";
import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury bridal makeup by LARA Glam_loop"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="elegant-fade-up stagger-1 mb-6">
            <img 
              src={logo} 
              alt="LARA Glam_loop Logo" 
              className="h-24 w-24 rounded-full object-cover border-2 border-gold/50 shadow-elegant"
            />
          </div>

          {/* Brand Name */}
          <p className="elegant-fade-up font-serif text-xl tracking-wide text-gold mb-4 stagger-2">
            LARA <span className="font-sans text-foreground/80">Glam_loop</span>
          </p>

          {/* Main Heading */}
          <h1 className="elegant-fade-up font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 stagger-3 text-foreground">
            Soft Glam to
            <span className="block italic text-gold">Bridal Elegance</span>
          </h1>

          {/* Subtext */}
          <p className="elegant-fade-up font-sans text-lg md:text-xl text-muted-foreground tracking-wide mb-8 stagger-4">
            Hair • Makeup • Nails • Saree Draping
          </p>

          {/* CTA Button */}
          <div className="elegant-fade-up stagger-5">
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
