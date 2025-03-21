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

    const eliminarJuego = id => {

        const action = {
            type: "borrar",
            payload: id
        }

        dispatch(action);

    }

    const editarJuego = (e, id) => {
        let juego ={
            id: id,
            titulo: e.target.value,
            descripcion: e.target.value,
        }

        const action = {
            type: "editar",
            payload: juego
        }

        dispatch(action);

    }

    const conseguirDatos = e => {
        e.preventDefault();

        let juego ={
            id: new Date().getTime(),
            titulo: e.target.tituloJuegos.value,
            descripcion: e.target.descJuegos.value,
        }

        console.log(juego);

        const accion = {
            type: "crear",
            payload: juego
        };

        dispatch(accion);

        console.log(juegos);
    }

  return (
    <div>
        <h1>Estos Son mis Juegos</h1>

        <p>Número de Juegos: {juegos.length}</p>

        <ul>
            {
                juegos.map(juego => (
                    <li key={juego.id}>{juego.titulo}&nbsp;
                        <button onClick={e => eliminarJuego(juego.id)}>X</button>&nbsp;
                        <input type="text" onBlur={e => editarJuego(e, juego.id)} onKeyPress={e => {
                                if (e.key === "Enter") editarJuego(e, juego.id)}
                            } placeholder={`editar ${juego.titulo}`} />
                    </li>
                ))
            }
            
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
