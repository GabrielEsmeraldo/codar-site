import styles from "../styles/Contact.module.css"

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Nossa equipe está a disposição!</h2>
      <input type="text" placeholder="(88)996808522"/>
      <button>Ligamos para você</button>
    </div>
  )
}