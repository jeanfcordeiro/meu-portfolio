import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { MainTemplate } from '../../template/MainTemplate';

import { projectsData } from '../../data/projectsData';

import styles from './styles.module.css';

export function Project() {
  const project = projectsData.find(item => item.id === '2');

  if (!project) return null;
  return (
    <MainTemplate>
      <Container>
        <div className={styles.project__container}>
          <SectionTitle>{project.title}</SectionTitle>
          <p>{project.description}</p>

          <div className={styles.project__techList}>
            <h3>Tecnologias</h3>
            <ul>
              {project.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className={styles.project__images}>
            {project.images.map((imgSrc, index) => (
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
            <p>{project.about}</p>
          </div>
        </div>
      </Container>
    </MainTemplate>
  );
}
