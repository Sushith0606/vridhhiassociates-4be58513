import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Hubli",
    rating: 5,
    text: "Vriddhi Associates transformed our dream home into reality. Their attention to detail and commitment to quality is unmatched. The team was professional throughout the project.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Dharwad",
    rating: 5,
    text: "We chose Vriddhi Associates for our commercial building project and couldn't be happier. They delivered on time and within budget. Highly recommended for any construction needs!",
  },
  {
    id: 3,
    name: "Suresh Patil",
    location: "Hubli",
    rating: 5,
    text: "The renovation work done by Vriddhi Associates exceeded our expectations. They understood our vision perfectly and executed it flawlessly. Truly professional service.",
  },
];

export function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-concrete opacity-10" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Don't just take our word for it. Hear from our satisfied clients who trusted us
            with their construction projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />

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

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/testimonials">
              Read More Testimonials
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
