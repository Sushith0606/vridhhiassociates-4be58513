import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Hubli",
    rating: 5,
    projectType: "Residential",
    text: "Vriddhi Associates transformed our dream home into reality. Their attention to detail and commitment to quality is unmatched. The team was professional throughout the project and delivered on time. I highly recommend them for any construction needs.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Dharwad",
    rating: 5,
    projectType: "Commercial",
    text: "We chose Vriddhi Associates for our commercial building project and couldn't be happier. They delivered on time and within budget. The quality of work exceeded our expectations. Highly recommended for any construction needs!",
  },
  {
    id: 3,
    name: "Suresh Patil",
    location: "Hubli",
    rating: 5,
    projectType: "Renovation",
    text: "The renovation work done by Vriddhi Associates exceeded our expectations. They understood our vision perfectly and executed it flawlessly. Truly professional service from start to finish.",
  },
  {
    id: 4,
    name: "Anita Kulkarni",
    location: "Gadag",
    rating: 5,
    projectType: "Residential",
    text: "Building a home is a big decision, and we're so glad we chose Vriddhi Associates. Their team was supportive, communicative, and delivered a beautiful home. The craftsmanship is exceptional.",
  },
  {
    id: 5,
    name: "Mahesh Hegde",
    location: "Hubli",
    rating: 5,
    projectType: "Commercial",
    text: "Our office building was completed ahead of schedule with impeccable quality. The project management was excellent, and they kept us informed at every step. Great experience working with them.",
  },
  {
    id: 6,
    name: "Rekha Desai",
    location: "Belgaum",
    rating: 5,
    projectType: "Residential",
    text: "From the initial consultation to the final handover, Vriddhi Associates demonstrated professionalism and expertise. Our new apartment is exactly what we envisioned. Thank you for making our dream come true!",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Client testimonials"
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
              Testimonials
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Don't just take our word for it. Hear from our satisfied clients who trusted us
              with their construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 shadow-md border border-border relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />

                {/* Project Type */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {testimonial.projectType}
                </span>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Start your construction journey with us today and experience the Vriddhi difference.
            </p>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
