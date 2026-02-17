import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  colorBlock: "green" | "blue" | "pink" | "dark";
  slug: string;
  index: number;
  coverImage?: string;
}

const colorMap = {
  green: "bg-block-green",
  blue: "bg-block-blue",
  pink: "bg-block-pink",
  dark: "bg-block-dark",
};

const accentBarMap = {
  green: "bg-primary",
  blue: "bg-secondary",
  pink: "bg-accent",
  dark: "bg-foreground",
};

const ProjectCard = ({ title, subtitle, description, colorBlock, slug, index, coverImage }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/project/${slug}`} className="group block">
        <div className="rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          {coverImage ? (
            <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ) : (
            <div className={`${colorMap[colorBlock]} aspect-[4/3] flex items-center justify-center p-8`}>
              <div className="text-center">
                <h3 className="font-display text-3xl md:text-4xl tracking-wider leading-none">
                  {title}
                </h3>
                <p className="font-display text-lg tracking-widest mt-2 opacity-80">
                  {subtitle}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-accent h-1 mt-3 rounded-full transition-all duration-300 group-hover:h-1.5" />
        <div className="mt-3 px-1">
          <h3 className="font-display text-lg tracking-wider text-foreground">
            {title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
