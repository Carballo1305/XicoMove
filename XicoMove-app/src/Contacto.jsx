import React from 'react';
import './Contacto.css';
function Contacto() {
    return (
        <div className="contenedor-contacto">
            <div className="card-contacto">
                <h2>Contacto</h2>
                <form className="form-contacto">
                    <input type="text" placeholder="Nombre completo" className="input-field" />
                    <input type="email" placeholder="Correo electrónico" className="input-field" />
                    <textarea placeholder="Quejas o sugerencias..." className="input-field mensaje"></textarea>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;