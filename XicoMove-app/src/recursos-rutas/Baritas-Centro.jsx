import React from 'react';
import Mapa from '../mapa';
import './Baritas-Centro.css';

function Baritas_Centro() {
    const titulo = "Baritas-Centro";
    const paradas = [
        { nombre: "A Lopez Mateos", tiempo: "..." },
        { nombre: "Av.Zaragoza", tiempo: "2 min" },
        { nombre: "2 de Abril", tiempo: "8 min" },
        { nombre: "Centro", tiempo: "15 min" },
    ];
    return (
        <>
            <div className="container-baritas-centro">
                <div className="baritas-centro">
                    <div className="info-baritas-centro">
                        <h1>{titulo}</h1>
                        <ul>
                            {paradas.map((parada, index) => (
                                <li key={index}>{parada.nombre} - {parada.tiempo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mapa-baritas-centro">
                        <Mapa
                            origen="Baritas, Xicotepec de Juárez, Puebla"
                            destino="Centro, Xicotepec de Juárez, Puebla"
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
export default Baritas_Centro;