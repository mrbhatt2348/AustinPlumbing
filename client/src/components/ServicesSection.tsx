import { motion } from "framer-motion";
import { Waves, Droplets, Flame, AlertTriangle, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and unclogging services for sinks, toilets, and main lines.",
  },
  {
    icon: Droplets,
    title: "Leak Repair",
    description: "Fast leak detection and repair for pipes, faucets, and fixtures throughout your property.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    description: "Installation, repair, and maintenance of traditional and tankless water heaters.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent repairs and water damage prevention.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Professional plumbing services for Austin homes and businesses. Fast response times, competitive pricing, and guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-card rounded-xl p-8 shadow-lg border border-border text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              data-testid={`service-card-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <a 
                href="tel:+15125551234" 
                className="text-primary font-semibold hover:text-accent transition-colors flex items-center justify-center"
                data-testid={`service-cta-${index}`}
              >
                Get Service <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="btn-gradient text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="services-schedule-btn"
          >
            <Phone className="mr-3 h-5 w-5" />
            Schedule Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
