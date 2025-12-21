import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/918897298801"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elegant hover:shadow-gold transition-shadow duration-300"
      aria-label="Contact on WhatsApp"
    >
      {/* Subtle pulse ring */}
      <span className="absolute inset-0 rounded-full animate-pulse-gold" />
      <MessageCircle className="w-7 h-7 text-background relative z-10" />
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
