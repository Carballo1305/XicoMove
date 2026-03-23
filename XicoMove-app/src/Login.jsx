import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (usuario === 'admin' && contraseña === 'admin') {
            setExito('Login exitoso como Administrador');
            setError('');
            setTimeout(() => {
                if(onLogin) onLogin({ rol: 'admin' });
            }, 1000); 
        } else if (usuario === 'usuario' && contraseña === '1234') {
            setExito('Login exitoso como Usuario');
            setError('');
            setTimeout(() => {
                if(onLogin) onLogin({ rol: 'usuario' });
            }, 1000); 
        } else {
            setError('Usuario o contraseña incorrectos');
            setExito('');
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