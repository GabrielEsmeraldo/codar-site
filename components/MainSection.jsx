import Image from "next/image";
import styles from "../styles/MainSection.module.css"
import Button from "./Button";

export default function MainSection() {
   return (
      <section className={styles.mainSection}>
         <div>
            <Image src="/images/video_call.png" width="300px" height="250px"></Image>
         </div>
         <div className={styles.contentGroup}>
            <h3>Alavanque seu negócio com um</h3>
            <h2>Website incrível</h2>
            <Button value="Solicitar orçamento"></Button>
         </div>
         
      </section>
   )
}
