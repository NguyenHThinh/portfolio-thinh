'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function SocialLinks({ links }: SocialLinksProps) {
  const socialItems = Object.entries(links).filter(([_, url]) => url);

  return (
    <div className="flex gap-4">
      {socialItems.map(([platform, url], index) => {
        const Icon = socialIcons[platform as keyof typeof socialIcons];
        if (!Icon) return null;

        return (
          <motion.div
            key={platform}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button asChild variant="outline" size="icon" className="h-10 w-10">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
