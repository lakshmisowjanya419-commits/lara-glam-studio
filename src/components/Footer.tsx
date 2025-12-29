import logo from "@/assets/logo.jpeg";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Lara Glam Loop Logo" 
              className="h-20 w-20 rounded-full object-cover border-2 border-gold/50"
            />
          </div>
          
          {/* Brand Name */}
          <p className="font-serif text-2xl text-background mb-2">
            LARA<span className="text-gold"> Glam_loop</span>
          </p>
          
          {/* Tagline */}
          <p className="font-sans text-sm text-background/60 tracking-wider mb-6">
            Soft Glam to Bridal Elegance
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            {/* Instagram - Active */}
            <motion.a
              href="https://www.instagram.com/lara_glam_loop/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors duration-300 group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-background group-hover:text-foreground transition-colors duration-300" />
            </motion.a>

            {/* Facebook - Active */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61585750791868"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors duration-300 group"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5 text-background group-hover:text-foreground transition-colors duration-300" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gold mx-auto mb-6" />

          {/* Copyright */}
          <p className="font-sans text-xs text-background/40">
            © {currentYear} LARA Glam_loop. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
