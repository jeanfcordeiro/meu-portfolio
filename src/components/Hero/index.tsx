import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Desenvolvedor Front-End</h1>
      <SectionTitle>Desenvolvendo a web:</SectionTitle>
      <p>um código de cada vez.</p>
    </section>
  );
}
