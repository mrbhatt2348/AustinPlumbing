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

      {/* Mobile Menu - Full Screen Slide Down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] md:hidden overflow-y-auto"
            data-testid="mobile-menu"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="text-xl font-bold text-white flex items-center">
                <Wrench className="mr-2 h-6 w-6 text-white" />
                Austin Pro Plumbing
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-blue-500/20 p-2 rounded-lg transition-colors"
                data-testid="mobile-menu-close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="px-6 py-8">
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-home"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🏠</span>
                    <span>Home</span>
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-services"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🔧</span>
                    <span>Services</span>
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-about"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">ℹ️</span>
                    <span>About</span>
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-testimonials"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">⭐</span>
                    <span>Reviews</span>
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-4 text-lg w-full text-left font-medium rounded-lg border border-transparent hover:border-blue-200"
                  data-testid="mobile-nav-contact"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📞</span>
                    <span>Contact</span>
                  </div>
                </button>
              </div>
              
              {/* Call Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="tel:+15125551234"
                  className="btn-gradient text-white px-8 py-4 rounded-xl text-xl font-bold text-center shadow-lg w-full block"
                  data-testid="mobile-call-now"
                >
                  <Phone className="inline mr-3 h-6 w-6" />
                  Call (512) 555-1234
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
