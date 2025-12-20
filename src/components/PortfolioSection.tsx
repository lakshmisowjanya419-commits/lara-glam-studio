import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";

const portfolioItems = [
  { src: portfolio1, category: "Bridal", alt: "Elegant bridal makeup" },
  { src: portfolio2, category: "Event", alt: "Glamorous event look" },
  { src: portfolio3, category: "Photoshoot", alt: "Natural dewy makeup" },
  { src: portfolio4, category: "Bridal", alt: "Traditional bridal look" },
  { src: portfolio5, category: "Nails", alt: "Gold luxury nails" },
  { src: portfolio6, category: "Hair", alt: "Elegant bridal updo" },
  { src: portfolio7, category: "Bridal", alt: "Soft smoky bridal eyes" },
  { src: portfolio8, category: "Bridal", alt: "South Asian bridal look" },
  { src: portfolio9, category: "Event", alt: "Bold evening glam" },
  { src: portfolio10, category: "Nails", alt: "French tip with gold" },
  { src: portfolio11, category: "Hair", alt: "Romantic curls with flowers" },
  { src: portfolio12, category: "Photoshoot", alt: "Fresh natural beauty" },
];

const categories = ["All", "Bridal", "Event", "Photoshoot", "Nails", "Hair"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            A Gallery of <span className="italic text-gold">Elegance</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-sans text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-background"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-champagne"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-light mb-1">
                  {item.category}
                </p>
                <p className="font-serif text-sm text-background">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
