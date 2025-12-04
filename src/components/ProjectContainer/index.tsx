import { AppWindow, Github } from 'lucide-react';
import { Button } from '../Button';
import styles from './styles.module.css';

type ProjectContainerProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export function ProjectContainer({
  image,
  title,
  description,
  href,
}: ProjectContainerProps) {
  return (
    <div className={styles.projects__container}>
      <img
        src={image}
        alt={title}
        className={styles.projects__container__img}
      />
      <div className={styles.projects__content}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.container__buttons}>
          <Button variant='default' size='small' href={href}>
            <AppWindow />
            Ver Projeto
          </Button>
          <Button variant='default' size='small' href={href}>
            <Github />
            Ver Código
          </Button>
        </div>
      </div>
    </div>
  );
}
