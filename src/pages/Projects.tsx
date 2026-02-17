import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import algorithmCover from "@/assets/algorithm-syllabus-cover.png";

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
    title: "Project Two",
    subtitle: "eLearning Module",
    description:
      "Interactive learning experience designed with behavioral science principles and measurable outcomes at its core.",
    colorBlock: "green" as const,
    slug: "project-two",
  },
  {
    title: "Project Three",
    subtitle: "UX & Learning",
    description:
      "A case study bridging user experience design and instructional methodology to create impactful learning moments.",
    colorBlock: "pink" as const,
    slug: "project-three",
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
