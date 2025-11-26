import { Button } from '../Button';
import styles from './styles.module.css';

export function Cta() {
  return (
    <section className={styles.cta}>
      <Button variant='default'>Projetos</Button>
      <Button variant='light'>Qualificações</Button>
    </section>
  );
}
