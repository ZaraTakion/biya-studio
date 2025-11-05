import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Apresentação de Biya">
      {/* Texto de fundo decorativo */}
      <div className={styles.bgLeft} aria-hidden="true">BI</div>
      <div className={styles.bgRight} aria-hidden="true">YA</div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <p className={styles.handle}>@BiyA_YU</p>
        <h1 className={styles.title}>Artista & Streamer</h1>
        <h2 className={styles.subtitle}>Atmosfera e presença.</h2>

        <figure className={styles.figure}>
          <img
            src="/assets/biya.png"
            alt="Retrato artístico da Biya em preto e branco"
            loading="lazy"
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
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  )
}
