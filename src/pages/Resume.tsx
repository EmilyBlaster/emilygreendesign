import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, Mail, Phone } from "lucide-react";

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
              Emily Green
            </h1>
            <p className="font-display text-xl md:text-2xl tracking-[0.2em] text-muted-foreground mt-2">
              Learning Experience Designer
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-body text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Phone size={14} /> 727-475-0036</span>
              <a href="mailto:egreen@emilygreendesign.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"><Mail size={14} /> egreen@emilygreendesign.com</a>
            </div>
            <div className="mt-6">
              <a
                href="/Emily_Green_LXD_2026.pdf"
                download
                className="inline-flex items-center gap-2 bg-block-dark font-display text-sm tracking-[0.2em] px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Summary */}
            <ResumeSection title="About">
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                Certified Google UX professional with over a decade of experience in graphic, instructional, and visual design leadership. I create visually engaging and interactive learning experiences for public and private organizations.
              </p>
            </ResumeSection>

            {/* Key Achievements */}
            <ResumeSection title="Key Achievements">
              <div className="space-y-6">
                <AchievementItem
                  headline="Transformed Apple's Global Supply Chain Training"
                  details="Created several Supplier Code of Conduct trainings and graphics for 251 suppliers from 31 countries, achieving a 95% completion rate."
                />
                <AchievementItem
                  headline="Enhanced Legal Compliance Retention at T-Mobile"
                  details="Designed and delivered five courses for the Legal Affairs team to ensure compliance with upcoming privacy laws. Achieved a 100% completion rate and a 95% satisfaction rate."
                />
                <AchievementItem
                  headline="Impacted Positive Patient Outcomes at PPFA"
                  details="Designed patient and clinical education materials for Bayer's IUCs and IUDs, including dosage, insertion, removal media, and graphics. Developed PPE donning and doffing protocol microlearnings for all clinical staff during the COVID-19 pandemic."
                />
                <AchievementItem
                  headline="Revolutionized Pharma Marketing Onboarding at J&J"
                  details="Designed wireframes and storyboards for Janssen Pharmaceuticals' leadership and marketing onboarding, resulting in a 15% surge in engagement and a 20% boost in retention rates."
                />
              </div>
            </ResumeSection>

            {/* Work History */}
            <ResumeSection title="Work History">
              <ResumeItem title="Learning Experience Designer, Contractor" org="Airbnb" date="January 2026 — Present" />
              <ResumeItem title="Instructional and Graphic Designer, Contractor" org="GitLab" date="October 2025 — December 2025" />
              <ResumeItem title="Instructional and Graphic Designer, Contractor" org="Apple — Environment & Supply Chain Innovation" date="June 2023 — September 2025" />
              <ResumeItem title="Learning Experience and Graphic Designer, Contractor" org="Intuit" date="December 2024 — May 2025; October 2025" />
              <ResumeItem title="Senior Instructional Designer, Contractor" org="Trust20 / Relish Works" date="June 2024 — February 2025" />
              <ResumeItem title="Senior Learning Experience Designer" org="Johnson & Johnson" date="September 2022 — June 2023" />
              <ResumeItem title="Senior Instructional Designer, Contractor" org="T-Mobile" date="January 2023 — May 2023" />
              <ResumeItem title="Senior Instructional Designer" org="BluePearl Specialty + Emergency Hospital" date="November 2021 — March 2022" />
              <ResumeItem title="Senior Manager of Integrations" org="Dental One Partners" date="May 2021 — November 2021" />
              <ResumeItem title="Senior Manager of Instructional Design" org="National Abortion Federation (NAF)" date="October 2020 — May 2021" />
              <ResumeItem title="Associate Director of Learning" org="Affiliates Risk Management Services, Inc. (ARMS)" date="August 2016 — October 2020" />
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education">
              <ResumeItem title="Master of Science (MS), ID&T" org="Full Sail University — Winter Park, FL" date="March 2025 — March 2026" />
              <ResumeItem title="Graphic Design Certification" org="Rhode Island School of Design — Providence, RI" date="" />
              <ResumeItem title="Google UX Design Certificate" org="Google" date="December 2022" />
              <ResumeItem title="Medical Writing for Healthcare Professionals Certificate" org="" date="October 2021" />
              <ResumeItem title="Post Baccalaureate Education Certification — COE" org="Saint Petersburg College — Saint Petersburg, FL" date="" />
              <ResumeItem title="B.A. Women's Studies / Communications" org="University of South Florida — Tampa, FL" date="" />
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Skills">
              <div className="flex flex-wrap gap-3">
                {[
                  "Illustrator",
                  "Photoshop",
                  "Premiere Pro",
                  "After Effects",
                  "Canva",
                  "Adobe Creative Suite",
                  "Articulate 360",
                  "Captivate",
                  "Camtasia",
                  "Figma",
                  "Sketch",
                  "SharePoint",
                  "Salesforce",
                  "JavaScript",
                  "ADA/Accessibility",
                  "DEI Initiatives",
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
}: {
  title: string;
  org: string;
  date: string;
}) => (
  <div>
    <h3 className="font-display text-xl tracking-wider">{title}</h3>
    <div className="flex flex-wrap items-center gap-3 mt-1">
      {org && <span className="font-body text-sm font-semibold text-secondary">{org}</span>}
      {date && <span className="font-body text-sm text-muted-foreground">{date}</span>}
    </div>
  </div>
);

const AchievementItem = ({ headline, details }: { headline: string; details: string }) => (
  <div>
    <h3 className="font-display text-lg tracking-wider">{headline}</h3>
    <p className="font-body text-muted-foreground mt-2 leading-relaxed">{details}</p>
  </div>
);

export default Resume;
