import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu} role='navigation'>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Projetos</a>
        </li>
        <li>
          <a href='#'>Currículo</a>
        </li>
      </ul>
    </nav>
  );
}
