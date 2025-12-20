import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-110 animate-pulse-gold"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-background" />
    </a>
  );
};

export default WhatsAppFloatingButton;
