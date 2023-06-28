import Image from 'next/image'
import Leitos from './leitos'
import styles from './page.module.css'

export default function Home() {
  const legenda = [
    {
      color: styles.green,
      texto: "UTIs disponiveis"
    },
    {
      color: styles.yellow,
      texto: "UTIs em limpeza"
    },
    {
      color: styles.red,
      texto: "UTIs ocupadas"
    }
  ]

  

  return (
    <main className={styles.main}>
      <section className={styles.head}>
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          <ul>
            <li>
              Perfil
            </li>
            <li>Sair</li>
            <li>Administrar Solicitações</li>
          </ul>
        </div>
      </section>
      <section className={styles.legenda}>
        {legenda.map((conteudo,i) => {
          return (
            <div key={i} className={styles.itemLegenda}>
              <div   className={conteudo.color}>
              </div>
              <p>{conteudo.texto}</p>
            </div>
          )
        })}
      </section>
      <Leitos />
    </main>
  )
}
