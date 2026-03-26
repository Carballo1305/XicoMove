import { useState } from 'react'
import Encabezado from './encabezado';
import './App.css'
import Rutas from './Rutas';
import Contacto from './Contacto';
import Mapa from './mapa';
import Centro_Morelos from './recursos-rutas/Centro-Morelos';
import Centro_Tabacal from './recursos-rutas/Centro-Tabacal';
import Utxj_Tabacal from './recursos-rutas/Utxj-Tabacal';
import Baritas_Centro from './recursos-rutas/Baritas-Centro';
import Centro_Utxj from './recursos-rutas/Centro_Utxj';
import Login from './Login';
import Registrar from './Registrar';
import Unidades from './unidades';
import Operadores from './operadores';
import Inicio from './Inicio';

const PlaceholderVista = ({ titulo }) => (
  <div style={{ color: "white", padding: "50px", textAlign: "center" }}>
    <h1>{titulo}</h1>
    <p>Pantalla en construcción</p>
  </div>
);

function App() {
  const [vista, setVista] = useState('Inicio');
  const [UsuarioActual, setUsuarioActual] = useState(null);

  return (
    <div className='App-container'>
      <Encabezado cambiarVista={setVista} UsuarioActual={UsuarioActual} setUsuarioActual={setUsuarioActual} />

      <main className='Contenido'>
        {vista === 'Inicio' && <Inicio cambiarVista={setVista} />}
        {vista === 'Login' && <Login cambiarVista={setVista} onLogin={(user) => { setUsuarioActual(user); setVista('Inicio'); }} />}
        {vista === 'Registrar' && <Registrar cambiarVista={setVista} onLogin={(user) => { setUsuarioActual(user); setVista('Inicio'); }} />}
        {vista === 'Rutas' && (<Rutas cambiarVista={setVista} />)}
        {vista === 'Contacto' && (<Contacto />)}
        {vista === 'AcercaDe' && <h1>Acerca de XicoMove</h1>}
        {vista === 'Centro-Tabacal' && <Centro_Tabacal />}
        {vista === 'Centro-Morelos' && <Centro_Morelos />}
        {vista === 'UTXJ-Tabacal' && <Utxj_Tabacal />}
        {vista === 'Baritas-Centro' && <Baritas_Centro />}
        {vista === 'Centro-Utxj' && <Centro_Utxj />}
        
        {/* Vistas de Administrador */}
        {vista === 'Añadir Unidades' && <Unidades/> }
        {vista === 'Añadir Operadores' && <Operadores/>}
        {vista === 'Historial de Reportes' && <PlaceholderVista titulo="Historial de Reportes de Pánico" />}

        <Mapa lat={20.2390} lng={-97.9982} nombre="XicoMove" />
      </main>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Acerca de Nosotros</h4>
            <p>XicoMove es un proyecto dedicado a mejorar la seguridad y movilidad en la región de Xicotepec de Juárez.</p>
          </div>

          <div className="footer-section">
            <h4>Nuestros Valores</h4>
            <ul>
              <li>Transparencia</li>
              <li>Innovación</li>
              <li>Seguridad</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p> Teléfono: (233) 316-0440</p>
            <p> Email: xicomove@gmail.com</p>
            <p> Xicotepec de Juárez, Puebla</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 XicoMove. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
export default App;