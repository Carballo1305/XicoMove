import React, { useState, useEffect } from 'react';
import RegistrarUnidades from './Registros-admin/RegistrarUnidades';
import './unidades.css'; 

function Unidades() {
    const [listaUnidades, setListaUnidades] = useState([]);
    const [UnidadEditada, setUnidadEditada] = useState(null);

    const ObtenerUnidades = () => {
        fetch('http://localhost:3001/api/unidades')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setListaUnidades(datos); 
            })
            .catch((error) => console.error("Error pidiendo las unidades:", error));
    };

    useEffect(() => {
        ObtenerUnidades();
    }, []); 

    return (
        <div className="contenedor-principal-unidades">
            <div className="seccion-formulario">
                <RegistrarUnidades
                    UnidadEditada={UnidadEditada}
                    limpiarSeleccion={()=>setUnidadEditada(null)}
                    onActualizarUnidad={ObtenerUnidades}/>
            </div>

            <div className="seccion-tabla">
                <div className="contenedor-unidades">
                    <h2>Catálogo de Unidades</h2>
                    <table className="tabla-unidades">
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Horario</th>
                                <th>idRuta</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaUnidades.map((unidad) => (
                                <tr key={unidad.noPlaca}> 
                                    <td>{unidad.noPlaca}</td>
                                    <td>{unidad.horario}</td>
                                    <td>{unidad.idRuta}</td>
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

export default Unidades;