import React from 'react';
import './Rutas.css';
import Centro from './assets/Cards-Rutas/Centro.png';
import Baritas from './assets/Cards-Rutas/Baritas.jpg';
import Tabacal from './assets/Cards-Rutas/Tabacal.avif';
import Morelos from './assets/Cards-Rutas/morelos.jpg';
import UTXJ from './assets/Cards-Rutas/UTXJ.png';


function Rutas({ cambiarVista }) {

    const rutas = [
        { Id: 1, Nombre: "Centro-Utxj", Descripcion: "Ruta que conecta el centro de Xicotepec con la Universidad Tecnológica de Xicotepec de Juárez", Imagen: Centro, Imagen2: UTXJ },
        { Id: 2, Nombre: "Baritas-Centro", Descripcion: "Ruta que conecta Baritas con el centro de Xicotepec", Imagen: Baritas, Imagen2: Centro },
        { Id: 3, Nombre: "UTXJ-Tabacal", Descripcion: "Ruta que conecta la Universidad Tecnológica de Xicotepec de Juárez con Tabacal", Imagen: UTXJ, Imagen2: Tabacal },
        { Id: 4, Nombre: "Centro-Tabacal", Descripcion: "Ruta que conecta el centro de Xicotepec con Tabacal", Imagen: Centro, Imagen2: Tabacal },
        { Id: 5, Nombre: "Centro-Morelos", Descripcion: "Ruta que conecta el centro de Xicotepec con Morelos", Imagen: Centro, Imagen2: Morelos },
    ];

    return (
        <>
            <h2>Rutas Disponibles</h2>
            <div className="cards-rutas">
                {rutas.map(ruta => (
                    <div key={ruta.Id} className="ruta-card" onClick={() => cambiarVista(ruta.Nombre)}>
                        <div className="ruta-imagenes">
                            <img src={ruta.Imagen} alt={ruta.Nombre} className="img-mitad" />
                            <img src={ruta.Imagen2} alt={ruta.Nombre} className="img-mitad" />
                        </div>
                        <div className="ruta-info">
                            <h3>{ruta.Nombre}</h3>
                            <p>{ruta.Descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Rutas;