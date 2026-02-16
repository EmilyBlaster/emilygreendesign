import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-display text-6xl md:text-8xl tracking-wider">
              Resume
            </h1>
            <div className="mt-6 flex gap-4">
              <button className="inline-flex items-center gap-2 bg-block-dark font-display text-sm tracking-[0.2em] px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Education */}
            <ResumeSection title="Education">
              <ResumeItem
                title="MS Instructional Design & Technology"
                org="Your University"
                date="Expected 2026"
                details="Focus on learning experience design, behavioral science, and educational technology."
              />
            </ResumeSection>

            {/* Experience */}
            <ResumeSection title="Experience">
              <ResumeItem
                title="Learning Experience Designer"
                org="Your Organization"
                date="2024 — Present"
                details="Designed and developed engaging learning experiences using evidence-based strategies. Led needs analysis, created multimedia content, and conducted formative evaluations."
              />
              <ResumeItem
                title="Previous Role"
                org="Previous Organization"
                date="2022 — 2024"
                details="Replace with your actual experience. Focus on outcomes and impact rather than just responsibilities."
              />
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Skills">
              <div className="flex flex-wrap gap-3">
                {[
                  "Instructional Design",
                  "eLearning Development",
                  "UX Research",
                  "Behavioral Science",
                  "Articulate Storyline",
                  "Adobe Creative Suite",
                  "Video Production",
                  "Storyboarding",
                  "Needs Analysis",
                  "Figma",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted font-display text-xs tracking-widest px-4 py-2 rounded-full text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="font-display text-3xl tracking-wider mb-6 pb-3 border-b-2 border-primary">
      {title}
    </h2>
    <div className="space-y-8">{children}</div>
  </div>
);

const ResumeItem = ({
  title,
  org,
  date,
  details,
}: {
  title: string;
  org: string;
  date: string;
  details: string;
}) => (
  <div>
    <h3 className="font-display text-xl tracking-wider">{title}</h3>
    <div className="flex items-center gap-3 mt-1">
      <span className="font-body text-sm font-semibold text-secondary">{org}</span>
      <span className="font-body text-sm text-muted-foreground">{date}</span>
    </div>
    <p className="font-body text-muted-foreground mt-3 leading-relaxed">{details}</p>
  </div>
);

export default Resume;
