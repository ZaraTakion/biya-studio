import styles from './Lives.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function Lives() {
  useRevealOnScroll()

  const lives = [
    {
      img: '/assets/lives/live1.webp',
      title: '[PHASMOPHOBIA] E CONVERSAS',
      link: 'https://www.youtube.com/live/EHuvsEY4T4E?si=QJJPXfrfT_zJWoSF'
    },
    {
      img: '/assets/lives/live2.webp',
      title: '[ALIEN: ISOLATION] DIA DE GRITARS',
      link: 'https://www.youtube.com/live/yMyTIpiuosI?si=_K5zm-VVV6IqMwgy'
    },
    {
      img: '/assets/lives/live3.webp',
      title: 'A PIOR VTUBER QUE VOCÊ NÃO CONHECIA!',
      link: 'https://youtu.be/RMa470w521A?si=HukaiUZnMUVDjMMb'
    }
  ]

  return (
    <section id='lives' className={`${styles.lives} reveal`} aria-label='Transmissões recentes da Biya'>
      <div className={styles.inner}>
        <h2 className={styles.title}>LIVES</h2>
        <div className={styles.grid}>
          {lives.map((live, i) => (
            <a
              key={i}
              href={live.link}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.card}
            >
              <img src={live.img} alt={live.title} loading='lazy' />
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
