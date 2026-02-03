import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Users, Award, Building } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct our business with honesty and transparency in every interaction.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on the quality of materials and workmanship.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver.",
  },
  {
    icon: Building,
    title: "Excellence",
    description: "We strive for excellence in every project, big or small.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Skilled Workers" },
];

const About = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction site"
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Dreams Since Day One
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Learn about our journey, our values, and our commitment to delivering exceptional
              construction services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img
                  src={aboutTeamImage}
                  alt="Vriddhi Associates team"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <span className="block text-3xl font-heading font-bold">10+</span>
                  <span className="text-sm">Years of Trust</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted Construction Partner in Hubli
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vriddhi Associates was founded with a simple yet powerful vision: to deliver
                construction excellence while building lasting relationships with our clients.
                Based in Hubli, we have grown to become one of the most trusted names in
                residential and commercial construction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of skilled professionals brings together decades of combined experience
                in architecture, engineering, and construction management. We take pride in our
                ability to understand each client's unique requirements and deliver solutions
                that exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["Quality Materials", "Skilled Team", "On-Time Delivery", "Transparent Pricing"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card p-8 lg:p-10 rounded-2xl shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction services that transform our clients' visions
                into reality, while maintaining the highest standards of quality, safety, and
                professionalism. We are committed to building structures that stand the test of
                time and relationships that last a lifetime.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 lg:p-10 rounded-2xl shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred construction company in Karnataka, known
                for our unwavering commitment to quality, innovation, and customer satisfaction.
                We envision building a legacy of excellence that inspires and shapes the future
                of construction in India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values define who we are and how we approach every project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="block text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/80 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
