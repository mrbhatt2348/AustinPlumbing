import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-testid="floating-call-button"
    >
      <a 
        href="tel:+15125551234" 
        className="btn-gradient text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 block"
        data-testid="floating-call-link"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Emergency Call</span>
      </a>
    </motion.div>
  );
}
