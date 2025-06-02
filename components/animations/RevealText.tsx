import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText = ({ children, className = "", delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // custom ease pour un effet plus doux
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}; 