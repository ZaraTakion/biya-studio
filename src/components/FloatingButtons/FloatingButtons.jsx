import styles from './FloatingButtons.module.css'

export default function FloatingButtons() {
  const go = sel => {
    const el = document.querySelector(sel)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrap} aria-label="Acesso rápido">
      <button
        className={styles.btn}
        title="Topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <button
        className={styles.btn}
        title="Galeria"
        onClick={() => go('#trabalhos')}
      >
        ★
      </button>

      <button
        className={styles.btn}
        title="Comunidade"
        onClick={() => go('#community')}
      >
        ♡
      </button>

      <a
        className={styles.btn}
        title="Discord"
        href="https://discord.gg/Bk6JXfdq58"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir Discord em nova aba"
      >
        D
      </a>
    </div>
  )
}
