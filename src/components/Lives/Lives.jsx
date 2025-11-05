import styles from './Lives.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const livesData = [
  {
    img: 'live1.webp',
    title: '[PHASMOPHOBIA] E CONVERSAS',
    link: 'https://www.youtube.com/live/EHuvsEY4T4E?si=1-nP6Yz_NRkJ-L-N'
  },
  {
    img: 'live2.webp',
    title: 'TO DE VOLTA',
    link: 'https://www.youtube.com/live/r7hBYHq9TdU?si=whHGlSG5zVwdXHuy'
  },
  {
    img: 'live3.webp',
    title: 'A PIOR VTUBER QUE VOCÊ NÃO CONHECIA!',
    link: 'https://youtu.be/RMa470w521A?si=9WPi57iwKy45dDq2'
  }
]

export default function Lives() {
  useRevealOnScroll()
  const BASE = import.meta.env.BASE_URL

  return (
    <section id="lives" className={`${styles.lives} reveal`} aria-label="Lives de Biya">
      <div className={styles.inner}>
        <h2 className={styles.title}>LIVES</h2>
        <div className={styles.grid}>
          {livesData.map((live, i) => (
            <a
              key={i}
              href={live.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img
                src={`${BASE}assets/lives/${live.img}`}
                alt={live.title}
                loading="lazy"
              />
              <div className={styles.info}>
                <h3>{live.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
