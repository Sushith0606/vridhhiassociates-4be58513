import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Hammer, HardHat, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential-building.jpg";
import commercialImage from "@/assets/commercial-building.jpg";
import renovationImage from "@/assets/renovation.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes and apartments built with precision and care.",
    image: residentialImage,
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Modern commercial spaces designed for success.",
    image: commercialImage,
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing spaces into something extraordinary.",
    image: renovationImage,
  },
];

const additionalServices = [
  { icon: HardHat, title: "Civil & Structural Works" },
  { icon: ClipboardList, title: "End-to-End Project Management" },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50 bg-pattern-grid">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential dreams to commercial ventures, we offer end-to-end construction
            services tailored to meet your unique needs.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm border border-border"
            >
              <service.icon className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">{service.title}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="cta" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
