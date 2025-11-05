import styles from './Community.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function Community() {
  useRevealOnScroll()

  return (
    <section id="community" className={`${styles.community} reveal`} aria-label="Entre para a Comunidade">
      <div className={styles.inner}>
        <h2 className={styles.title}>ENTRE PARA A COMUNIDADE</h2>
        <p className={styles.desc}>
          O servidor da Biya é um espaço tranquilo para conversar, compartilhar arte e acompanhar as transmissões.
          As regras são simples: respeito, empatia e bom senso. Nada de flood, spoiler ou discurso de ódio.
        </p>

        <ul className={styles.rules}>
          <li>Mantenha o respeito - sem ataques, discussões tóxicas ou spam.</li>
          <li>Compartilhe suas criações nos canais adequados.</li>
          <li>Evite conteúdo sensível fora dos canais marcados.</li>
          <li>Interaja com calma - o servidor é feito para relaxar, não competir.</li>
        </ul>

        <a
          href="https://discord.gg/Bk6JXfdq58"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.invite}
        >
          Entrar no Discord
        </a>
      </div>
    </section>
  )
}
