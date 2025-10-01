import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/stryde-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Stryde Logo" className="h-10 w-10" />
              <span className="text-xl font-bold font-['Poppins']">STRYDE</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Practical solutions to grow your business through automation, websites, and data services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/automation" className="text-muted-foreground hover:text-primary transition-colors">
                  Automation & Tools
                </Link>
              </li>
              <li>
                <Link to="/websites" className="text-muted-foreground hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/data-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:realstryde@gmail.com" className="hover:text-primary transition-colors">
                  realstryde@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 7349065512</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Stryde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
