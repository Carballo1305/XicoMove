import React from 'react';
import PropTypes from 'prop-types';
import logoxico from './logoxico.png';
import './encabezado.css';

function Encabezado({cambiarVista}) {
    return (
        <header className='Encabezado'>
        <Logotipo />
        <Menu cambiarVista={cambiarVista} />
        </header>
    );
}   
function Logotipo() {
    return (
        <div className="Logo">
            <img src={logoxico} alt="Logo XicoMove" />
        </div>
    );
}
function Menu({cambiarVista}) {
    const opciones= [
        { id:'Inicio', nombre:'Inicio' },
        { id:'Rutas', nombre:'Rutas'},
        { id:'Contacto', nombre:'Contacto'},
        { id:'AcercaDe', nombre:'Acerca de'},
    
    ];
    return(
        <nav className='Menu'>
            <ul>
                {opciones.map((opcion) => (
                    <li key={opcion.id} onClick={() => cambiarVista(opcion.id)}>
                        {opcion.nombre}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
Encabezado.propTypes = {cambiarVista: PropTypes.func.isRequired};
Menu.propTypes = {cambiarVista: PropTypes.func.isRequired};

export default Encabezado;  