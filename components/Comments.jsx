import Image from 'next/image'
import styles from '../styles/Comments.module.css'

export default function Comments() {
  return (
    <div className={styles.comments}>
       <div className={styles.imageContainer}>
         <Image src='/images/male.png' width='80px' height='80px'/>
       </div>
       <div>
         <p>Já tive experiencias com outras 4 empresas da área e a codar é sem dúvidas a melhor em todos os aspectos.</p>
         <h2>Pedro Ferreira</h2>
         <h3>Construtora Minari</h3>
       </div>
    </div>
  )
}