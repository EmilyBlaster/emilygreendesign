import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import emilyPortrait from "@/assets/emily-portrait.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero / Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-6xl md:text-8xl tracking-wider mb-6">
                About Me
              </h1>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                Hi, I'm Emily, a Learning Experience Designer who believes that effective training isn't about checking boxes. It's about changing behaviors and driving real results.
              </p>
              <p className="font-body text-lg leading-relaxed text-muted-foreground mt-4">
                With over a decade of experience creating learning solutions for organizations like Airbnb, Apple, Johnson & Johnson, Intuit, and T-Mobile, I've learned that the best training experiences don't just inform — they transform. My approach goes beyond traditional compliance education to design experiences that actually stick and make a measurable impact on organizational performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={emilyPortrait}
                  alt="Emily Green — Learning Experience Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl -z-10" />
            </motion.div>
          </div>

          {/* Sections */}
          <div className="max-w-3xl space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl tracking-wider mb-6 pb-3 border-b-2 border-primary">
                What Makes My Work Different
              </h2>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  I bring an anthropological lens to learning design — understanding <em>why</em> people do what they do before prescribing solutions. Using Action Mapping and the Kirkpatrick Model, I tie every experience directly to business outcomes. My work spans healthcare education reaching 180M women globally, supply chain training across 31 countries, and leadership programs achieving 15–20% improvement in key metrics. The goal is always the same: change what people <em>do</em>, not just what they know.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl tracking-wider mb-6 pb-3 border-b-2 border-primary">
                Beyond the Design Work
              </h2>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  Currently pursuing my MS in Instructional Design & Technology at Full Sail University and a certified Google UX professional. I'm passionate about accessibility, plain language, and making learning feel human — not like homework. Outside of work, I'm exploring audio production, serious games in medical education, and human-centered design.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl tracking-wider mb-6 pb-3 border-b-2 border-primary">
                Let's Create Something That Works
              </h2>
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                If you're tired of training that gets completed but doesn't get applied, let's talk. I specialize in transforming information-heavy requirements into engaging, behavior-focused learning experiences that your people will actually use.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:egreen@emilygreendesign.com"
                  className="inline-flex items-center gap-2 bg-block-pink font-display text-sm tracking-[0.2em] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
