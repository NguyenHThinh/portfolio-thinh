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
    period: '03/2024 - 12/2025',
    description:
      'Thực hiện xử lý các nhiệm vụ, công việc công ty đưa ra, làm giao diện các trang web theo yêu cầu của khách hàng.',
    type: 'experience',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    organization: 'Freelancer',
    period: '09/2024 - Hiện tại',
    description:
      'Nhận các job Frontend từ bên thứ 3, tham gia làm việc cùng đội ngũ bên ngoài để phát triển trang web như bán hàng, landing page, event minigame, quản lý,... bằng WordPress, React/Nextjs, HTML CSS JS.',
    type: 'experience',
  },
  {
    id: '3',
    title: 'Fresher Frontend Nextjs (remote)',
    organization: 'Công ty phát triển phần mềm RIKSOFT Hà Nội',
    period: '03/2023 - 09/2024',
    description:
      'Thực hiện xử lý các nhiệm vụ công ty đưa ra, tạo các HTML mail theo mẫu figma, làm web công ty dựa theo mẫu sẵn, làm các dự án của công ty theo hướng dẫn.',
    type: 'experience',
  },
  {
    id: '4',
    title: 'Thực tập WordPress',
    organization: 'Webo Đà Nẵng',
    period: '11/2023 - 02/2024',
    description:
      'Thiết kế giao diện các trang web WordPress theo mẫu. Xử lý một vài chức năng đơn giản với PHP.',
    type: 'experience',
  },
];
