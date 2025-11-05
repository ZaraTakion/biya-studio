import styles from './ArtGrid.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

// lista de imagens (flexível e escalável)
const files = [
  'shot1.webp', 'shot2.webp', 'shot3.webp',
  'shot4.webp', 'shot5.webp', 'shot6.webp',
  'shot7.webp', 'shot8.webp', 'shot9.webp',
  'shot10.webp'
]

export default function ArtGrid() {
  useRevealOnScroll()
  const BASE = import.meta.env.BASE_URL

  return (
    <section
      id="trabalhos"
      className={`${styles.section} reveal`}
      aria-label="Galeria de arte"
    >
      <h2 className={styles.title}>ARTE</h2>

      <div className={styles.grid}>
        {files.map((name, i) => {
          const src = `${BASE}assets/shots/${name}`
          const caption = `Biya — ${name.replace('.webp', '')}`

          return (
            <figure key={i} className={styles.item}>
              <img
                src={src}
                alt={caption}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.caption}>{caption}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
