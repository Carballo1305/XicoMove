import React, { useState, useEffect } from 'react';
import './operadores.css'; 

function Operadores() {
    const [listaOperadores, setListaOperadores] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/conductor')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setListaOperadores(datos); 
            })
            .catch((error) => console.error("Error pidiendo los operadores:", error));
    }, []); 

    return (
        <div className="contenedor-operadores">
            <h2>Catálogo de Operadores</h2>
            <table className="tabla-operadores">
                <thead>
                    <tr>
                        {/* Pon aquí los títulos de tus columnas */}
                        <th>ID Chofer</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Turno</th>
                        <th>Unidad</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Operadores;