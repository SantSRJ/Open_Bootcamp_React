import React from 'react'
import { Contacto } from './contacto.class'
import Contact from './contacto.jsx';     

const Conexion = () => {

    const usuario1 = new Contacto('Santiago', 'Mendoza', 'srjmendoza@hotmail.com', true);

  return (
    <div>
        <h1>Primera práctica en OP</h1>
        <Contact contacto={ usuario1 }/>
    </div>
  )
};
export default Conexion;
