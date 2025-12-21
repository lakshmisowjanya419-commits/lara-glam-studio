import { Sparkles, Heart, Eye, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const AboutSection = () => {

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Label */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4"
          >
            About Us
          </motion.p>

          {/* Decorative Element */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          {/* Main Content */}
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-relaxed"
          >
            Where Beauty Meets
            <span className="italic text-gold"> Artistry</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            At <span className="text-gold font-medium">lara_glam_loop</span>, beauty is crafted with precision, 
            elegance, and a deep understanding of individuality. From soft glam looks to bridal elegance, 
            every detail is curated to enhance natural beauty for timeless moments.
          </motion.p>

          {/* Values */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: Heart, title: "Passion", desc: "Every stroke is infused with love for the art of beauty" },
              { icon: Eye, title: "Precision", desc: "Meticulous attention to every detail that matters" },
              { icon: Star, title: "Excellence", desc: "Only premium products and techniques" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center p-6 rounded-lg transition-all duration-500 hover:bg-card hover:shadow-elegant"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-gold group-hover:text-background transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
