import React from 'react';
import {Link} from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='page home'>
      <h1>Hola Soy José Vega, soy desarrollador web venezolado y ofrezco mis servicios de <strong>desarrollador.</strong></h1>
      <h2>Te ayudo a tener tu sitio web y tener visibilidad en interndet. <Link to="/contacto">Contacta conmigo</Link></h2>
      <section className='lastWorks'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>
      </section>
    </div>
  )
}
