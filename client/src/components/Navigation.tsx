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

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            data-testid="mobile-menu-backdrop"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-[70] md:hidden border-l border-gray-200 dark:border-gray-700"
            style={{ maxWidth: "80vw" }}
            data-testid="mobile-menu"
          >
            <div className="p-6 h-full overflow-y-auto">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="float-right text-gray-600 dark:text-gray-300 hover:text-primary"
                data-testid="mobile-menu-close"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="clear-both pt-8 space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block text-gray-800 dark:text-gray-200 hover:text-primary transition-colors py-3 text-xl w-full text-left font-medium border-b border-gray-100 dark:border-gray-700"
                    data-testid={`mobile-nav-${item.href}`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="tel:+15125551234"
                  className="block btn-gradient text-white px-6 py-4 rounded-xl text-xl font-bold mt-8 text-center shadow-lg"
                  data-testid="mobile-call-now"
                >
                  <Phone className="inline mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
