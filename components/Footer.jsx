import styles from "../styles/Footer.module.css"

export default function footer() {
   return (
      <footer className={styles.footer}>
         <div>
            <h2>Codar<span>.</span></h2>
            <p>Criamos websites incríveis</p>
         </div>
         <div>
            <h2>Sobre</h2>
            <p>Amamos criar soluções e entregar sites incríveis</p>
         </div>
         <div>
            <h2>Contato</h2>
            <ul>
               <li>123 Av. Manjar - Nárnia</li>
               <li>+55 88 993546273</li>
               <li>contato@codar.com</li>
            </ul>
         </div>
         <div>
            <h2>Redes sociais</h2>
            <span><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-github"></i></span>
         </div>
      </footer>
   )
}