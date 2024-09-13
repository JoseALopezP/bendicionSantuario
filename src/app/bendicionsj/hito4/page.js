'use client'
import HitoComponent from "@/app/components/HitoComponent";
import styles from "./page.module.css";
import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function hito4() {
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
  return (
    <HitoComponent hito={'4'}/>
  );
}
