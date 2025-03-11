'use client';

import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Componente wrapper para motion.div
type ClientMotionProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function ClientMotion({ 
  children, 
  className = '',
  ...motionProps 
}: ClientMotionProps) {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
} 