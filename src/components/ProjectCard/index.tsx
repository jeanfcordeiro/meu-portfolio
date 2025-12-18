import type React from 'react';
import type { Project } from '../../types';
import { AppWindow, Github } from 'lucide-react';
import { Button } from '../Button';
import styles from './styles.module.css';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projects__card}>
      <img
        src={project.thumbnail}
        alt={project.title}
        className={styles.projects__card__img}
      />

      <div className={styles.projects__content}>
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>

        <div className={styles.card__buttons}>
          <Button variant='default' size='small' href={project.id}>
            <AppWindow />
            Ver Projeto
          </Button>
          <Button variant='default' size='small' href={project.id}>
            <Github />
            Ver Código
          </Button>
        </div>
      </div>
    </div>
  );
};
