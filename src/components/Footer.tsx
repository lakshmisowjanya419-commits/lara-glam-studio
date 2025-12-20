const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Brand Name */}
          <p className="font-serif text-2xl text-background mb-2">
            lara<span className="text-gold">_</span>glam<span className="text-gold">_</span>loop
          </p>
          
          {/* Tagline */}
          <p className="font-sans text-sm text-background/60 tracking-wider mb-6">
            Soft Glam to Bridal Elegance
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gold mx-auto mb-6" />

          {/* Copyright */}
          <p className="font-sans text-xs text-background/40">
            © {currentYear} lara_glam_loop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
