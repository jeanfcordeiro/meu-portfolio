import styles from './styles.module.css';

type ProfileCardProps = {
  title: string;
  period: string;
  location: string;
  description: string;
};

export function ProfileCard({
  title,
  period,
  location,
  description,
}: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <h3 className={styles.profielCard__title}>{title}</h3>
      <div className={styles.profileCard__meta}>
        <p> {period}</p>
        <p> {location}</p>
      </div>
      <p className={styles.profileCard__description}>{description}</p>
    </div>
  );
}
