import React from 'react'
import { Formulario } from './components/formulario'
import { MasUseRef } from './components/MasUseRef'
import { Gestion } from './components/Gestion'
import { Tareas } from './components/Tareas'
import { EjemploUseLayoutEffect } from './components/EjemploUseLayoutEffect'
import { MisJuegos } from './components/MisJuegos'

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
        <Gestion></Gestion>

        <hr></hr>

        <h1>Más HOOK MEMO (useMemo)</h1>
        <Tareas></Tareas>

        <hr/><hr/>

        <h1>Hook useLayoutEffect</h1>
        <EjemploUseLayoutEffect></EjemploUseLayoutEffect>

        <hr/><hr/>
        <h1>Hook Reducer</h1>
        <MisJuegos></MisJuegos>
    </div>
  )
}
