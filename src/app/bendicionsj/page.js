import Link from "next/link";
import styles from "./page.module.css";

export default function BendicionSJ() {
  return (
    <>
    <img src="/fondo.png" className={styles.background}/>
    <div className={styles.linkButtonBlock}>
      <h2 className={styles.bendicionTitle}>-Santuario de María, milagro de Tu providencia-</h2>
      <Link className={styles.linkButton} href="/bendicionsj/hito1">Hito 1</Link>
      <Link className={styles.linkButton} href="/bendicionsj/hito2">Hito 2</Link>
      <Link className={styles.linkButton} href="/bendicionsj/hito3">Hito 3</Link>
      <Link className={styles.linkButton} href="/bendicionsj/hito4">Hito 4</Link>
      <Link className={styles.linkButton} href="/bendicionsj/telefono">Teléfono</Link>
    </div>
    </>
  );
}
