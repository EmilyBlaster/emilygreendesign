import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingAlert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: 1, rotate: -6 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
      >
        <Link to="/projects/the-algorithm-syllabus" className="block">
          <div className="relative bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-2xl max-w-[160px]">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVisible(false); }}
              className="absolute -top-2 -right-2 bg-foreground text-background rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-primary transition-colors"
            >
              <X size={12} />
            </button>
            <p className="font-display text-lg tracking-wider leading-tight">
              NEW
            </p>
            <p className="font-display text-2xl tracking-wider leading-none mt-1">
              Capstone
            </p>
            <p className="font-display text-2xl tracking-wider leading-none">
              Drop!
            </p>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingAlert;
