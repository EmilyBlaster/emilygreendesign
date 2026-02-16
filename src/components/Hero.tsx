import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background color blocks */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-1/3 h-full bg-primary/10"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-20 right-12 w-32 h-32 rounded-full bg-accent/20"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-32 right-1/4 w-20 h-20 rounded-full bg-secondary/20"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-lg tracking-[0.3em] text-muted-foreground mb-4"
          >
            Instructional Design & Technology Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-wider"
          >
            Behavior
            <br />
            Change
            <span className="text-gradient"> Over</span>
            <br />
            Box Checking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            I'm Emily — a learning experience designer who blends strategy, media, and behavioral science. It's the whole caboodle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#projects"
              className="bg-block-dark font-display text-sm tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#reel"
              className="border-2 border-foreground font-display text-sm tracking-[0.2em] px-8 py-4 rounded-lg text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Demo Reel
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
