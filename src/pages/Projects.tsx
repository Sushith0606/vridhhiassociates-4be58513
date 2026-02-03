import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import residentialImage from "@/assets/residential-building.jpg";
import commercialImage from "@/assets/commercial-building.jpg";
import renovationImage from "@/assets/renovation.jpg";

type ProjectCategory = "all" | "completed" | "ongoing";

const projects = [
  {
    id: 1,
    title: "Sunset Apartments",
    location: "Vidya Nagar, Hubli",
    category: "Residential",
    status: "completed" as const,
    year: "2023",
    description: "A premium 48-unit residential apartment complex with modern amenities and elegant design.",
    images: [residentialImage],
  },
  {
    id: 2,
    title: "Tech Park Office Complex",
    location: "KSSIDC Industrial Area, Hubli",
    category: "Commercial",
    status: "ongoing" as const,
    year: "2024",
    description: "State-of-the-art office complex with 50,000 sq ft of premium commercial space.",
    images: [commercialImage],
  },
  {
    id: 3,
    title: "Heritage Villa Renovation",
    location: "Old Hubli",
    category: "Renovation",
    status: "completed" as const,
    year: "2023",
    description: "Complete restoration and modernization of a heritage property while preserving its classic charm.",
    images: [renovationImage],
  },
  {
    id: 4,
    title: "Green Valley Villas",
    location: "Vidya Nagar, Hubli",
    category: "Residential",
    status: "completed" as const,
    year: "2022",
    description: "Luxury villa project with 12 independent houses featuring contemporary architecture.",
    images: [residentialImage],
  },
  {
    id: 5,
    title: "Retail Plaza",
    location: "Deshpande Nagar, Hubli",
    category: "Commercial",
    status: "completed" as const,
    year: "2023",
    description: "Modern retail shopping complex with 25 retail outlets and ample parking space.",
    images: [commercialImage],
  },
  {
    id: 6,
    title: "Skyline Residency",
    location: "Navanagar, Hubli",
    category: "Residential",
    status: "ongoing" as const,
    year: "2024",
    description: "Premium high-rise residential project with 96 apartments and world-class amenities.",
    images: [residentialImage],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our projects"
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
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Projects Gallery
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Explore our portfolio of completed and ongoing construction projects across Hubli
              and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { key: "all", label: "All Projects" },
              { key: "completed", label: "Completed" },
              { key: "ongoing", label: "Ongoing" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as ProjectCategory)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === tab.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative h-72">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                            project.status === "completed"
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
                          {project.category} • {project.year}
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
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/50 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-charcoal transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
              />

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      selectedProject.status === "completed"
                        ? "bg-[hsl(142,70%,45%)] text-primary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-5 w-5" />
                  <span>{selectedProject.location}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedProject.year}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Projects;
