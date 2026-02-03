import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Civil & Structural Works",
  "Project Management",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-extrabold text-xl">V</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-sand-dark rounded-sm" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Vriddhi Associates</h3>
                <p className="text-sm text-primary-foreground/70">Building Trust. Creating Value.</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We are committed to delivering exceptional construction services with quality,
              transparency, and on-time delivery. Your trusted partner for building dreams.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8792076681"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                  <span>+91 8792076681 (Paddu)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Vridhhiassociates@gmail.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                  <span>Vridhhiassociates@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span>
                  Vriddhi Associates,<br />
                  B-14 Marvel Artiza,<br />
                  Opposite Kim's, Vidya Nagar,<br />
                  Hubli – 580021
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Vriddhi Associates | Strong Foundations. Lasting Relationships.</p>
          <p>Designed with excellence in mind</p>
        </div>
      </div>
    </footer>
  );
}
