import styles from './Avatar.module.css';

export function Avatar({ size, image }) {
  return (
    <div className={styles.profile}>
      <img src={image} style={{ width: size, height: size }} />
    </div>
  );
}
