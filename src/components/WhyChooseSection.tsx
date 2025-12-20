import { Gem, User, Sparkles, Eye, Star } from "lucide-react";

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

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            The <span className="italic text-gold">Difference</span> is in the Details
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group flex items-start gap-6 p-6 rounded-lg transition-all duration-300 hover:bg-background ${
                index !== reasons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-champagne flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <reason.icon className="w-5 h-5 text-gold group-hover:text-background transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
