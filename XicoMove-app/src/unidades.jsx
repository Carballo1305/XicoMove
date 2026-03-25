import React, { useState, useEffect } from 'react';
import './unidades.css'; 

function Unidades() {
    const [listaUnidades, setListaUnidades] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/unidades')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setListaUnidades(datos); 
            })
            .catch((error) => console.error("Error pidiendo las unidades:", error));
    }, []); 

    return (
        <div className="contenedor-unidades">
            <h2>Catálogo de Unidades</h2>
            <table className="tabla-unidades">
                <thead>
                    <tr>
                        {/* Pon aquí los títulos de tus columnas */}
                        <th>Placa</th>
                        <th>Horario</th>
                        <th>idRuta</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUnidades.map((unidad) => (
                        <tr key={unidad.noPlaca}> 
                            <td>{unidad.noPlaca}</td>
                            <td>{unidad.horario}</td>
                            <td>{unidad.idRuta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Unidades;