import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Desenvolvedor Front-End</h1>
      <SectionTitle>Do mobile ao desktop:</SectionTitle>
      <p>desenvolvendo interfaces fluidas e dinâmicas.</p>
    </section>
  );
}
