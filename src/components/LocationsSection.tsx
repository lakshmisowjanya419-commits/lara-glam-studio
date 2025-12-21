import { MapPin, Plane } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { name: "Guntur", available: true },
  { name: "Vijayawada", available: true },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Section Label */}
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Locations
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-10">
            Serving Clients <span className="italic text-gold">In</span>
          </h2>

          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex items-center gap-3 px-8 py-4 bg-card rounded-full border border-border hover:border-gold hover:shadow-gold transition-all duration-500"
              >
                <MapPin className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                  {location.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Travel Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Plane className="w-4 h-4 text-gold" />
            <p className="font-sans text-sm">
              Available for travel across locations
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
