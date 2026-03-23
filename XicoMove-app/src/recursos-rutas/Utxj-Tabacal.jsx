import React from 'react';
import Mapa from '../mapa';
import './Utxj-Tabacal.css';

function Utxj_Tabacal() {
    const titulo = "UTXJ-Tabacal";
    const paradas = [
        { nombre: "UTXJ", tiempo: "..." },
        { nombre: "2 Caminos", tiempo: "6 min" },
        { nombre: "San Isidro", tiempo: "13 min" },
        { nombre: "Colegio Bachilleres", tiempo: "15 min" },
        { nombre: "Sec.Ignacio Z.", tiempo: "20 min" },
        { nombre: "El Tabacal", tiempo: "30 min" },
    ];
    return (
        <>
            <div className="container-utxj-tabacal">
                <div className="utxj-tabacal">
                    <div className="info-utxj-tabacal">
                        <h1>{titulo}</h1>
                        <ul>
                            {paradas.map((parada, index) => (
                                <li key={index}>{parada.nombre} - {parada.tiempo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mapa-utxj-tabacal">
                        <Mapa
                            origen="UTXJ, Xicotepec de Juárez, Puebla"
                            destino="El Tabacal, Xicotepec de Juárez, Puebla"
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
export default Utxj_Tabacal;