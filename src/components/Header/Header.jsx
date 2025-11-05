import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const BASE = import.meta.env.BASE_URL

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    const smoothScroll = e => {
      const href = e.currentTarget.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
        setOpen(false)
      }
    }
    anchors.forEach(a => a.addEventListener('click', smoothScroll))
    return () => anchors.forEach(a => a.removeEventListener('click', smoothScroll))
  }, [])

  useEffect(() => {
    const el = document.querySelector('.site-header')
    const onScroll = () => {
      if (window.scrollY > 80) {
        el.style.background = 'rgba(12,12,13,0.9)'
        el.style.backdropFilter = 'blur(12px)'
      } else {
        el.style.background = 'rgba(12,12,13,0.7)'
        el.style.backdropFilter = 'blur(8px)'
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${styles.header}`}>
      <div className={styles.wrap}>
        <a href="#hero" className={styles.brand} aria-label="Voltar ao topo">
          <img src={`${BASE}assets/favicon.png`} alt="Logo Biya" className={styles.logoIcon} />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <button
            className={styles.burger}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#trabalhos">Arte</a></li>
            <li><a href="#lives">Lives</a></li>
            <li><a href="#community">Comunidade</a></li>
            <li>
              <a
                href="https://discord.gg/Bk6JXfdq58"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
