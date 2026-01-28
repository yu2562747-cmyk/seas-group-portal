"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealTransition } from "../lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
