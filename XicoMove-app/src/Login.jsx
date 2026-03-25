import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setExito('');

        try {
            const respuesta = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario, contraseña }) 
            });

            const data = await respuesta.json();
            if (respuesta.ok && data.exito) {
                setExito(data.mensaje);
                setTimeout(() => {
                    if(onLogin) onLogin({ rol: data.rol }); 
                }, 1000); 
            } else {
                setError(data.error || 'Error al iniciar sesión');
            }
        } catch (err) {
            console.error(err);
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <>
        <div className="container-login">
            <div className="login">
                <div className="info-login">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    {error && <p className="error-msg">{error}</p>}
                    {exito && <p className="success-msg">{exito}</p>}
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;