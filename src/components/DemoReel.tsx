import { motion } from "framer-motion";

const DemoReel = () => {
  return (
    <section id="reel" className="py-24 bg-block-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">
            Demo Reel
          </h2>
          <p className="font-body text-lg mt-4 opacity-70">
            A snapshot of my best work in motion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-xl overflow-hidden border border-muted/20">
            <iframe
              src="https://player.vimeo.com/video/1165485464?h=0&title=0&byline=0&portrait=0"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoReel;
