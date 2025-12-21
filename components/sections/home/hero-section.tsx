'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/social-links';
import type { personalInfo as personalInfoData } from '@/data/personal';

interface HeroSectionProps {
  personalInfo: typeof personalInfoData;
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 min-h-[70vh]">
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Xin chào, tôi là{' '}
          <span className="text-primary">{personalInfo.name}</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {personalInfo.bio}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg">
            <Link href="/projects">
              Xem dự án <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/about">Thông tin</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Liên hệ</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SocialLinks links={personalInfo.socialLinks} />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
          {/* Blob ngoài cùng - quay và biến đổi hình dạng với avatar bên trong */}
          <motion.div
            className="relative w-full h-full overflow-hidden"
            animate={{
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '70% 30% 50% 50% / 30% 30% 70% 70%',
                '60% 40% 30% 70% / 60% 30% 70% 40%',
              ],
            }}
            transition={{
              borderRadius: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            style={{
              border: '2px solid',
              borderColor: 'hsl(var(--primary) / 0.3)',
            }}
          >
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
