import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto.class.js';

const Contact = ({ contacto })  => {
  return (
    <div>
        <h2>Nombre: { contacto.nombre }</h2>
        <h2>Apellido: { contacto.apellido }</h2>
        <h4>Email: { contacto.email }</h4>
        <h4>Conectado: { contacto.conectado ? 'CONTACTO EN LÍNEA':'CONTACTO NO DISPONIBLE' } </h4>
    </div>
  );
};
Contact.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default Contact;  