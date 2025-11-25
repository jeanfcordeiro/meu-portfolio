import { MoonIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import type React from 'react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Theme() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'light';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => {};
  }, [theme]);

  return (
    <div className={styles.theme}>
      <p>Tema: </p>
      <a
        href='#'
        className={styles.theme__icon}
        aria-label='Mudar o tema da página'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
