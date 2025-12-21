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
    title: 'Web nghe nhạc',
    description:
      'Giao diện web nghe nhạc đa nền tảng (Hiện server backend đã đóng)',
    longDescription:
      'Đồ án tốt nghiệp với team 3 người, chịu trách nhiệm chính phần frontend: xây dựng toàn bộ UI, kiểm thử giao diện và API, làm việc với dữ liệu do backend trả về.',
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
    description: 'Website công ty RIKSOFT',
    longDescription:
      'Thực hiện xây dựng website với Next.js App Router, xử lý logic, sự kiện, custom component và tích hợp API backend. Đảm nhiệm luôn khâu kiểm thử và sửa lỗi.',
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
    description: 'Website tìm kiếm thông tin doanh nghiệp VietSearch',
    longDescription:
      'Dự án: xây dựng website với Next.js App Router, xử lý logic, form, custom component, kết nối API backend và đảm bảo kiểm thử liên tục trong quá trình phát triển.',
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
      'Dự án: xây dựng landing page với Nuxt 3, xử lý animation, responsive, multiple language, html, css, javascript theo yêu cầu của khách hàng.',
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
      'Dự án: xây dựng landing page với Nuxt 3, xử lý animation, responsive, multiple language, html, css, javascript theo yêu cầu của khách hàng.',
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
      'Dự án: xây dựng landing page với Nuxt 3, xử lý animation, responsive, multiple language, HTML, CSS, TypeScript.',
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
