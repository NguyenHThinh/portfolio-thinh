'use client';

import { motion } from 'framer-motion';

export function ContactIntro() {
  return (
    <motion.div
      className="space-y-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Have an interesting project? Let&apos;s talk! I&apos;m always ready to
        listen and collaborate.
      </p>
    </motion.div>
  );
}
