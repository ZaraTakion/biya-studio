import styles from './ArtGrid.module.css'
import { artworks } from '../../data/artworks'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function ArtGrid() {
  useRevealOnScroll()

  return (
    <section id="trabalhos" className={`${styles.section} reveal`} aria-label="Galeria de arte">
      <h2 className={styles.title}>GALERIA</h2>
      <div className={styles.grid}>
        {artworks.map((art, i) => (
          <div key={i} className={styles.item}>
            <img
              src={`assets/shots/${art.file}`}
              alt={art.title}
              loading="lazy"
            />
            <div className={styles.caption}>{art.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
