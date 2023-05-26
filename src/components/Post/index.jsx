
import styles from './Post.module.css';
import { Avatar } from '../Avatar';
export function Post() {

  return (
    <div className={styles.card}>

      <div className={styles.container}>
        <Avatar image="src/public/avatarPost.svg" size="50px"/>

        <div className={styles.profile}>
          <strong>Jane Cooper</strong>
          <span>Dev Front-End</span>
        </div>
        <time className={styles.time}>Publicado há 1h</time>
      </div>

      <div className={styles.text}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de realizar o minicurso de React no evento SertaoComp.Vocês gostaram? 🚀</p>
        <div className={styles.hashtag}>
          <h4>#typescript #React #sertaocomp</h4>
        </div>
      </div>

      <hr className={styles.line} />

      {/* aqui falta o formulario */}
      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea className={styles.area} />
        <button className={styles.button} type="submit">Publicar</button>
      </form>

    </div>
  )
}