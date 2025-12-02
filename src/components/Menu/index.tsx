import { useState } from 'react';
import styles from './styles.module.css';
import { SquareMenuIcon } from 'lucide-react';
import { RouterLink } from '../RouterLink';

export function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
    console.log(active);
  };

  return (
    <div className={styles.content__menu}>
      <div
        className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        onClick={ToggleMode}
      >
        <SquareMenuIcon className={styles.header__menu__icon} strokeWidth={1} />
      </div>
      <div
        className={
          active
            ? `${styles.menu} ${styles.menuOpen}`
            : `${styles.menu} ${styles.menuClose}`
        }
      >
        <nav className={styles.list} role='navigation'>
          <ul className={styles.listItems}>
            <li>
              <RouterLink className={styles.listLink} href='/'>
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink className={styles.listLink} href='/projects'>
                Projetos
              </RouterLink>
            </li>
            <li>
              <RouterLink className={styles.listLink} href='/resume'>
                Qualificações
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
