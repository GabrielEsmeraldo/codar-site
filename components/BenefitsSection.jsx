import Image from "next/image"
import styles from "../styles/BenefitsSection.module.css"

export default function BenefitsSection() {
   return (
      <section className={styles.benefits}>
         <div>
            <ul>
               <li><i class="fa-solid fa-circle-check circleCheck"></i>Domínio personalizado</li>
               <li><i class="fa-solid fa-circle-check"></i>Hospedagem</li>
               <li><i class="fa-solid fa-circle-check"></i>Site Responsivo</li>
               <li><i class="fa-solid fa-circle-check"></i>Redes sociais</li>
               <li><i class="fa-solid fa-circle-check"></i>Chat Online</li>
               <li><i class="fa-solid fa-circle-check"></i>Blog integrado</li>
            </ul>
         </div>
         <div className={styles.item}>
            <Image src="/images/coding.png" width="320px" height="300px"></Image>
         </div>
      </section>
   )
}