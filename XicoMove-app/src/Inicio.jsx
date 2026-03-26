import React from 'react';
import banner from './assets/bannerxico.jpg';
import './Inicio.css';

function Inicio({ cambiarVista }) {
    return (
        <div className="inicio-container">
            <h1>Bienvenido a XicoMove</h1>
            <section className="sabias-que-section">
                <div className="sabias-que-texto">
                    <h2>¿Sabías Qué...?</h2>
                    <p className="info">
                        Xicotepec viene del náhuatl, que significa "cerro de jicotes" o
                        "cerro de abejorros". Desde sus orígenes, este municipio fue habitado por
                        olmecas, otomíes, totonacos, huastecos y nahuas, etnias cuyo misticismo permanece
                        hasta nuestros días.
                    </p>
                </div>
                <div className="sabias-que-imagen">
                    <img src={banner} alt="" />
                </div>
            </section>
        </div>

    );
}

export default Inicio;