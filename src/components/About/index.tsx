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
            <span className={styles.bold}>
              Olá, eu sou o Jean 👋 Desenvolvedor Front-end
            </span>
          </p>
          <p>
            Com mais de 2 anos de atuação na área de tecnologia, transformo
            linhas de código em interfaces funcionais e intuitivas. Minha
            jornada inclui a base sólida da instrução técnica e a agilidade do
            suporte especializado, o que me deu uma visão única sobre como
            construir softwares que realmente resolvem os problemas dos
            usuários.
          </p>
          <p className={styles.bold}>Minha Stack Principal como Front-end:</p>
          React, JavaScript (ES6+), HTML5 e CSS3. Ferramentas: Git/GitHub e
          Metodologias Ágeis. Atualmente, foco na criação de projetos modernos
          com React, sempre prezando por código limpo e boa usabilidade. Que tal
          darmos uma olhada nos meus projetos?
          <p></p>
        </div>
      </div>
    </section>
  );
}
