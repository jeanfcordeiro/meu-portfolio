import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { MainTemplate } from '../../template/MainTemplate';

import { projectsData } from '../../data/projectsData';

import styles from './styles.module.css';
import { useParams } from 'react-router';
import { NotFound } from '../../pages/NotFound';
import { MoveLeft } from 'lucide-react';

export const Project = () => {
  const params = useParams();
  const { id } = params;
  const project = projectsData.find(item => item.id === id);

  if (!project) return <NotFound />;
  return (
    <MainTemplate>
      <Container>
        <a href='/projects' className={styles.project__link}>
          <MoveLeft />
          Voltar para projetos
        </a>
        <div className={styles.project__container}>
          <SectionTitle>{project.title}</SectionTitle>
          <p>{project.shortDescription}</p>

          <div className={styles.project__techList}>
            <h3>Tecnologias</h3>
            <ul>
              {project.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className={styles.project__images}>
            {project.gallery.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt=''
                className={styles.project__img}
              />
            ))}
          </div>

          <div>
            <h3>Sobre o Projeto</h3>
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </Container>
    </MainTemplate>
  );
};
