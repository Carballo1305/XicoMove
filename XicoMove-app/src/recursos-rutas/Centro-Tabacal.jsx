import React from 'react';
import Mapa from '../mapa';
import './Centro-Tabacal.css';

function Centro_Tabacal() {
    const titulo = "Centro-Tabacal";
    const paradas = [
        { nombre: "AV.5 de Mayo", tiempo: "0 min" },
        { nombre: "Centro", tiempo: "5 min" },
    ];
    return (
        <>
            <div className="container-centro-tabacal">
                <div className="centro-tabacal">
                    <div className="info-centro-tabacal">
                        <h1>{titulo}</h1>
                        <ul>
                            {paradas.map((parada, index) => (
                                <li key={index}>{parada.nombre} - {parada.tiempo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mapa-centro-tabacal">
                        <Mapa 
                            origen="Jardin Central, Xicotepec de Juárez, Puebla" 
                            destino="El Tabacal, Xicotepec de Juárez, Puebla" 
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
export default Centro_Tabacal;