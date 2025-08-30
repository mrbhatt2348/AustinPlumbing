import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "2000+", label: "Happy Customers" },
  { number: "24/7", label: "Emergency Service" },
  { number: "100%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
              About <span className="gradient-text">Austin Pro Plumbing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
              For over 15 years, Austin Pro Plumbing has been Austin's trusted family-owned plumbing company. We pride ourselves on delivering fast, reliable, and affordable plumbing services to homeowners and businesses throughout the Austin metropolitan area.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-2">
              Our team of licensed and insured professionals is committed to providing exceptional service with transparent pricing and no hidden fees. From routine maintenance to emergency repairs, we treat every job with the same level of care and attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`stat-${index}`}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.a 
              href="#contact"
              className="btn-gradient text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg inline-flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ y: -2 }}
              data-testid="about-quote-btn"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Get Free Quote
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional plumber working with modern tools" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
