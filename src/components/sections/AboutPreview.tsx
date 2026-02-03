import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeamImage from "@/assets/about-team.jpg";

const values = [
  "Commitment to Quality",
  "Transparent Communication",
  "On-Time Project Delivery",
  "Skilled Professional Team",
];

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutTeamImage}
                alt="Vriddhi Associates construction team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-center">
                <span className="block text-4xl font-heading font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Vriddhi Associates
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Excellence with{" "}
              <span className="text-primary">Trust & Integrity</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Vriddhi Associates, we believe in building more than structures – we build
              lasting relationships. With years of experience in the construction industry,
              we have established ourselves as a trusted name for quality construction,
              delivering projects that stand the test of time.
            </p>

            <ul className="space-y-4 mb-8">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
