'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

import type { personalInfo as personalInfoData } from '@/data/personal';

interface BioSectionProps {
  personalInfo: typeof personalInfoData;
}

export function BioSection({ personalInfo }: BioSectionProps) {
  return (
    <motion.section
      className="space-y-6 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">Giới thiệu</h1>
      <div className="space-y-4 text-lg text-muted-foreground">
        <p>{personalInfo.bio}</p>
        <div className="flex flex-wrap gap-6 pt-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
