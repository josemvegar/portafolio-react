import React from 'react'
import { Formulario } from './components/formulario'
import { MasUseRef } from './components/MasUseRef'

export const Pruebas = () => {
  return (
    <div>

        <h1>HOOK USEREF</h1>
        <Formulario></Formulario>
        <hr></hr>
        <MasUseRef></MasUseRef>

        <hr></hr>
        <hr></hr>
        <h1>HOOK MEMO</h1>
    </div>
  )
}
