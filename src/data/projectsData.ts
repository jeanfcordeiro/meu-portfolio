import { type Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Controle de tempo de atividades',
    shortDescription:
      'Aplicação para controle de tempo de atividades usando a técnica de Pomodoro',
    fullDescription:
      'O Chronos Pomodoro é uma aplicação de produtividade baseada na metodologia de Francesco Cirillo, projetada para otimizar o foco e prevenir o esgotamento mental através de blocos de trabalho direcionado. Diferente dos cronômetros convencionais, o projeto oferece uma experiência personalizada onde o usuário pode configurar intervalos de foco e descanso (curtos e longos) de acordo com seu ritmo. A aplicação conta com um sistema inteligente de sequenciamento que automatiza a transição entre os ciclos (trabalho nos ímpares, descanso nos pares e um descanso estendido a cada oito ciclos), além de oferecer uma interface visual intuitiva com indicadores de progresso por cores e um histórico automático para monitoramento de desempenho e tarefas concluídas. É a ferramenta ideal para quem busca conciliar alta performance com uma gestão de tempo organizada e baseada em dados. ',
    technologies: [
      'React',
      'Vite',
      'React Router',
      'TypeScript',
      'CSS',
      'Web Worker',
    ],
    thumbnail: '../../public/images/pomodoro/img01.png',
    gallery: [
      '../../public/images/pomodoro/img01.png',
      '../../public/images/pomodoro/img02.png',
      '../../public/images/pomodoro/img03.png',
      '../../public/images/pomodoro/img04.png',
      '../../public/images/pomodoro/img05.png',
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/jeanfcordeiro/chonos-pomodoro',
    date: '2025-11-15',
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
];
