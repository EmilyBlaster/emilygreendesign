import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import peoplesProfessorsCover from "@/assets/peoples-professors-cover.png";
import ethicalAiCover from "@/assets/ethical-ai-cover.png";
import ethicalAiInfographic from "@/assets/ethical-ai-infographic.png";

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
    colorBlock: "bg-block-pink",
    courseUrl: "https://ethical-ai-healthcare-infographic.lovable.app",
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
      "In an era where digital content creation has become a viable career path, aspiring creators face a unique challenge: developing the multifaceted skills needed to succeed. Creator's Quest transforms this journey into an engaging, gamified role-playing experience. Players create a character, make meaningful choices that affect their stats — followers, authenticity, burnout, and income — and discover one of multiple endings based on their decisions. The game takes 10–15 minutes and every choice matters.",
    audience:
      "Aspiring content creators navigating five key dimensions — authenticity, growth, quality, business, and community — reflecting real-world content creation strategies. Players learn platform strategy, authenticity balance, sustainable growth, and monetization ethics through interactive gameplay.",
    outcomes:
      "Through interactive puzzles and quizzes, players develop skills across four learning areas: platform strategy (matching content to the right audience), authenticity balance (staying true while growing reach), sustainable growth (building without burning out), and monetization ethics (making money without compromising values). A branching narrative ensures player agency, and multiple endings — Influencer, Educator, Entrepreneur, or other paths — reinforce that every decision has real consequences.",
    methodology:
      "Creator's Quest falls into the category of \"serious games\" — interactive applications designed beyond entertainment to incorporate educational objectives. Research consistently demonstrates that gamification significantly enhances learning outcomes: Li et al. (2023) found a large effect size (g = 0.822) across 5,071 participants, and Lampropoulos & Sidiropoulos (2024) confirmed 39% improved success rates and 130% improved excellence rates compared to online learning. The game incorporates progressive skill development (Dehghanzadeh et al., 2024), safe failure environments for experimentation (De Gloria et al., 2014), and situated cognition through real-world trade-offs.",
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
              {slug === "the-algorithm-syllabus" && (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img
                    src={peoplesProfessorsCover}
                    alt="The People's Professors — Content Creator Strategies for Learning Design"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              {slug === "ethical-ai-healthcare" && (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img
                    src={ethicalAiCover}
                    alt="Ethical AI Prompt Engineering — LMS & Content Design"
                    className="w-full h-auto rounded-lg"
                  />
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
              {slug === "ethical-ai-healthcare" && (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img
                    src={ethicalAiInfographic}
                    alt="Ethical AI Prompt Engineering — Learning Journey Infographic"
                    className="w-full h-auto rounded-lg"
                  />
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

          {/* Ethical AI Video */}
          {slug === "ethical-ai-healthcare" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16"
            >
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="font-display text-3xl tracking-wider mb-4 text-foreground">
                  Course Walkthrough
                </h2>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Watch the walkthrough below for an overview of the microcredential's structure, mobile-first design, and progressive badge system.
                </p>
              </div>
              <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border">
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1139728982?h=&title=0&byline=0&portrait=0"
                    title="Ethical AI for Healthcare — Course Walkthrough"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Creator's Quest Video */}
          {slug === "creators-quest" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16"
            >
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="font-display text-3xl tracking-wider mb-4 text-foreground">
                  Game Preview
                </h2>
                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Watch the introduction below for a preview of the Creator's Quest experience — featuring character creation, branching narratives, and the real-world trade-offs that drive gameplay.
                </p>
              </div>
              <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border">
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1127634132?h=&title=0&byline=0&portrait=0"
                    title="Creator's Quest — Game Preview"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
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
                  {slug === "creators-quest" ? "Launch the Game" : "Launch the Learning Journey"}
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
