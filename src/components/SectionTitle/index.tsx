import styles from './styles.module.css';

type sectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: sectionTitleProps) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}
