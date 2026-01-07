export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    organization: 'TEMA SOFTWARE COMPANY',
    period: '03/2025 - 12/2025',
    description:
      'Handled assigned tasks and built website interfaces based on customer requirements.',
    type: 'experience',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    organization: 'Freelancer',
    period: '09/2024 - 10/2025',
    description:
      'Took on frontend gigs from third parties, collaborating with external teams to build e-commerce sites, landing pages, event mini-games, admin dashboards, and more using WordPress, React/Next.js, HTML, CSS, and JS.',
    type: 'experience',
  },
  {
    id: '3',
    title: 'Fresher Frontend Nextjs (remote)',
    organization: 'RIKSOFT Company Limited',
    period: '03/2023 - 09/2024',
    description:
      'Handled assigned tasks, created HTML emails from Figma templates, built the company website based on provided designs, and contributed to company projects with guidance.',
    type: 'experience',
  },
  {
    id: '4',
    title: 'Intern WordPress',
    organization: 'Webo Đà Nẵng',
    period: '11/2023 - 02/2024',
    description:
      'Designed WordPress interfaces from provided templates and implemented simple PHP features.',
    type: 'experience',
  },
];
