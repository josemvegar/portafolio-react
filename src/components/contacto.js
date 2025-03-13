import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contat' action="mailto:josevega1999.16@gmail.com">
        <input type='text' placeholder='Nombre'></input>
        <input type='text' placeholder='Apellido'></input>
        <input type='text' placeholder='Email'></input>
        <textarea type='text' placeholder='Motivo de contacto'></textarea>
        <input type='submit' vaule='Enviar'></input>
      </form>

    </div>
  )
}
