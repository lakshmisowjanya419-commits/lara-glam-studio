import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
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

          {/* Divider */}
          <div className="w-16 h-px bg-gold mx-auto mb-6" />

          {/* Copyright */}
          <p className="font-sans text-xs text-background/40">
            © {currentYear} LARA Glam_loop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
