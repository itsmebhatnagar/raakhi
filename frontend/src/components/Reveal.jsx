import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

const Reveal = ({ children, delay = 0, y = 48, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.1, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export default Reveal;
