import React from 'react';
import Mapa from '../mapa';
import './Centro-Morelos.css';
function Centro_Morelos(){
    const titulo = "Centro-Morelos";
    const paradas = [
        { nombre: "17 de Junio", tiempo: "....." },
        { nombre: "2 de Abril", tiempo: "5 min" },
        { nombre: "Al Mirador", tiempo: "10 min" },
        { nombre: "Santa Cruz", tiempo: "15 min" },
        { nombre: "Morelos", tiempo: "20 min" },
    ];

  return (
    <>
    <div className="container-centro-morelos">
      <div className="centro-morelos">
        <div className="info-centro-morelos">
          <h1>{titulo}</h1>
          <ul>
            {paradas.map((parada, index) => (
              <li key={index}>{parada.nombre} - {parada.tiempo}</li>
            ))}
          </ul>
        </div>
        <div className="mapa-centro-morelos">
          <Mapa 
          origen="Centro, Xicotepec de Juárez, Puebla"
          destino="Morelos, Xicotepec de Juárez, Puebla"
          />
        </div>
      </div>
    </div>
    </>


  );
}
export default Centro_Morelos;