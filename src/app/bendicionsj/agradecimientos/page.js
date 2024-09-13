'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Agradecimientos() {
  const router = useRouter()
  const [agrad, setAgrad] = useState('')
  const {
    updateEstado,
    estado,
    addComentario,
    updateAgradecimientos,
    agradecimientos
  } = useContext(DataContext);
  const handleSubmit = (event) =>{
    event.preventDefault();
    addComentario(agrad)
  }
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
          }else{
            if(estado === '5'){
              router.push("/bendicionsj/telefono")
            }else{
              if(estado === '6'){
                router.push("/bendicionsj/agradecimientos")
              }
            }
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
  useEffect(() => {
    updateAgradecimientos()
    console.log(agradecimientos)
    const timerID = setInterval(() => updateAgradecimientos(), 10000);
    return () => {
        clearInterval(timerID);
    };
  }, []);
  return (
    <>
    <Link className={styles.backButton} href="/bendicionsj">&nbsp;&nbsp;&lt;</Link>
    <img src="/fondo.png" className={styles.background}/>
    <div className={styles.linkButtonBlock}>
      <form onSubmit={(event) => handleSubmit(event)} >
        <input type="text" className={styles.inputSend} placeholder="Te agradezco por..." onChange={e => setAgrad(e.target.value)}/>
        <button type="submit" className={styles.buttonSend}>Enviar</button>
      </form>
      <p className={styles.agradecimientos}>{agradecimientos}</p>
    </div>
    </>
  );
}
