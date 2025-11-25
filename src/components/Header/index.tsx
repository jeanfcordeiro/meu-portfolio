import { Menu } from '../Menu';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.title}>Jean Felipe</h2>
        <div className={styles.header__menu}>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
