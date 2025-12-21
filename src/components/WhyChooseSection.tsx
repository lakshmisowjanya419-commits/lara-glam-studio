import { Gem, User, Sparkles, Eye, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: Gem,
    title: "Premium Products Only",
    description: "We use only the finest, luxury beauty products from trusted brands.",
  },
  {
    icon: User,
    title: "Personalized Glam Looks",
    description: "Every look is tailored to enhance your unique features and style.",
  },
  {
    icon: Sparkles,
    title: "Calm, Professional Experience",
    description: "Enjoy a serene, stress-free beauty session in our care.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Meticulous precision in every aspect, from lashes to finishing touches.",
  },
  {
    icon: Star,
    title: "Trusted by Elite Clients",
    description: "Preferred choice for high-profile weddings and exclusive events.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-card">
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
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            The <span className="italic text-gold">Difference</span> is in the Details
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 } 
              }}
              className={`group flex items-start gap-6 p-6 rounded-lg transition-all duration-300 hover:bg-background hover:shadow-soft ${
                index !== reasons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-300"
              >
                <reason.icon className="w-5 h-5 text-gold group-hover:text-background transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
