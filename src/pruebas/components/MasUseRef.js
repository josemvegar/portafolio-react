import React, { useEffect, useRef, useState } from 'react'

export const MasUseRef = () => {

    let [numeroSaludos, setNumeroSaludos] = useState(0);
    const saludoEnCola = useRef(numeroSaludos);

    useEffect(() => {
        saludoEnCola.current = numeroSaludos;
        setTimeout(() => {
            console.log("Mensajes en cola" + saludoEnCola.current);
        }, 2000);
    }, [numeroSaludos]);

    const saludo = e =>{
        console.log("Saludo enviado.");
        setNumeroSaludos(numeroSaludos + 1);

    }

  return (
    <div>

        <h1>Más Ejemplos UseRef</h1>
        <h2>Saludos enviados: {numeroSaludos}</h2>
        <button onClick={saludo}>Enviar Saludo</button>
        <p>(Revisar consola)</p>

    </div>
  )
}
