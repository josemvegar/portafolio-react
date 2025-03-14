import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/inicio';
import { Portafolio } from '../components/portafolio';
import { Servicios } from '../components/servicios';
import {Curriculum} from '../components/curriculum';
import { Contacto } from '../components/contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/proyecto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        
        {/* Header y Navegación */}

        <HeaderNav></HeaderNav>

        {/* Contenido General */}
        <section className='content'>
          <Routes>
              <Route path="/" element={<Inicio></Inicio>}></Route>
              <Route path="/inicio" element={<Inicio></Inicio>}></Route>
              <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
              <Route path="/servicios" element={<Servicios></Servicios>}></Route>
              <Route path="/curriculum" element={<Curriculum></Curriculum>}></Route>
              <Route path="/contacto" element={<Contacto></Contacto>}></Route>
              <Route path="/proyecto/:id" element={<Proyecto></Proyecto>}></Route>
              <Route path='*' element={
                <div className='page'>
                  <h1 className='heading'>Error 404</h1>
                </div>
                }></Route>
          </Routes>
        </section>

        {/* Footer */}

        <Footer></Footer>

    </BrowserRouter>
  )
}
