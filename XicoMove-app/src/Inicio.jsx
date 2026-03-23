import React from 'react';
function Inicio({ cambiarVista }) {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Xico<span>Move</span></h1>
                <p>La forma más rápida y sencilla de conocer las rutas de transporte en Xicotepec.</p>
                <div className="hero-btns">
                    <button className="btn-primario" onClick={() => cambiarVista('Rutas')}>Explorar Rutas</button>
                    <button className="btn-secundario" onClick={() => cambiarVista('AcercaDe')}>Saber más</button>
                </div>
            </div>
        </section>
    );
}
export default Inicio;