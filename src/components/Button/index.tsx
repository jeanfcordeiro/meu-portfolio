import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'small';
  size?: 'normal' | 'small';
  href: string;
};

export function Button({
  children,
  variant = 'default',
  size = 'normal',
  href,
}: ButtonProps) {
  return (
    <RouterLink
      href={href}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} `}
    >
      {children}
    </RouterLink>
  );
}
