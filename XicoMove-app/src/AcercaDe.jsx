import React from "react";
import bannerXico from "./logoxico.png";
import "./AcercaDe.css";
import Mapa from "./mapa";
function AcercaDe() {
  const sede = [
    {
      c: "Sucursal Central",
      d: "Xicotepec de Juarez, Puebla ,Av.Universidad #1000",
      t: "7641061596",
      lat: 20.2381229,
      lng: -97.9569712,
    },
  ];

  return (
    <div className="Acerca_contenedor">
      <section className="Acerca_contenido">
        <h2>Acerca de XicoMove</h2>
        <p>
          Proyecto enfocado en mejorar la seguridad y la movilidad de los
          ciudadanos de Xicotepec de Juárez, a traves de la implementación de
          una aplicación web que permita a los usuarios reportar incidentes de
          seguridad y observar las rutas en tiempo real.
        </p>
        <h2>Nuestra Sede</h2>
        <div className="Card-sucursal">
          <div className="Sucursal-main">
            {sede.map((s, i) => (
              <div key={i} className="sucursal-item">
                <div className="sede-mapa">
                  <Mapa lat={s.lat} lng={s.lng} nombre={s.c} />
                </div>
                <h3>{s.c}</h3>
                <p>{s.d}</p>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="Acerca_logo">
        <img src={bannerXico} alt="Logo XicoMove" />
      </div>
    </div>
  );
}
export default AcercaDe;
