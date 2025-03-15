import React, { useRef } from 'react'

export const Formulario = () => {

    const nombreValue = useRef();
    const apellidoValue = useRef();
    const emailValue = useRef();
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();

        console.log(nombreValue.current.value);
        console.log(apellidoValue.current.value);
        console.log(emailValue.current.value);

        // Mi caja
        let {current: caja} = miCaja;
        console.log(miCaja);
        caja.classList.add("verde");
        caja.innerHTML= "Formulario enviado."

    }

  return (
    <div>
        <h1>Formulario</h1>
        <h2 ref={miCaja} className='miCaja'>
            Pruebas con useRef
        </h2>
        <form onSubmit={mostrar}>
            <input type="text" placeholder='Nombre' ref={nombreValue}></input>
            <input type="text" placeholder='Apellido' ref={apellidoValue}></input>
            <input type="email" placeholder='Correo Electrónico' ref={emailValue}></input>
            <input type="submit" value="Enviar"></input>
        </form>

        <button onClick={() => nombreValue.current.select()}>Empezar a rellenar el fomrulario</button>
    </div>
  )
}
