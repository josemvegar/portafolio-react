import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(6230);

    const guardarTareas = (e) => {
        e.preventDefault();
        setTareas(tarea => [...tarea, e.target.titulo.value])
    }

    const eliminarTarea = id => {

        // Filtrar tareas para eliminar las que no quiero
        let nuevasTareas = tareas.filter((tarea, index) => index !== id);

        // Guardar el nuevo estado
        setTareas(nuevasTareas);

    }

    const sumar = () => {
        setContador(contador + 1);
    }

    const contadoresPasados = (acumulación) => {
        for (let i=0; i<= acumulación; i++){
            console.log("Ejecutando acumulación de contadores del pasado.");
        }
        return (<h3>Contador manual de tareas {acumulación}</h3>)
    }

    const memoContadores = useMemo(() => {
        return contadoresPasados(contador)
    }, [contador]);

  return (
    <div>
        <h1>Mis Tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name="titulo" placeholder='Describe la tarea'></input>
            <input type="submit" value="Guardar"></input>
        </form>

        {memoContadores}
        <p>(revisar consola)</p>
        <button onClick={sumar}>Sumar</button>

        <h2>Lista de Tareas</h2>
        <ul>
            {
                tareas.map((tarea, index) => {
                    return (<li key={index}>
                            {tarea}
                            &nbsp;
                            <button onClick={() => eliminarTarea(index)}>x</button>
                        </li>)
                })
            }
        </ul>
    </div>
  )
}
