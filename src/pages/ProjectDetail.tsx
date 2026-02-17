import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import peoplesProfessorsCover from "@/assets/peoples-professors-cover.png";

const projectData: Record<string, {
  title: string;
  subtitle: string;
  colorBlock: string;
  overview: string;
  audience: string;
  outcomes: string;
  methodology: string;
  courseUrl?: string;
}> = {
  "the-algorithm-syllabus": {
    title: "The Algorithm Syllabus",
    subtitle: "Interactive eLearning",
    colorBlock: "bg-block-pink",
    courseUrl: "https://emilyblaster.github.io/The-People-s-Professors/#/",
    overview:
      "\"The algorithm has become the new syllabus.\" This interactive eLearning experience explores the 5 strategies TikTok creators use to teach millions — and shows how to apply them to workplace nano-learning. Built as a DIY zine-style web app, it connects creators to a history of grassroots publishing that challenges gatekeeping.",
    audience:
      "Workplace learning designers and L&D professionals looking to leverage short-form video strategies for nano-learning. Learners explore five creator strategies — Hook, Chunking, Visual, Engagement, and Sequencing — through a gamified sticker collection system.",
    outcomes:
      "Learners identify and apply five TikTok creator strategies to workplace nano-learning contexts. A gamified sticker system tracks mastery of each strategy section, and an AI-powered chatbot (\"The Algorithm\") provides on-demand support, tips, and research context.",
    methodology:
      "Grounded in Mayer's Multimedia Principles, Merrill's First Principles of Instruction, Vygotsky's scaffolding theory, and research on TikTok as nano-learning (Khlaif & Salha, 2021) and participatory culture (Jenkins et al., 2009).",
  },
  "ethical-ai-healthcare": {
    title: "Ethical AI for Healthcare",
    subtitle: "Microcredential",
    colorBlock: "bg-block-green",
    courseUrl: "https://ethical-ai-healthcare-infographic.lovable.app/",
    overview:
      "A mobile-first microcredential designed for healthcare professionals navigating generative AI in clinical and administrative settings. Rather than treating AI training like another compliance checkbox, this course focuses on application over theory — teaching learners to write ethical prompts, identify bias in AI outputs, and maintain HIPAA compliance in real workflows.",
    audience:
      "Healthcare workers — nurses, administrators, and physicians — who are already using AI tools like ChatGPT in their daily work, with or without formal guidance. The course meets them where they are: on their phones, between patient rounds, during lunch breaks.",
    outcomes:
      "Learners develop four critical competencies: ethical prompt engineering while maintaining patient privacy, HIPAA-compliant AI use, bias identification in AI-generated content, and practical implementation skills for integrating AI into team workflows. Every module ends with practical demonstration, not knowledge checks.",
    methodology:
      "Six modules over 4.75 hours following a progressive structure: Modules 1–2 build AI fundamentals and prompt engineering foundations, Modules 3–4 cover clinical and administrative applications, and Modules 5–6 tackle ethics, bias mitigation, and team implementation. Built on SC Training (formerly EdApp) for mobile-first microlearning with SCORM compliance. Progressive badges lead to a final certificate.",
  },
  "creators-quest": {
    title: "Creator's Quest",
    subtitle: "Educational RPG",
    colorBlock: "bg-block-pink",
    courseUrl: "https://creatorquest.emilygreendesign.com/",
    overview:
      "An educational role-playing game that transforms the content creator journey into an engaging, gamified learning experience. Players create a character, make meaningful choices that affect their stats — followers, authenticity, burnout, and income — and discover one of multiple endings based on their decisions. The game takes 10–15 minutes and every choice matters.",
    audience:
      "Aspiring content creators facing the challenge of developing multifaceted skills needed to succeed in the creator economy. Players navigate five key dimensions — authenticity, growth, quality, business, and community — reflecting real-world content creation strategies.",
    outcomes:
      "Learners develop skills across platform strategy, authenticity balance, sustainable growth, and monetization ethics. Through interactive puzzles and quizzes, players unlock knowledge while experiencing real-world trade-offs between energy, finances, mental health, and community relationships. Multiple pathways ensure player agency and engagement.",
    methodology:
      "Grounded in serious game design principles and evidence-based gamification research. Li et al. (2023) found gamification produces a large effect size (g = 0.822) on learning outcomes. The game incorporates progressive skill development, branching narratives for player agency, safe failure environments for experimentation, and adaptive difficulty adjustment. Research by Dehghanzadeh et al. (2024), De Gloria et al. (2014), and Lampropoulos & Sidiropoulos (2024) informed the design approach.",
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
              {slug === "the-algorithm-syllabus" ? (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img
                    src={peoplesProfessorsCover}
                    alt="The People's Professors — Content Creator Strategies for Learning Design"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="mt-8 aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="font-display text-sm tracking-widest text-muted-foreground">
                    Add project image here
                  </p>
                </div>
              )}
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
              {slug !== "the-algorithm-syllabus" && (
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
              )}
            </ContentSection>
          </div>

          {/* Showcase embed — full width */}
          {slug === "the-algorithm-syllabus" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16"
            >
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="font-display text-3xl tracking-wider mb-4 text-foreground">
                  Interactive Showcase
                </h2>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Explore the full interactive showcase below — featuring the DIY zine aesthetic, the gamified sticker collection system, the AI-powered "Algorithm" chatbot, and the research foundation behind the design decisions.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://emilyblaster.github.io/peoples-professors-design/showcase.html"
                  title="The People's Professors — Showcase"
                  className="w-full border-0"
                  style={{ height: "3200px" }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}

          <div className="max-w-3xl mx-auto mt-16">
            {project.courseUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-4"
              >
                <a
                  href={project.courseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-display text-lg tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Launch the Course
                  <ExternalLink size={20} />
                </a>
              </motion.div>
            )}
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
