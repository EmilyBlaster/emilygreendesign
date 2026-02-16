import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  colorBlock: "green" | "blue" | "pink" | "dark";
  slug: string;
  index: number;
}

const colorMap = {
  green: "bg-block-green",
  blue: "bg-block-blue",
  pink: "bg-block-pink",
  dark: "bg-block-dark",
};

const ProjectCard = ({ title, subtitle, description, colorBlock, slug, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/project/${slug}`} className="group block">
        <div className={`${colorMap[colorBlock]} rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]`}>
          <div className="aspect-[4/3] flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-display text-3xl md:text-4xl tracking-wider leading-none">
                {title}
              </h3>
              <p className="font-display text-lg tracking-widest mt-2 opacity-80">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 px-1">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
