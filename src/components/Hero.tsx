import { motion } from "framer-motion";
import { useState } from "react";

type ShapeStyle = "diagonal" | "rectangular" | "mixed";

const DiagonalShapes = () => (
  <>
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 w-2/5 h-full bg-primary/15 -skew-x-12 origin-top-left"
    />
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 right-0 w-1/4 h-2/3 bg-accent/15 skew-x-6 origin-top-right"
    />
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute bottom-0 left-1/4 w-1/3 h-1/4 bg-secondary/15 -skew-x-12"
    />
  </>
);

const RectangularShapes = () => (
  <>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7 }}
      className="absolute top-0 left-0 w-1/3 h-full bg-primary/12 origin-left"
    />
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute top-0 right-0 w-48 h-1/2 bg-accent/15 origin-top"
    />
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute bottom-0 right-1/4 w-1/4 h-32 bg-secondary/12 origin-right"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute top-1/3 right-12 w-20 h-20 bg-primary/20"
    />
  </>
);

const MixedShapes = () => (
  <>
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 w-2/5 h-full bg-primary/12 origin-left"
    />
    <motion.div
      initial={{ scale: 0, rotate: 45 }}
      animate={{ scale: 1, rotate: 45 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute top-16 right-16 w-40 h-40 bg-accent/15"
    />
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute bottom-24 right-1/4 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[140px] border-b-secondary/15"
    />
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute bottom-0 left-1/3 w-1/4 h-24 bg-accent/10 -skew-x-12 origin-left"
    />
  </>
);

const shapeComponents: Record<ShapeStyle, React.FC> = {
  diagonal: DiagonalShapes,
  rectangular: RectangularShapes,
  mixed: MixedShapes,
};

const labels: Record<ShapeStyle, string> = {
  diagonal: "Diagonal Slabs",
  rectangular: "Rectangular Blocks",
  mixed: "Mixed Geometric",
};

const Hero = () => {
  const [style, setStyle] = useState<ShapeStyle>("diagonal");
  const ShapeComponent = shapeComponents[style];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Style switcher — remove after choosing */}
      <div className="absolute top-24 right-6 z-20 flex gap-2">
        {(Object.keys(labels) as ShapeStyle[]).map((key) => (
          <button
            key={key}
            onClick={() => setStyle(key)}
            className={`font-display text-xs tracking-[0.15em] px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
              style === key
                ? "bg-primary text-primary-foreground border-primary"
                : "border-foreground/30 text-foreground/60 hover:border-foreground"
            }`}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      {/* Background shapes */}
      <ShapeComponent />

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
