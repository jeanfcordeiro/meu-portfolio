import { type Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Título Projeto 01',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto!',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis nostrum consequatur corrupti at, ipsum libero non ab quidem et harum explicabo reprehenderit hic ullam tenetur facere, perferendis asperiores provident soluta facilis? Nemo, in nobis. Mollitia iste assumenda nemo a voluptas? Inventore temporibus, officia enim porro atque deserunt. Libero, exercitationem.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Node.js',
    ],
    thumbnail: '../../public//images/imagem.png',
    gallery: [
      '../../public//images/imagem.png',
      '../../public//images/imagem2.png',
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: '2023-10-15',
  },
  {
    id: '2',
    title: 'Título Projeto 02',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto!',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis nostrum consequatur corrupti at, ipsum libero non ab quidem et harum explicabo reprehenderit hic ullam tenetur facere, perferendis asperiores provident soluta facilis? Nemo, in nobis. Mollitia iste assumenda nemo a voluptas? Inventore temporibus, officia enim porro atque deserunt. Libero, exercitationem.',
    technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
    thumbnail: '../../public//images/imagem2.png',
    gallery: [
      '../../public//images/imagem2.png',
      '../../public//images/imagem3.png',
      '../../public//images/imagem2.png',
      '../../public//images/imagem3.png',
    ],
    repoUrl: 'https://github.com',
    date: '2024-01-20',
  },
  {
    id: '3',
    title: 'Título Projeto 03',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto!',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis nostrum consequatur corrupti at, ipsum libero non ab quidem et harum explicabo reprehenderit hic ullam tenetur facere, perferendis asperiores provident soluta facilis? Nemo, in nobis. Mollitia iste assumenda nemo a voluptas? Inventore temporibus, officia enim porro atque deserunt. Libero, exercitationem.',
    technologies: ['Vue.js', 'Firebase', 'Pinia', 'SortableJS'],
    thumbnail: '../../public//images/imagem3.png',
    gallery: [
      '../../public//images/imagem2.png',
      '../../public//images/imagem3.png',
    ],
    liveUrl: 'https://example.com',
    date: '2023-08-05',
  },
  {
    id: '4',
    title: 'Título Projeto 04',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto!',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis nostrum consequatur corrupti at, ipsum libero non ab quidem et harum explicabo reprehenderit hic ullam tenetur facere, perferendis asperiores provident soluta facilis? Nemo, in nobis. Mollitia iste assumenda nemo a voluptas? Inventore temporibus, officia enim porro atque deserunt. Libero, exercitationem.',
    technologies: ['React Native', 'Expo', 'SQLite'],
    thumbnail: '../../public//images/imagem.png',
    gallery: [
      '../../public//images/imagem2.png',
      '../../public//images/imagem3.png',
      '../../public//images/imagem.png',
    ],
    date: '2023-11-12',
  },
];
