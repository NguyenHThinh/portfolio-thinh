'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SocialLinks } from '@/components/social-links';
import type { personalInfo as personalInfoData } from '@/data/personal';

interface ContactInfoCardProps {
  personalInfo: typeof personalInfoData;
}

export function ContactInfoCard({ personalInfo }: ContactInfoCardProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Thông tin liên hệ</CardTitle>
          <CardDescription>
            Bạn có thể liên hệ với tôi qua các kênh sau
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
          <div className="pt-4">
            <p className="font-medium mb-4">Mạng xã hội</p>
            <SocialLinks links={personalInfo.socialLinks} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
