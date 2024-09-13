'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BendicionSJ() {
  const router = useRouter()
  const {
    updateEstado,
    estado
  } = useContext(DataContext);

  useEffect(() =>{
    console.log(estado)
    if(estado === '1'){
      router.push("/bendicionsj/hito1")
    }else{
      if(estado === '2'){
        router.push("/bendicionsj/hito2")
      }else{
        if(estado === '3'){
          router.push("/bendicionsj/hito3")
        }else{
          if(estado === '4'){
            router.push("/bendicionsj/hito4")
          }
        }
      }
    }
  }, [estado])
  
  useEffect(() => {
    updateEstado()
    const timerID = setInterval(() => updateEstado(), 10000);
    return () => {
        clearInterval(timerID);
    };
  }, []);
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
