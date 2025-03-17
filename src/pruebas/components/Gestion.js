import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        console.log("La vista de gestion se ha renderizado.");
    }, [nombre, pagina]);

    const gestorInput = useRef();

    const asginarGestor = e => {
        setNombre(gestorInput.current.value);
    }

    // Tambien se podría hacer asi sin useRef:
    /*const asginarGestor = e => {
        setNombre(e.target.value);
    }*/


  return (
    <div>
        <h1>Nombre del Gestor: {nombre}</h1>

        <input type='text' ref={gestorInput} onChange={asginarGestor} placeholder='Introduce tu nombre de Gestor'></input>

        <h2>Listado de Empleados</h2>

        <p>Los usuarios son gestionados por {nombre} y vienen de jsonplaceholder... </p>
        <Empleados pagina={pagina}></Empleados>

        <button onClick={() => setPagina(1)}>Página 1</button>
        <button onClick={() => setPagina(2)}>Página 2</button>
    </div>
  )
}
