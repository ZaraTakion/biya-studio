import styles from './Hero.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function Hero() {
  useRevealOnScroll()
  const BASE = import.meta.env.BASE_URL

  return (
    <section id="hero" className={`${styles.hero} reveal`} aria-label="Apresentação de Biya">
      <div className={styles.bgLeft} aria-hidden="true">BI</div>
      <div className={styles.bgRight} aria-hidden="true">YA</div>

      <div className={styles.content}>
        <p className={styles.handle}>@BiyA_YU</p>
        <h1 className={styles.title}>Artista e Streamer</h1>
        <h2 className={styles.subtitle}>\\ O //</h2>

        <figure className={styles.figure}>
          <img
            src={`${BASE}assets/biya.png`}
            alt="Retrato artístico de Biya"
            loading="eager"
          />
        </figure>

        <div className={styles.cta}>
          <a
            href="https://www.youtube.com/@biyaYU"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            YouTube
          </a>
          <a
            href="https://x.com/BiyA_YU"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            X
          </a>
        </div>
      </div>
    </section>
  )
}
