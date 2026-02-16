import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, {
  title: string;
  subtitle: string;
  colorBlock: string;
  overview: string;
  audience: string;
  outcomes: string;
  methodology: string;
}> = {
  "project-one": {
    title: "Project One",
    subtitle: "Instructional Design",
    colorBlock: "bg-block-blue",
    overview:
      "This project explores evidence-based instructional strategies designed to promote genuine behavior change rather than mere compliance. Replace this with your actual project description, including context and significance.",
    audience:
      "Describe your target audience here — their demographics, prior knowledge, learning context, and any relevant characteristics that informed your design decisions.",
    outcomes:
      "List the specific, measurable learning outcomes this project aimed to achieve. Explain how each outcome connects to real-world behavior change and performance improvement.",
    methodology:
      "Detail the research methodologies you employed — needs analysis, formative evaluation, user testing, iterative design processes, and any theoretical frameworks that guided your approach.",
  },
  "project-two": {
    title: "Project Two",
    subtitle: "eLearning Module",
    colorBlock: "bg-block-green",
    overview:
      "An interactive eLearning experience built on behavioral science principles. Replace this with your actual project description, discussing the problem space and your design approach.",
    audience:
      "Describe the learners this module was designed for. What were their needs, motivations, and existing skill levels?",
    outcomes:
      "What measurable outcomes did this project target? How did you assess whether learners achieved genuine understanding and behavior transfer?",
    methodology:
      "Explain your research and design process — from analysis through development and evaluation. What tools, frameworks, and methods shaped this work?",
  },
  "project-three": {
    title: "Project Three",
    subtitle: "UX & Learning",
    colorBlock: "bg-block-pink",
    overview:
      "A case study at the intersection of UX design and instructional methodology. Replace this with your actual project narrative and design rationale.",
    audience:
      "Who were the users/learners? What user research informed your understanding of their needs and pain points?",
    outcomes:
      "What learning and usability outcomes were targeted? How did you measure success across both UX and instructional dimensions?",
    methodology:
      "Describe the blended methodology — UX research techniques combined with instructional design frameworks. How did these approaches complement each other?",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-display text-2xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-display text-sm tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${project.colorBlock} rounded-xl p-12 md:p-20 mb-16`}
          >
            <p className="font-display text-lg tracking-[0.3em] opacity-70 mb-2">
              {project.subtitle}
            </p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              {project.title}
            </h1>
          </motion.div>

          {/* Content sections */}
          <div className="max-w-3xl mx-auto space-y-16">
            <ContentSection title="Overview" delay={0.1}>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
              {/* Placeholder for images */}
              <div className="mt-8 aspect-video rounded-lg bg-muted flex items-center justify-center">
                <p className="font-display text-sm tracking-widest text-muted-foreground">
                  Add project image here
                </p>
              </div>
            </ContentSection>

            <ContentSection title="Target Audience" delay={0.2}>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                {project.audience}
              </p>
            </ContentSection>

            <ContentSection title="Learning Outcomes" delay={0.3}>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                {project.outcomes}
              </p>
            </ContentSection>

            <ContentSection title="Research Methodology" delay={0.4}>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                {project.methodology}
              </p>
              {/* Placeholder for additional images */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                  <p className="font-display text-xs tracking-widest text-muted-foreground text-center px-4">
                    Add image
                  </p>
                </div>
                <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                  <p className="font-display text-xs tracking-widest text-muted-foreground text-center px-4">
                    Add image
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContentSection = ({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h2 className="font-display text-3xl tracking-wider mb-6 text-foreground">
      {title}
    </h2>
    {children}
  </motion.div>
);

export default ProjectDetail;
