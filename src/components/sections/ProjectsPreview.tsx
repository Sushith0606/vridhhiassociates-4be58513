import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential-building.jpg";
import commercialImage from "@/assets/commercial-building.jpg";
import renovationImage from "@/assets/renovation.jpg";

const projects = [
  {
    id: 1,
    title: "Sunrise Apartments",
    location: "Vidya Nagar, Hubli",
    category: "Residential",
    status: "Completed",
    image: residentialImage,
  },
  {
    id: 2,
    title: "Tech Park Office Complex",
    location: "KSSIDC Industrial Area",
    category: "Commercial",
    status: "Ongoing",
    image: commercialImage,
  },
  {
    id: 3,
    title: "Heritage Villa Renovation",
    location: "Old Hubli",
    category: "Renovation",
    status: "Completed",
    image: renovationImage,
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-[hsl(142,70%,45%)] text-primary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm text-primary-foreground/70 font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-primary-foreground mt-1 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
