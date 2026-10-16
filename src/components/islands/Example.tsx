import { motion } from 'framer-motion';

// React island: only interactive/animated parts live here.
export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Island works
    </motion.div>
  );
}
