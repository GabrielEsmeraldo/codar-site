import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css"
import Button from "./Button";

export default function Navbar() {

   const [Open, setOpen] = useState(false)

   const menuToggle = () => {
      setOpen(!Open)
   }   

   return (
      <>
         <nav className={styles.navbar}>
            <h1>Codar<span>.</span></h1>
            <ul>
               <li><Link href='#'>Início</Link></li>
               <li><Link href='#'>Serviços</Link></li>
               <li><Link href='#'>Contato</Link></li>
               <li><Button value="Login"></Button></li>
            </ul>
         </nav>

         <nav className={styles.responsive_navbar}>
            <h1>Codar<span>.</span></h1>
            <div className={styles.menu_icon} onClick={menuToggle}>
               <div className={styles.one}></div>
               <div className={styles.two}></div>
               <div className={styles.three}></div>
            </div>
         </nav>
         <div>
            <ul className={Open ? `${styles.menu_list}` : `${styles.menu_list_close}` }>
               <li><Link href='#'>Início</Link></li>
               <li><Link href='#'>Serviços</Link></li>
               <li><Link href='#'>Contato</Link></li>
               <li><Button value="Login"></Button></li>
            </ul>
         </div>
      </>

   )
}