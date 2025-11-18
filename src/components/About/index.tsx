import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.css';

export function About() {
  return (
    <section className={styles.about}>
      <div>
        <img
          src='../public/images/imagem.png'
          alt='Jean Felipe, desenvolvedor front-end'
        />
      </div>
      <SectionTitle>Sobre mim</SectionTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam vel
        nemo voluptas perferendis quidem esse consequatur iure eos eum. Dolor
        sit amet consectetur adipisicing elit. Rem nam vel nemo voluptas
        perferendis quidem esse consequatur iure eos eum.
      </p>
    </section>
  );
}
