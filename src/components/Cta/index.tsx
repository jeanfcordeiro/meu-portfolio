import { Button } from '../Button';
import styles from './styles.module.css';

export function Cta() {
  return (
    <section className={styles.cta}>
      <Button variant='default' href='/projects'>
        Projetos
      </Button>
      <Button variant='light' href='/resume'>
        Qualificações
      </Button>
    </section>
  );
}
