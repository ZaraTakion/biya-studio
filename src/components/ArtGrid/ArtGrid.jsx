import styles from './ArtGrid.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import artworks from '../../data/artworks'

export default function ArtGrid() {
  useRevealOnScroll()

  return (
    <section id="trabalhos" className={`${styles.section} reveal`} aria-label="Galeria de arte da Biya">
      <h2 className={styles.title}>ARTE</h2>
      <div className={styles.grid}>
        {artworks.map((art, i) => (
          <div key={i} className={styles.item}>
            <img src={art.img} alt={art.title} loading="lazy" />
            <div className={styles.caption}>{art.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
