'use client'
import React, { createContext, useState } from "react";
import getDocument from "@/firebase/firestore/getDocument";
import addOrUpdateDocument from "@/firebase/firestore/addOrUpdateDocument";
import updateDocument from "@/firebase/firestore/updateDocument";

export const DataContext = createContext({});

const { Provider } = DataContext;

export const DataContextProvider = ({ defaultValue = [], children }) => {
    const [agradecimientos, setAgradecimientos] = useState(defaultValue);
    const [estado, setEstado] = useState(null);
    
    // Fetch "estado" document
    const updateEstado = async () => {
        const estadoData = await getDocument('estado', 'estado');
        setEstado(estadoData.estado);
    };

    // Fetch "agradecimientos" document
    const updateAgradecimientos = async () => {
        const agradecimientosData = await getDocument('agradecimientos', 'agradecimientos');
        setAgradecimientos(agradecimientosData);
    };

    // Add a comment to the "comentarios" array inside "comentarios" document
    const addComentario = async (comment) => {
        await addOrUpdateDocument('comentarios', 'comentarios', comment);
    };

    // Update the "estado" field in the "estado" document
    const updateState = async (newEstado) => {
        await updateDocument('estado', 'estado', { estado: newEstado });
    };

    const context = {
        updateEstado,
        updateAgradecimientos,
        addAgradecimiento: addComentario, // Use the same logic for agradecimientos or comentarios
        addComentario,
        updateState,
        estado,
        agradecimientos,
    };

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};