import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import DemoReel from "@/components/DemoReel";
import Footer from "@/components/Footer";
import FloatingAlert from "@/components/FloatingAlert";
import { motion } from "framer-motion";
import algorithmCover from "@/assets/algorithm-syllabus-cover.png";
import ethicalAiCover from "@/assets/ethical-ai-cover.png";
import creatorsQuestCover from "@/assets/creators-quest-cover.jpg";

const projects = [
  {
    title: "The Algorithm Syllabus",
    subtitle: "Interactive eLearning",
    description:
      "Learn the 5 strategies TikTok creators use to teach millions — and apply them to workplace nano-learning.",
    colorBlock: "blue" as const,
    slug: "the-algorithm-syllabus",
    coverImage: algorithmCover,
  },
  {
    title: "Ethical AI for Healthcare",
    subtitle: "Microcredential",
    description:
      "A mobile-first microcredential teaching healthcare professionals to use AI ethically — covering HIPAA compliance, bias identification, and prompt engineering.",
    colorBlock: "green" as const,
    slug: "ethical-ai-healthcare",
    coverImage: ethicalAiCover,
  },
  {
    title: "Creator's Quest",
    subtitle: "Educational RPG",
    description:
      "A gamified role-playing experience where aspiring content creators develop real-world skills through meaningful choices, trade-offs, and branching narratives.",
    colorBlock: "pink" as const,
    slug: "creators-quest",
    coverImage: creatorsQuestCover,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-wider">
              Selected Projects
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl">
              Projects from the Instructional Design & Technology MS program — each grounded in research and focused on real outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <DemoReel />
      <Footer />
      <FloatingAlert />
    </div>
  );
};

export default Index;
