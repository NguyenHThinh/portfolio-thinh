'use client';

import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Skill } from '@/data/skills';

const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Công cụ',
  other: 'Khác',
};

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <section className="space-y-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Kỹ năng
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsByCategory).map(
          ([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category + categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    {skillCategories[category as keyof typeof skillCategories]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name + skill.level} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}/5
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(skill.level / 5) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
