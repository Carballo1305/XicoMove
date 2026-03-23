import React from 'react';
import Mapa from '../mapa';
import './Centro-Utxj.css';

function Centro_Utxj() {
    const titulo = "Centro-Utxj";
    const paradas = [
        { nombre: "Centro", tiempo: "..." },
        { nombre: "17 de Junio", tiempo: "5 min" },
        { nombre: "Coppel", tiempo: "12 min" },
        { nombre: "Aurrera", tiempo: "13 min" },
        { nombre: "Fovisste", tiempo: "25 min" },
        { nombre: "UTXJ", tiempo: "30 min" },
    ];
    return (
        <>
            <div className="container-centro-utxj">
                <div className="centro-utxj">
                    <div className="info-centro-utxj">
                        <h1>{titulo}</h1>
                        <ul>
                            {paradas.map((parada, index) => (
                                <li key={index}>{parada.nombre} - {parada.tiempo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mapa-centro-utxj">
                        <Mapa
                            origen="Centro, Xicotepec de Juárez, Puebla"
                            destino="UTXJ, Xicotepec de Juárez, Puebla"
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
export default Centro_Utxj;