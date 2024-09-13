'use client'
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { DataContext } from "@/context/DataContext";

export default function BendicionSJControl() {
  const {
    updateState,
    updateEstado,
    estado
  } = useContext(DataContext);
  useEffect(() => {
    const timerID = setInterval(() => updateEstado(), 10000);
    return () => {
        clearInterval(timerID);
    };
  }, []);
  return (
    <div className={styles.buttonsBlock}>
        <h1>{estado}</h1>
        <button onClick={() => updateState('0')}>Home</button>
        <button onClick={() => updateState('1')}>Hito 1</button>
        <button onClick={() => updateState('2')}>Hito 2</button>
        <button onClick={() => updateState('3')}>Hito 3</button>
        <button onClick={() => updateState('4')}>Hito 4</button>
        <button onClick={() => updateState('5')}>Teléfono</button>
    </div>
  );
}
