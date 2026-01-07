export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Music Streaming Web App',
    description:
      'Cross-platform music streaming web UI (backend server currently offline)',
    longDescription:
      'Graduation project with a 3-person team. I owned the frontend: built the entire UI, tested UI and APIs, and integrated with backend data.',
    image: '/images/projects/spotify-client.png',
    technologies: ['HTML', 'CSS', 'ReactJS', 'RESTful API', 'Postman'],
    demoUrl: 'https://spotify-client-ten.vercel.app/',
    sourceUrl: 'https://github.com/gitThinh/spotify-client',
    featured: true,
    year: 2023,
  },
  {
    id: '2',
    title: 'RIKSOFT website',
    description: 'RIKSOFT company website',
    longDescription:
      'Built the website with Next.js Page Router, handled logic, events, custom components, and integrated backend APIs. Also took care of testing and bug fixes.',
    image: '/images/projects/riksoft.png',
    technologies: [
      'Next.js (Page Router)',
      'MUI',
      'Sass',
      'Bootstrap',
      'TypeScript',
      'next-i18next',
      'HTML',
    ],
    demoUrl: 'https://riksoft-website.vercel.app',
    sourceUrl: 'https://github.com/NguyenHThinh/Riksoft-web',
    featured: true,
    year: 2024,
  },
  {
    id: '3',
    title: 'VietSearch Business',
    description: 'Business information search website for VietSearch',
    longDescription:
      'Built the site with Next.js App Router; handled logic, forms, custom components, connected to backend APIs, and ensured continuous testing during development.',
    image: '/images/projects/vietsearch.png',
    technologies: [
      'Next.js (App Router)',
      'TailwindCSS',
      'TypeScript',
      'axios',
      'react-hook-form',
      'HeaderUI',
      'i18next',
      'ESLint',
      'Husky',
      'HTML',
    ],
    demoUrl: 'https://vietsearch.org/vi',
    sourceUrl: 'https://github.com/NguyenHThinh/viet-search',
    featured: true,
    year: 2024,
  },
  {
    id: '4',
    title: 'Landing page Treasure Hunters',
    description: 'Landing page for game Treasure Hunters with Nuxt 3',
    longDescription:
      'Built a Nuxt 3 landing page, handling animations, responsiveness, multiple languages, HTML, CSS, and JavaScript per client requirements.',
    image: '/images/projects/treasure-hunters.png',
    technologies: ['Nuxt 3', 'HTML', 'CSS', 'JavaScript', 'i18next'],
    demoUrl: 'https://daovang.vercel.app/',
    sourceUrl: 'https://github.com/NguyenHThinh/daovang',
    featured: true,
    year: 2024,
  },
  {
    id: '5',
    title: 'Landing page GG Lab',
    description: 'Landing page for game GG Lab with Nuxt 3',
    longDescription:
      'Built a Nuxt 3 landing page, implementing animations, responsiveness, multiple languages, HTML, CSS, and JavaScript per client requirements.',
    image: '/images/projects/gglab.png',
    technologies: ['Nuxt 3', 'HTML', 'CSS', 'TypeScript', 'i18next'],
    demoUrl: 'https://pylon-web-silk.vercel.app/',
    sourceUrl: 'https://github.com/NguyenHThinh/pylon_web',
    featured: true,
    year: 2024,
  },
  {
    id: '6',
    title: 'Landing page',
    description: 'Landing page with Nuxt 3',
    longDescription:
      'Built a Nuxt 3 landing page, delivering animations, responsiveness, multiple languages, HTML, CSS, and TypeScript.',
    image: '/images/projects/custom1.png',
    technologies: [
      'Nuxt 3',
      'TailwindCSS',
      'HTML',
      'CSS',
      'TypeScript',
      'i18next',
    ],
    demoUrl: 'https://tema-test-mu.vercel.app/',
    sourceUrl: 'https://github.com/NguyenHThinh/TemaTest/',
    featured: true,
    year: 2025,
  },
];
