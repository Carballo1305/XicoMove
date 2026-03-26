import React, { useState, useEffect } from 'react';
import RegistrarOperadores from './Registros-admin/RegistrarOperadores';
import './operadores.css'; 

function Operadores() {
    const [listaOperadores, setListaOperadores] = useState([]);
    const [OperadorEditado, setOperadorEditado] = useState(null);

    const ObtenerOperadores = () => {
        fetch('http://localhost:3001/api/conductor')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setListaOperadores(datos); 
            })
            .catch((error) => console.error("Error pidiendo los operadores:", error));
    };

    useEffect(() => {
        ObtenerOperadores();
    }, []); 

    return (
        <div className="contenedor-principal-operadores">
            <div className="seccion-formulario">
                <RegistrarOperadores
                    OperadorEditado={OperadorEditado}
                    limpiarSeleccion={()=>setOperadorEditado(null)}
                    onActualizarOperador={ObtenerOperadores}/>
            </div>
        
            <div className="seccion-tabla">
                <div className="contenedor-operadores">
                    <h2>Catálogo de Operadores</h2>
                    <table className="tabla-operadores">
                        <thead>
                            <tr>
                                <th>ID Chofer</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Turno</th>
                                <th>Unidad</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaOperadores.map((conductor) => (
                                <tr key={conductor.idChofer}> 
                                    <td>{conductor.idChofer}</td>
                                    <td>{conductor.nombre}</td>
                                    <td>{conductor.apellidoP}</td>
                                    <td>{conductor.apellidoM}</td>
                                    <td>{conductor.turno}</td>
                                    <td>{conductor.noPlaca}</td>
                                    <td><button className='Editar'>Editar</button></td>
                                    <td><button className='Borrar'>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
}

export default Operadores;