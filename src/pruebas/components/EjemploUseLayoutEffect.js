import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploUseLayoutEffect = () => {

    const [mostrar, setMostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(() => {
        console.log("useLayoutEffect: Componente Cargado");
    }, []);

    /* En general con este ejemplo de victor no se ve mucha diferencia
    Pero en esencia, la cuestión es que el useLayoutEffect se ejecuta antes de que termine
    la renderización del componente, y useEffect, justo después de que termina
    la renderización. */ 

    useEffect(() => {
        console.log("useEffect: Componente Cargado");
        if(caja.current == null){
            return
        }

        const {bottom} = boton.current.getBoundingClientRect();
        console.log(bottom);
        caja.current.style.top = `${bottom - 400}px`;
        caja.current.style.left = `${bottom - 400}px`;

    }, [mostrar]);

  return (
    <div className='relativo'>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>

        <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar Mensaje</button>

        {mostrar && // Esto es para decir si tal condición es true, entonces haz tal cosa
            <div id="caja" ref={caja}>Hola Soy un Mensaje</div>
        }
        
    </div>
  )
}
