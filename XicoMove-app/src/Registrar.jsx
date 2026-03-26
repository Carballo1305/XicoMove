import React, { useState } from 'react';
import './Registrar.css';

function Registrar({ onLogin, cambiarVista }) {
    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [Email, setEmail] = useState('');
    const [curp, setCurp] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

const handleRegistrar = async (e) => {
        e.preventDefault();
        setError('');
        setExito('');

        try {
            const respuesta = await fetch('http://localhost:3001/api/registrar', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, apellidoP, apellidoM, Email, curp, contraseña }) 
            });

            const data = await respuesta.json();
            if (respuesta.ok && data.exito) {
                setExito(data.mensaje);
                setTimeout(() => {
                    if(onLogin) onLogin({ rol: data.rol }); 
                }, 1000); 
            } else {
                setError(data.error || 'Error al registrarse');
            }
        } catch (err) {
            console.error(err);
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <>
        <div className="container-registrar">
            <div className="registrar">
                <div className="info-registrar">
                    <h1>Registrar</h1>
                    <form onSubmit={handleRegistrar}>
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" placeholder="Apellido Paterno" value={apellidoP} onChange={(e) => setApellidoP(e.target.value)} />
                        <input type="text" placeholder="Apellido Materno" value={apellidoM} onChange={(e) => setApellidoM(e.target.value)} />
                        <input type="email" placeholder="Correo Electrónico" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="CURP" value={curp} onChange={(e) => setCurp(e.target.value)} />
                        <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <p>¿Tienes cuenta? <a href="#" onClick={() => cambiarVista('Login')}>Inicia sesión aquí</a></p>
                        <button type="submit">Registrar</button>
                    </form>
                    {error && <p className="error-msg">{error}</p>}
                    {exito && <p className="success-msg">{exito}</p>}
                </div>
            </div>
        </div>
        </>
    );
}
export default Registrar;