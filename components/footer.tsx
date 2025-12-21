'use client';

import Link from 'next/link';
import { SocialLinks } from './social-links';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <SocialLinks links={personalInfo.socialLinks} />
        </div>
      </div>
    </footer>
  );
}
