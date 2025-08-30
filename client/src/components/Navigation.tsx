import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Wrench } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
    { label: "Reviews", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-[55]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold gradient-text flex items-center">
              <Wrench className="mr-2 h-6 w-6" />
              Austin Pro Plumbing
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                  data-testid={`nav-${item.href}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+15125551234"
                className="btn-gradient text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                data-testid="nav-call-now"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] md:hidden flex items-center justify-center"
            data-testid="mobile-menu"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 w-80 max-w-[90vw] max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold text-gray-800 flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-blue-600" />
                  Austin Pro
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100"
                  data-testid="mobile-menu-close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-3 mb-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-home"
                >
                  🏠 Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-services"
                >
                  🔧 Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-about"
                >
                  ℹ️ About
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-testimonials"
                >
                  ⭐ Reviews
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-contact"
                >
                  📞 Contact
                </button>
              </div>
              
              {/* Call Button */}
              <div className="pt-6 border-t border-gray-200">
                <a
                  href="tel:+15125551234"
                  className="btn-gradient text-white px-6 py-4 rounded-xl text-lg font-bold text-center shadow-lg w-full block"
                  data-testid="mobile-call-now"
                >
                  <Phone className="inline mr-2 h-5 w-5" />
                  Call (512) 555-1234
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
