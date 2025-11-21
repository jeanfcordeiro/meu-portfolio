import { useState } from 'react';
import styles from './styles.module.css';
import { SquareMenuIcon } from 'lucide-react';

export function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
    console.log(active);
  };

  return (
    <div className={styles.content}>
      <div
        className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        onClick={ToggleMode}
      >
        <SquareMenuIcon className={styles.header__menu__icon} />
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
              <a className={styles.listLink} href='#'>
                Home
              </a>
            </li>
            <li>
              <a className={styles.listLink} href='#'>
                Projetos
              </a>
            </li>
            <li>
              <a className={styles.listLink} href='#'>
                Currículo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
