import { Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">V H Tech</h3>
            <p className="text-sm opacity-90">
              Leading supplier of high-quality undercarriage parts for heavy equipment across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/inquiry" className="text-sm hover:text-accent transition-colors">
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919824235838"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 9824235838
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9824235838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:vhtech25@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  vhtech25@gmail.com
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/v_h_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/V-H-Tech/100094656767801/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} V H Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
