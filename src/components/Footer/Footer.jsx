import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.signature}>
          © {new Date().getFullYear()} <a href="https://zaratakion.github.io/">Biya Studio</a>.  
          Desenvolvido por <a href="https://github.com/ZaraTakion" target="_blank" rel="noopener noreferrer">Zara Takion</a>.
        </p>

        <div className={styles.social}>
          <a href="https://www.twitch.tv/biya" target="_blank" rel="noopener noreferrer">Twitch</a>
          <a href="https://twitter.com/biya" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/biya" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
