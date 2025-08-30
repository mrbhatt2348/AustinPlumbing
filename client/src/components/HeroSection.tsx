import { motion } from "framer-motion";
import { Phone, Wrench } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 hero-parallax"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 gradient-bg opacity-85" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="floating"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            Austin Pro Plumbing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-tagline"
          >
            Fast & Reliable Plumbing in Austin, TX
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-blue-200 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-testid="hero-description"
          >
            Emergency repairs • Water heater installation • Drain cleaning • Licensed & insured professionals serving Austin and surrounding areas 24/7
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="tel:+15125551234" 
            className="btn-gradient text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg flex items-center"
            data-testid="hero-call-btn"
          >
            <Phone className="mr-3 h-6 w-6" />
            Call (512) 555-1234
          </a>
          <button 
            onClick={scrollToServices}
            className="bg-white/20 glass-card text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-white/30 transition-all flex items-center"
            data-testid="hero-services-btn"
          >
            <Wrench className="mr-3 h-6 w-6" />
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
