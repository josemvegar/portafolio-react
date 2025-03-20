import React, { useEffect, useReducer } from 'react'
import { juegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(juegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatos = e => {
        e.preventDefault();

        let juego ={
            id: new Date().getTime(),
            titulo: e.target.tituloJuegos.value,
            descripcion: e.target.descJuegos.value,
        }

        console.log(juego);
    }

  return (
    <div>
        <h1>Estos Son mis Juegos</h1>

        <p>Número de Juegos: 15</p>

        <ul>
            <li>Gta1</li>
            <li>Gta2</li>
            <li>Gta3</li>
        </ul>

        <h3>Agregar Juego</h3>
        <form onSubmit={conseguirDatos}>
            <input type="text" name="tituloJuegos" placeholder='Titulo'/>
            <textarea name="descJuegos" placeholder='descripción'></textarea>
            <input type='submit' value="Guardar"/>
        </form>

    </div>
  )
}
