import React from 'react';
import PropTypes from 'prop-types';
import logoxico from './logoxico.png';
import './encabezado.css';

function Encabezado({cambiarVista, UsuarioActual, setUsuarioActual}) {
    return (
        <header className='Encabezado'>
        <Logotipo />
        <Menu cambiarVista={cambiarVista} UsuarioActual={UsuarioActual} setUsuarioActual={setUsuarioActual} />
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
function Menu({cambiarVista, UsuarioActual, setUsuarioActual}) {
    let opciones = [];

    if (UsuarioActual?.rol === 'admin') {
        opciones = [
            { id:'Inicio', nombre:'Inicio' },
            { id:'Añadir Unidades', nombre:'Añadir Unidades' },
            { id:'Añadir Operadores', nombre:'Añadir Operadores' },
            { id:'Historial de Reportes', nombre:'Historial de Reportes' },
            { id:'Rutas', nombre:'Rutas' },
            { id:'Logout', nombre:'Cerrar Sesión'}
        ];
    } else if (UsuarioActual?.rol === 'usuario') {
        opciones = [
            { id:'Inicio', nombre:'Inicio' },
            { id:'Rutas', nombre:'Rutas'},
            { id:'Contacto', nombre:'Contacto'},
            { id:'AcercaDe', nombre:'Acerca de'},
            { id:'Logout', nombre:'Cerrar Sesión'}
        ];
    } else {
        opciones = [
            { id:'Inicio', nombre:'Inicio' },
            { id:'Login', nombre:'Iniciar Sesión' }
        ];
    }

    return(
        <nav className='Menu'>
            <ul>
                {opciones.map((opcion) => (
                    <li key={opcion.id} onClick={() => {
                        if (opcion.id === 'Logout') {
                            setUsuarioActual(null);
                            cambiarVista('Inicio');
                        } else {
                            cambiarVista(opcion.id);
                        }
                    }}>
                        {opcion.nombre}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Encabezado;  