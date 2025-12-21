'use client';
import { motion } from 'framer-motion';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface StatItem {
  title: string;
  description: string;
  delay?: number;
}

interface QuickStatsSectionProps {
  stats: StatItem[];
}

export function QuickStatsSection({ stats }: QuickStatsSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title + index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stat.delay ?? index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
              <CardDescription>{stat.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
