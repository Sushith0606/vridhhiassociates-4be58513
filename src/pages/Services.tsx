import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Hammer, HardHat, ClipboardList, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import residentialImage from "@/assets/residential-building.jpg";
import commercialImage from "@/assets/commercial-building.jpg";
import renovationImage from "@/assets/renovation.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Build your dream home with us. From individual houses to apartment complexes, we bring your residential vision to life with quality craftsmanship and attention to detail.",
    features: [
      "Custom home design and construction",
      "Apartment and villa projects",
      "Duplex and row houses",
      "Foundation to finishing services",
    ],
    image: residentialImage,
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Create impressive commercial spaces that reflect your business's success. We specialize in office buildings, retail spaces, and industrial facilities.",
    features: [
      "Office buildings and complexes",
      "Retail and shopping centers",
      "Warehouse and industrial facilities",
      "Corporate campus development",
    ],
    image: commercialImage,
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform your existing spaces into something extraordinary. Our renovation services breathe new life into homes and commercial properties.",
    features: [
      "Complete home renovation",
      "Kitchen and bathroom remodeling",
      "Commercial space upgrades",
      "Heritage building restoration",
    ],
    image: renovationImage,
  },
  {
    icon: HardHat,
    title: "Civil & Structural Works",
    description:
      "Expert civil engineering solutions for all your construction needs. We ensure structural integrity and compliance with all building codes.",
    features: [
      "Structural design and analysis",
      "Foundation and basement work",
      "Retaining walls and earthwork",
      "Site development and grading",
    ],
    image: heroImage,
  },
  {
    icon: ClipboardList,
    title: "End-to-End Project Management",
    description:
      "Complete project management services from concept to completion. We handle every aspect so you can focus on what matters most.",
    features: [
      "Project planning and scheduling",
      "Budget management and cost control",
      "Quality assurance and compliance",
      "Vendor and contractor coordination",
    ],
    image: commercialImage,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              From residential dreams to commercial ventures, we offer complete construction
              services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="cta" asChild>
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose Vriddhi Associates?
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring expertise, integrity, and dedication to every project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ruler,
                title: "Expert Planning",
                description: "Detailed project planning and execution strategies.",
              },
              {
                icon: HardHat,
                title: "Skilled Team",
                description: "Experienced professionals dedicated to excellence.",
              },
              {
                icon: ClipboardList,
                title: "Transparent Process",
                description: "Clear communication and regular project updates.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-8 rounded-xl shadow-sm border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can bring
              your vision to life.
            </p>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Us Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
