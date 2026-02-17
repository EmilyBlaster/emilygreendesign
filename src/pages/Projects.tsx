import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import algorithmCover from "@/assets/algorithm-syllabus-cover.png";
import ethicalAiCover from "@/assets/ethical-ai-cover.png";

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
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="font-display text-6xl md:text-8xl tracking-wider">
              Projects
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl">
              Selected capstone projects demonstrating instructional design thinking, research methodology, and measurable learning outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
