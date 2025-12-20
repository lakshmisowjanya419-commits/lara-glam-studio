import { Sparkles, Heart, Eye, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            About Us
          </p>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Main Content */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-relaxed">
            Where Beauty Meets
            <span className="italic text-gold"> Artistry</span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            At <span className="text-gold font-medium">lara_glam_loop</span>, beauty is crafted with precision, 
            elegance, and a deep understanding of individuality. From soft glam looks to bridal elegance, 
            every detail is curated to enhance natural beauty for timeless moments.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group text-center p-6 rounded-lg transition-all duration-500 hover:bg-card">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <Heart className="w-6 h-6 text-gold group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Passion</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Every stroke is infused with love for the art of beauty
              </p>
            </div>

            <div className="group text-center p-6 rounded-lg transition-all duration-500 hover:bg-card">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <Eye className="w-6 h-6 text-gold group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Precision</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Meticulous attention to every detail that matters
              </p>
            </div>

            <div className="group text-center p-6 rounded-lg transition-all duration-500 hover:bg-card">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <Star className="w-6 h-6 text-gold group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Excellence</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Only premium products and techniques
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
