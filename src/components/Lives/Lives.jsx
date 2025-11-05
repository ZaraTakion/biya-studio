import styles from './Lives.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const lives = [
  {
    img: '/assets/lives/live1.webp',
    title: 'LIVE DRAWING: Ilustração em tempo real',
    link: 'https://www.youtube.com/live/EHuvsEY4T4E?si=1-nP6Yz_NRkJ-L-N'
  },
  {
    img: '/assets/lives/live2.webp',
    title: 'CHILL STREAM: Conversas e criação',
    link: 'https://www.youtube.com/live/r7hBYHq9TdU?si=gjbiPgfrX3js4Dpy'
  },
  {
    img: '/assets/lives/live3.webp',
    title: 'SPEEDPAINT: Estudo monocromático',
    link: 'https://youtu.be/RMa470w521A?si=9WPi57iwKy45dDq2'
  }
]

export default function Lives() {
  useRevealOnScroll()

  return (
    <section id="lives" className={`${styles.lives} reveal`} aria-label="Lives de Biya">
      <div className={styles.inner}>
        <h2 className={styles.title}>LIVES</h2>
        <div className={styles.grid}>
          {lives.map((live, i) => (
            <a
              key={i}
              href={live.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={live.img} alt={live.title} loading="lazy" />
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
