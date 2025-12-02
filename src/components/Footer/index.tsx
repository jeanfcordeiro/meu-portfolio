import { Github, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Minhas Redes</h2>
      <ul className={styles.footerNav}>
        <li className={styles.footer__linkItem}>
          <a
            className={styles.footer__link}
            href='https://github.com/jeanfcordeiro/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link para meu perfil no GitHub'
          >
            <Github />
          </a>
        </li>
        <li className={styles.footer__linkItem}>
          <a
            className={styles.footer__link}
            href='https://www.linkedin.com/in/jeanfcordeiro/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link para meu perfil no LinkedIn'
          >
            <div>
              <Linkedin />
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
}
