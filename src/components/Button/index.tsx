import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'light';
};

export function Button({ children, variant = 'default' }: ButtonProps) {
  return (
    <a href='#' className={`${styles.btn} ${styles[variant]} `}>
      {children}
    </a>
  );
}
