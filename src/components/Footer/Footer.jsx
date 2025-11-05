import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © 2025 Biya — artista digital e streamer.
        </p>

        <p className={styles.signature}>
          Design e desenvolvimento por{' '}
          <a
            href="https://zaratakion.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zara Takion
          </a>
        </p>

        <p className={styles.social}>
          <a
            href="https://www.youtube.com/@biyaYU"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          {' • '}
          <a
            href="https://x.com/BiyA_YU"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          {' • '}
          <a
            href="https://discord.gg/Bk6JXfdq58"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </p>
      </div>
    </footer>
  )
}
