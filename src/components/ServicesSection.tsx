import { Sparkles, Palette, Scissors, Heart, Crown } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    title: "Soft Glam Makeup",
    description: "Enhance your natural beauty with effortless, luminous looks perfect for any occasion.",
  },
  {
    icon: Crown,
    title: "Bridal Elegance",
    description: "Timeless bridal looks that capture the magic of your special day with grace and sophistication.",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "From elegant updos to flowing waves, bespoke hairstyling that complements your look.",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Luxurious nail designs that add the perfect finishing touch to your ensemble.",
  },
  {
    icon: Heart,
    title: "Saree Draping",
    description: "Expert draping techniques that create stunning silhouettes for traditional elegance.",
  },
];

const coverage = [
  { icon: "💍", label: "Weddings" },
  { icon: "🎀", label: "Events" },
  { icon: "📸", label: "Shoots" },
  { icon: "✈️", label: "Travel-ready" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Crafted with <span className="italic text-gold">Elegance</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A curated selection of premium beauty services designed to elevate your presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px -15px hsl(40 60% 50% / 0.15)",
                transition: { duration: 0.3 } 
              }}
              className="luxury-card group p-8 text-center hover:bg-background cursor-default"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne to-peach flex items-center justify-center group-hover:from-gold group-hover:to-gold-light transition-all duration-500">
                <service.icon className="w-7 h-7 text-gold group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Coverage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Service Coverage
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {coverage.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-background rounded-full border border-border hover:border-gold hover:shadow-soft transition-all duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-sans text-sm text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
