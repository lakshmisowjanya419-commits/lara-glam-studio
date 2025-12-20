import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Book Your <span className="italic text-gold">Experience</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-10 leading-relaxed">
            Ready to elevate your beauty for that special occasion? Connect with us to discuss your vision and secure your appointment.
          </p>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="xl"
            className="group mb-8"
            onClick={() => window.open("https://wa.me/000000000", "_blank")}
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Connect on WhatsApp
          </Button>

          {/* Note */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-gold" />
            <p className="font-sans text-sm">
              Advance bookings recommended for bridal services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
