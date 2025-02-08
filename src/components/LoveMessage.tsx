import { motion } from 'framer-motion';

interface LoveMessageProps {
  message: string;
  delay: number;
}

export function LoveMessage({ message, delay }: LoveMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="text-rose-800 text-lg md:text-xl font-serif italic mb-4"
    >
      {message}
    </motion.div>
  );
}