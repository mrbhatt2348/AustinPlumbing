import { Wrench, Facebook, Star, Phone, Mail, MapPin } from "lucide-react";
import { FaYelp, FaGoogle } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
    { label: "Reviews", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer className="gradient-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center" data-testid="footer-logo">
              <Wrench className="mr-2 h-6 w-6" />
              Austin Pro Plumbing
            </div>
            <p className="text-blue-100 mb-4" data-testid="footer-description">
              Fast & reliable plumbing services in Austin, TX. Licensed, insured, and available 24/7 for emergency repairs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-google"
              >
                <FaGoogle className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-yelp"
              >
                <FaYelp className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="footer-links-title">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-200 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.href}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="footer-contact-title">Contact Info</h4>
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a 
                  href="tel:+15125551234" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  (512) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a 
                  href="mailto:info@austinproplumbing.com" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  info@austinproplumbing.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 mt-0.5" />
                <span data-testid="footer-address">123 Plumber Lane, Austin, TX 78701</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-8 pt-8 text-center text-blue-200">
          <p data-testid="footer-copyright">
            &copy; 2024 Austin Pro Plumbing. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
