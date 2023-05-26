
import { PencilLine } from 'phosphor-react';
import styles from './SideBar.module.css'
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
          className={styles.cover}
          src="src/public/backgroundAvatar.svg"
      />
      
      <div className={styles.profile}>
      <Avatar image="src/public/avatarProfile.svg" size="50px"/>


        <strong>Leslie Alexander</strong>

        <span>UI Designer</span>
      </div>

      <footer className={styles.footer}>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}