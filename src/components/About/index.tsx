import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.css';

export function About() {
  return (
    <section className={`${styles.about}  ${styles.row}`}>
      <div
        className={`${styles.profile} ${styles.bgGradient} ${styles.lg_6_12}`}
      >
        <img
          className={styles.profile__img}
          src='public\images\jean-felipe-cordeiro.png'
          alt='Jean Felipe, desenvolvedor front-end'
        />
      </div>
      <div className={`${styles.about__container} ${styles.lg_1_6}`}>
        <div className={styles.about__title}>
          <SectionTitle>Sobre mim</SectionTitle>
        </div>
        <div className={styles.about__content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam vel
            nemo voluptas perferendis quidem esse consequatur iure eos eum.
            Dolor sit amet consectetur adipisicing elit. Rem nam vel nemo
            voluptas perferendis quidem esse consequatur iure eos eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam vel
            nemo voluptas perferendis quidem esse consequatur iure eos eum.
            Dolor sit amet consectetur adipisicing elit. Rem nam vel nemo
            voluptas perferendis quidem esse consequatur iure eos eum.
          </p>
        </div>
      </div>
    </section>
  );
}
